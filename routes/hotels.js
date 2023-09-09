const express = require("express");
const hotelsController = require("../controllers/hotels");
const hotelsRouter = express.Router();

hotelsRouter.post("/", hotelsController.addHotel);
hotelsRouter.put("/:id", hotelsController.editHotel);
hotelsRouter.delete("/:id", hotelsController.deleteHotel);

hotelsRouter.get("/:id", hotelsController.getHotel);
hotelsRouter.get("/", hotelsController.getHotels);

module.exports = hotelsRouter;
