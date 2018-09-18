import {
  DataTypeAbstract,
  DefineAttributeColumnOptions,
  Instance
} from "sequelize";

declare global {
  type SequelizeAttributes<T extends { [key: string]: any }> = {
    [P in keyof T]: string | DataTypeAbstract | DefineAttributeColumnOptions
  };

  type ModelInstance<T> = Instance<T> & T;
}
