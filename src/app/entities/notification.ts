export interface NotifcationData {
  recipientId: string;
  content: string;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private data: NotifcationData;

  constructor(data: NotifcationData) {
    this.data = data;
  }

  public set recipientId(recipientId: string) {
    this.data.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.data.recipientId;
  }

  public set content(content: string) {
    this.data.content = content;
  }

  public get content(): string {
    return this.data.content;
  }

  public set category(category: string) {
    this.data.category = category;
  }

  public get category(): string {
    return this.data.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.data.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.data.readAt;
  }

  public get createdAt(): Date {
    return this.data.createdAt;
  }
}
