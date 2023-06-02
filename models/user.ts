import { Sequelize, DataTypes } from "sequelize";

export type DataTypesType = typeof DataTypes;

export default (sequelize: Sequelize, DataTypes: DataTypesType) => {
  const User = sequelize.define("user", {
    name: DataTypes.TEXT,
    favoriteColor: {
      type: DataTypes.TEXT,
      defaultValue: "green",
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER,
  });
  return User;
};
