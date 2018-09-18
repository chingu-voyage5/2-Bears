import { Sequelize, Model, STRING, UUID, TEXT, INTEGER } from "sequelize";
import { GeneratedAttributes } from "./interfaces";

export interface UserAttributes extends GeneratedAttributes {
  fName: string;
  lName: string;
  username: string | null;
  email: string;
  password: string;
  image?: string;
  userType: number;
}

export type UserInstance = ModelInstance<UserAttributes>;

export default (sequelize: Sequelize) => {
  const attributes: SequelizeAttributes<UserAttributes> = {
    id: { type: UUID, primaryKey: true },
    fName: { type: STRING },
    lName: { type: STRING },
    username: { type: STRING, allowNull: true },
    email: { type: STRING },
    password: { type: STRING },
    image: { type: TEXT, allowNull: true },
    userType: { type: INTEGER }
  };
  return sequelize.define<UserInstance, UserAttributes>("user", attributes);
};
