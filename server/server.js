const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/products");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");

const cors = require("cors");
const { request } = require("express");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/order", orderRoute);
app.use("/api/cart", cartRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection was Successfull!"))
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
