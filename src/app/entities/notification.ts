import { Content } from './notification-content';
import { Replace } from 'src/helpers/Replace';
import { randomUUID } from 'node:crypto';

export interface NotificationData {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private data: NotificationData;

  constructor(
    data: Replace<NotificationData, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.data = {
      ...data,
      createdAt: data.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this.data.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.data.recipientId;
  }

  public set content(content: Content) {
    this.data.content = content;
  }

  public get content(): Content {
    return this.data.content;
  }

  public set category(category: string) {
    this.data.category = category;
  }

  public get category(): string {
    return this.data.category;
  }

  public read() {
    this.data.readAt = new Date();
  }
  public unread() {
    this.data.readAt = null;
  }

  public get readAt(): Date | null | undefined {
    return this.data.readAt;
  }

  public cancel() {
    this.data.canceledAt = new Date();
  }

  public get canceledAt(): Date | null | undefined {
    return this.data.canceledAt;
  }

  public get createdAt(): Date {
    return this.data.createdAt;
  }
}
