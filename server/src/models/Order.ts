import { Sequelize, STRING, UUID, DATE } from "sequelize";
import { GeneratedAttributes } from "./interfaces";

export interface Attributes extends GeneratedAttributes {
  order_date_ordered: Date;
  order_details?: string;
}

export type Instance = ModelInstance<Attributes>;

export default (sequelize: Sequelize) => {
  const attributes: SequelizeAttributes<Attributes> = {
    id: { type: UUID, primaryKey: true },
    order_details: { type: STRING, allowNull: true },
    order_date_ordered: { type: DATE }
  };
  return sequelize.define<Instance, Attributes>("orders", attributes);
};
