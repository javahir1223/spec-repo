const mongoose = require("mongoose");

const CalendarSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Calendar", CalendarSchema);
