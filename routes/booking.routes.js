const express = require('express');
const { createBookingController, getAllBookingsController } = require('../controllers/booking.controller');

const router = express.Router();

router.post('/bookings', createBookingController);
router.get('/bookings', getAllBookingsController);

module.exports = router;
