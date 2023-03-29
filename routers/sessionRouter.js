const express = require("express");
const router = express.Router();

/**
 * @swagger
 *
 * /session:
 *   get:
 *     produces:
 *       - application/json
 *     description: 서버 세션 기능을 테스트한다.
 *     responses:
 *       200:
 *         description: 세션이 이미 존재하는 사용자
 *       201:
 *         description: 서버에 처음 접근하는 사용자로 세션을 발급한다.
 */
router.get("/session", function (req, res, next) {
  if (req.session.test) {
    console.log("req.session", req.session);
    req.session.test++;
    res.status(200).json({ message: "Session Ok" });
  } else {
    req.session.test = 1;
    console.log("No Sessions");
    res.status(201).send({ message: "RN_testing_session" });
  }
});

module.exports = router;
