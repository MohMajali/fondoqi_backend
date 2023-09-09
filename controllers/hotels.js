const Hotel = require("../models/hotels");

exports.addHotel = async (req, res, next) => {
  try {
    const hotel = new Hotel(req.body);
    const result = await hotel.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.editHotel = async (req, res, next) => {
  try {
    const result = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      error: false,
      message: "Hotel deleted",
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json({
      error: false,
      hotel,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json({
      error: false,
      hotels,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
