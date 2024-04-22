const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/products", productRoutes);

mongoose
  .connect(
    "mongodb+srv://nynnwork:8QL2up5l8jJUpro5@restapi.hwpjh4s.mongodb.net/Node-API?retryWrites=true&w=majority&appName=restApi"
  )
  .then(() => {
    console.log("Connected to DB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Error connecting to DB:", error.message);
  });