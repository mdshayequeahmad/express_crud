const express = require("express");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});