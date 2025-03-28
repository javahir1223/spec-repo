const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    avatar: { type: String, required: true },
    link: { type: String, required: true },
    desc: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
