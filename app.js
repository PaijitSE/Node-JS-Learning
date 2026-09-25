const express = require("express");
const debug = require("debug")("app");
const app = express();
const port = 3000; //จำลอง Server

//สำหรับจัดการ request เข้ามาผ่าน port แบบ / จะส่ง response อะไรไป
app.get("/", (req, res) => {
  res.send("Hello Software Engineering");
});

//กำหนดให้ app รอฟังการร้องขอที่ Port
app.listen(port, () => {
  debug("listening on port " + port);
});
