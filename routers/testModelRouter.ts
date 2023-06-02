import express from "express";
import { addUser, findUserByName } from "../testModel";
const router = express.Router();

/**
 * @swagger
 *
 * /add:
 *   post:
 *     produces:
 *       - application/json
 *     description: 사용자 데이터를 db에 추가한다.
 *     responses:
 *       201:
 *         description: 데이터를 db에 추가하는데 성공
 */
router.post("/add", async (req, res, next) => {
  console.log(req.body);
  const { name, age, cash } = req.body;
  const createdUser = await addUser(name, age, cash);
  res.status(201).send(createdUser);
});

/**
 * @swagger
 *
 * /find/:name:
 *   get:
 *     produces:
 *       - application/json
 *     description: 파라미터 name을 통해 이와 같은 이름의 사용자 데이터를 조회한다.
 *     responses:
 *       201:
 *         description: 데이터를 조회하는데 성공
 */
router.get("/find/:name", async (req, res, next) => {
  console.log(req.params.name);
  const findUser = await findUserByName(req.params.name);
  res.status(200).send(findUser);
});

export default router;
