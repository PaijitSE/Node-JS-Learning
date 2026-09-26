const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT; //จำลอง Server

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

//สำหรับจัดการ request เข้ามาผ่าน port แบบ / จะส่ง response อะไรไป
app.get("/", (req, res) => {
  res.render("index", {
    username: "paijit55+",
    customers: ["neng", "noi", "nub", "nam"],
  });
});

//กำหนดให้ app รอฟังการร้องขอที่ Port
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
