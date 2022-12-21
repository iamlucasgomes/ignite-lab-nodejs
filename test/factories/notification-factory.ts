import { Notification, NotificationData } from '@app/entities/notification';
import { Content } from '@app/entities/notification-content';

type Override = Partial<NotificationData>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação'),
    recipientId: 'recipient-1',
    ...override,
  });
}
