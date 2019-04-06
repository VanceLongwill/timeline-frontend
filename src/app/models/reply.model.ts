import { Message } from './message.model';

export class Reply {
  id: string;
  author: string;
  body: string;
  createdAt: Date;
  constructor(
    public parentId: Message['id'], // refers to the parent message
  ) {}
}
