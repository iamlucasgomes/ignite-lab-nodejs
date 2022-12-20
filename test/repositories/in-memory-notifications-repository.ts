import { Notification } from '@app/entities/notification';
import { NotificationRepository } from '@app/repositories/notification-repository';

export class inMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
