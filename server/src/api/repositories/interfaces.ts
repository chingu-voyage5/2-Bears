export interface IWrite<T, Y> {
  create(item: Y): Promise<T>;
  update(id: string, item: Partial<Y>): Promise<T>;
  delete(id: string): Promise<boolean>;
}

export interface IRead<T, Y> {
  findAll(item: Y): Promise<T[]>;
  findById(id: string): Promise<T>;
}
