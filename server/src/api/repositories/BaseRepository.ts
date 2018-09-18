import { IRead, IWrite } from "./interfaces";
import * as Sql from "sequelize";

export default abstract class BaseRepository<T extends ModelInstance<Y>, Y>
  implements IWrite<T, Y>, IRead<T, Y> {
  protected readonly _collection: Sql.Model<T, Y>;

  constructor(collection: Sql.Model<T, Y>) {
    this._collection = collection;
  }
  async create(item: Y) {
    return await this._collection.create(item);
  }

  async update(id: string, item: Partial<Y>) {
    const instance = await this.findById(id);
    await instance.update(item);
    return instance;
  }

  async delete(id: string) {
    const instance = await this._collection.findById(id);
    if (!instance) return false;

    await instance.destroy();
    return true;
  }

  async findAll(item: Y) {
    const results = await this._collection.findAll({ where: item });
    return results || [];
  }

  async findById(id: string) {
    const result = await this._collection.findById(id);
    if (!result) throw new Error("Not Found");
    return result;
  }
}
