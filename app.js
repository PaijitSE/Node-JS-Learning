const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

// กำหนดเส้นทางให้กับเพจที่ไป
const memberRouter = express.Router();
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT; //จำลอง Server

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

memberRouter.route("/").get((req, res) => {
  res.send("Hello, I'm Members");
});

productRouter.route("/").get((req, res) => {
  res.render("products", {
    products: [
      {
        productTitle: "น้ำยาล้างจาน",
        productDescription: "น้ำยาสูง 1 ดีเลิศ",
        productPrice: 45,
      },
      {
        productTitle: "น้ำยาล้างจาน",
        productDescription: "น้ำยาสูง 2 ดีเลิศ",
        productPrice: 45,
      },
      {
        productTitle: "น้ำยาล้างจาน",
        productDescription: "น้ำยาสูง 3 ดีเลิศ",
        productPrice: 45,
      },
      {
        productTitle: "น้ำยาล้างจาน",
        productDescription: "น้ำยาสูง 4 ดีเลิศ",
        productPrice: 45,
      },
    ],
  });
});

app.use("/members", memberRouter);

app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.render("index", {
    username: "softeng@g.lpru.ac.th",
    customers: ["neng", "noi", "nub", "nam"],
  });
});

//กำหนดให้ app รอฟังการร้องขอที่ Port
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
