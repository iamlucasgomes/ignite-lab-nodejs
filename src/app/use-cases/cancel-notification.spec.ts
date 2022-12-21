import { Notification } from '@app/entities/notification';
import { Content } from '@app/entities/notification-content';
import { inMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Test send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new inMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    const notification = new Notification({
      category: 'social',
      content: new Content('Nova solicitação'),
      recipientId: 'example-recipient-id',
    });

    await notificationRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationRepository.notifications.at(0)?.canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const notificationRepository = new inMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
