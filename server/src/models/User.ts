import { Sequelize, STRING, UUID, TEXT, INTEGER } from "sequelize";
import { GeneratedAttributes } from "./interfaces";

export interface Attributes extends GeneratedAttributes {
  fName: string;
  lName: string;
  username: string | null;
  email: string;
  password: string;
  image?: string;
  userType: number;
}

export type Instance = ModelInstance<Attributes>;

export default (sequelize: Sequelize) => {
  const attributes: SequelizeAttributes<Attributes> = {
    id: { type: UUID, primaryKey: true },
    fName: { type: STRING },
    lName: { type: STRING },
    username: { type: STRING, allowNull: true },
    email: { type: STRING },
    password: { type: STRING },
    image: { type: TEXT, allowNull: true },
    userType: { type: INTEGER }
  };
  return sequelize.define<Instance, Attributes>("user", attributes);
};
