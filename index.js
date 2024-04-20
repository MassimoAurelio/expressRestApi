const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://nynnwork:8QL2up5l8jJUpro5@restapi.hwpjh4s.mongodb.net/Node-API?retryWrites=true&w=majority&appName=restApi"
  )
  .then(() => {
    console.log("CONNECT DB");
    app.listen(3000, () => {
      console.log("HELLO WORLD");
    });
  })
  .catch(() => {
    console.log("ERROR DB");
  });
