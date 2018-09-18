import { Sequelize, STRING, UUID, FLOAT } from "sequelize";
import { GeneratedAttributes } from "./interfaces";

export interface Attributes extends GeneratedAttributes {
  food_name: string;
  food_details?: string;
  food_price?: number;
  food_category_name: string;
}

export type Instance = ModelInstance<Attributes>;

export default (sequelize: Sequelize) => {
  const attributes: SequelizeAttributes<Attributes> = {
    id: { type: UUID, primaryKey: true },
    food_name: { type: STRING },
    food_details: { type: STRING, allowNull: true },
    food_price: { type: FLOAT, allowNull: true },
    food_category_name: { type: STRING }
  };
  return sequelize.define<Instance, Attributes>("food_items", attributes);
};
