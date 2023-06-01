const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookingSchema = new Schema({
  area: {
    type: String,
    required: true,
    trim: true,
  },
  spot: {
    type: String,
    required: true,
    trim: true,
  },
  start: {
    type: String,
    required: true,
    trim: true,
  },
  end: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
  },
  duration: {
    type: Number,
    default: function () {
        const startTime = parseInt(this.start.replace(':', ''), 10);
        const endTime = parseInt(this.end.replace(':', ''), 10);
        return endTime - startTime;
    },
  },
});

bookingSchema.pre('save', function (next) {
  if (!this.date) {
    this.date = new Date();
  }
  next();
});

module.exports = mongoose.model('bookings', bookingSchema);
