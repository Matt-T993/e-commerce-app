const router = require("express").Router();
const Product = require("../models/product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//Get all products
router.get("/", (request, response) => {
  Product.find({}).then((result) => {
    response.json(result);
  });
});

//Get a product

router.get("/:id", (request, response) => {
  Product.findById(request.params.id)
    .then((result) => {
      response.json(result);
    })
    .catch((err) => {
      response.status(404).json({ error: "Not found" });
    });
});

//Create Product

router.post("/", verifyTokenAndAdmin, async (request, response) => {
  const body = request.body;
  if (body.content === "") {
    return response.status(400).json({ error: "content missing" });
  }
  const product = new Product(body);
  const savedPost = await product.save();
  response.json(savedPost);
});

//Update product
router.put("/:id", verifyTokenAndAdmin, async (request, response) => {
  const body = request.body;

  const product = {
    brand: body.brand,
    desc: body.name,
    img: body.img,
    catogories: body.catogories,
    size: body.size,
    color: body.colour,
    price: body.price,
  };

  Product.findByIdAndUpdate(request.params.id, product, { new: true })
    .then((updatedProduct) => {
      response.json(updatedProduct);
    })
    .catch((error) => next(error));
});
// Delete product
router.delete("/:id", verifyTokenAndAdmin, async (request, response) => {
  Product.findByIdAndDelete(request.params.id)
    .then((result) => {
      response.status(200).json("Product has been deleted");
    })
    .catch((error) => response.status(500).json(err));
});

module.exports = router;
