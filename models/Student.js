const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    coins: { type: Number, required: true },
    avatar: { type: String },
    email: { type: String, required: true },
    birthdate: { type: Date, required: true },
    phoneNumber: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
