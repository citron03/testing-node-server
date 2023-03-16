const db = require("./models");

db.sequelize
  .sync()
  .then(() => {
    console.log("db connected !!");
  })
  .catch(console.error);

const { user } = require("./models");

const initTest = async () => {
  const createdUser = await user.create({
    name: "park",
    age: 35,
    cash: 30000,
  });
  console.log("createdUser", createdUser);
  const findUser = await user.findOne({
    where: { name: "park" },
  });
  console.log("findUser", findUser);
};

initTest();
