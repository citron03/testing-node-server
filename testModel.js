const db = require("./models");

db.sequelize
  .sync()
  .then(() => {
    console.log("db connected !!");
  })
  .catch(console.error);

const { user } = require("./models");

const addUser = async (name, age, cash) => {
  const createdUser = await user.create({
    name,
    age,
    cash,
  });
  console.log("createdUser", createdUser);
  return createdUser;
};

const findUserByName = async (name) => {
  const findUser = await user.findOne({
    where: { name },
  });
  console.log("findUser", findUser);
  return findUser;
};

module.exports = { addUser, findUserByName };
