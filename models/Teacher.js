const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String },
    desc: { type: String, required: true },
    profession: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", TeacherSchema);
