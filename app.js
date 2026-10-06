const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT; //จำลอง Server
const productsRouter = require("./src/router/productRouter");

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/products", productsRouter);

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
