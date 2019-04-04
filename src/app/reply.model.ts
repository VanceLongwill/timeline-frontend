export class Reply {
  id: number;
  author: string;
  body: string;
  createdAt: Date;
  constructor(
    public parentId: number // refers to the parent message
  ) {}
}
