const router = require("express").Router();
const Order = require("../models/order");

//Create an order
router.post("/", async (request, response) => {
  const body = request.body;
  if (body.content === "") {
    return response.status(400).json({ error: "content missing" });
  }

  const newOrder = new Order(body);
  try {
    const savedOrder = await newOrder.save();
    response.status(200).json(savedOrder);
  } catch (err) {
    response.status(500).json(err);
  }
});

// Update an order
router.put("/:id", async (request, response) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      request.params.id,
      {
        $set: request.body,
      },
      { new: true }
    );
    response.status(200).json(updatedOrder);
  } catch (err) {
    response.status(500).json(err);
  }
});

// Delete an order
router.delete("/:id", async (request, response) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    response.status(200).json("Order has been deleted");
  } catch (err) {
    response.status(500).json(err);
  }
});

//get all orders

router.get("/", async (request, response) => {
  try {
    const orders = await Order.find();
    response.status(200).json(orders);
  } catch (err) {
    response.status(500).json(err);
  }
});
// Get User orders
router.get("/find/:userId", async (request, response) => {
  try {
    const orders = await Order.find({ userId: request.params.userId });
    response.status(200).json(orders);
  } catch (err) {
    response.status(500).json(err);
  }
});
module.exports = router;
