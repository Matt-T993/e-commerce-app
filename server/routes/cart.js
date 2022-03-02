const router = require("express").Router();
const Cart = require("../models/cart");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

// Get all cart
router.get("/", verifyTokenAndAdmin, async (request, response) => {
  try {
    const carts = await Cart.find();
    response.status(200).json(carts);
  } catch (err) {
    response.status(500).json(err);
  }
});

//Create a cart item

router.post("/", verifyToken, async (request, response) => {
  const newCart = new Cart(request.body);

  try {
    const savedCart = await newCart.save();
    response.status(200).json(savedCart);
  } catch (err) {
    response.status(500).json(err);
  }
});
// Update cart item
router.put("/:id", verifyTokenAndAuthorization, async (request, response) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: request.body,
      },
      { new: true }
    );
    response.status(200).json(updatedCart);
  } catch (err) {
    response.status(500).status(err);
  }
});

//Delete cart item

router.delete(
  "/:id",
  verifyTokenAndAuthorization,
  async (request, response) => {
    try {
      const cart = await Cart.findByIdAndDelete(request.params.id);
      response.status(200).json("Cart has been deleted...");
    } catch (err) {
      response.status(500).json(err);
    }
  }
);

// find  user cart item
router.get(
  "/find/:userId",
  verifyTokenAndAuthorization,
  async (request, response) => {
    try {
      const cart = await Cart.findOne({ userId: request.params.userId });
      response.status(200).json(cart);
    } catch (err) {
      response.status(500).json(err);
    }
  }
);

module.exports = router;
