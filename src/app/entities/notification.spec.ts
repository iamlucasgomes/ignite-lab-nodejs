import { Content } from './notification-content';
import { Notification } from './notification';

describe('tests notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'Social',
      recipientId: 'example-recipient-id',
      createdAt: new Date(),
    });
    expect(notification).toBeTruthy();
  });
});
