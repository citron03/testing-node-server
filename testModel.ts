import db from "./models";

db.sequelize
  .sync()
  .then(() => {
    console.log("db connected !!");
  })
  .catch(console.error);

const { user } = require("./models");

const addUser = async (name: string, age: string, cash: string) => {
  const createdUser = await user.create({
    name,
    age,
    cash,
  });
  console.log("createdUser", createdUser);
  return createdUser;
};

const findUserByName = async (name: string) => {
  const findUser = await user.findOne({
    where: { name },
  });
  console.log("findUser", findUser);
  return findUser;
};

export { addUser, findUserByName };
