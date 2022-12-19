import { inMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Test send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new inMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'Social',
      recipientId: 'example-recipient-id',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications.at(0)).toEqual(notification);
  });
});
