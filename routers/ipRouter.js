const express = require("express");
const router = express.Router();

/**
 * @swagger
 *
 * /ip:
 *   get:
 *     produces:
 *       - application/json
 *     description: 요청을 보낸 클라이언트의 IP 주소를 확인한다
 *     responses:
 *       201:
 *         description: IP주소를 획득하는데 성공
 */
router.get("/ip", (req, res) => {
  // ::1은 IPv6 클라이언트의 로컬 호스트 주소의 단축 버전이며 전체 IP는 기술적으로 0:0:0:0:0:0:0:1입니다. IPv4 클라이언트의 127.0.0.1 주소와 동일합니다.
  const ip = req.headers["x-forwarded-for"] || req.ip;
  console.log("req.ip", ip);
  res.status(200).send({ ip, message: "Check Your Ip" });
});

module.exports = router;
