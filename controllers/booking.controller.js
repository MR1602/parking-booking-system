const asyncHandler = require("express-async-handler");
const Booking = require('../models/booking');

const createBookingController = async (req, res) => {
  const { area, spot, start, end } = req.body;

  try {
    const newBooking = new Booking({
      area,
      spot,
      start,
      end,
    });

    await newBooking.save();

    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllBookingsController = async (req, res) => {
  const { area } = req.query;
  
  try {
    const booking = area ? await Booking.find({ area }) : await Booking.find();

    res.status(200).json({ booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createBookingController,
  getAllBookingsController,
};

