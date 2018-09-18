import { Sequelize, STRING, UUID, INTEGER } from "sequelize";
import { GeneratedAttributes } from "./interfaces";

export interface Attributes extends GeneratedAttributes {
  order_item_quantity: number;
  order_item_price: string;
  order_item_details?: string;
}

export type Instance = ModelInstance<Attributes>;

export default (sequelize: Sequelize) => {
  const attributes: SequelizeAttributes<Attributes> = {
    id: { type: UUID, primaryKey: true },
    order_item_quantity: { type: INTEGER },
    order_item_price: { type: STRING },
    order_item_details: { type: STRING, allowNull: true }
  };
  return sequelize.define<Instance, Attributes>("order_items", attributes);
};
