const Teacher = require("../models/Teacher");

// 📌 Создать нового учителя
exports.createTeacher = async (req, res) => {
  try {
    const { name, desc, profession } = req.body;
    const avatar = req.file ? req.file.path : null;

    if (!name || !desc || !profession) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newTeacher = new Teacher({ name, avatar, desc, profession });
    await newTeacher.save();

    res.status(201).json({ message: "Teacher created", teacher: newTeacher });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Получить всех учителей
exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Получить учителя по ID
exports.getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) return res.status(404).json({ error: "Teacher not found" });

    res.json(teacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Обновить учителя по ID
exports.updateTeacher = async (req, res) => {
  try {
    const { name, desc, profession } = req.body;
    const avatar = req.file ? req.file.path : req.body.avatar;

    const updatedTeacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      { name, avatar, desc, profession },
      { new: true }
    );

    if (!updatedTeacher) return res.status(404).json({ error: "Teacher not found" });

    res.json({ message: "Teacher updated", teacher: updatedTeacher });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Удалить учителя по ID
exports.deleteTeacher = async (req, res) => {
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!deletedTeacher) return res.status(404).json({ error: "Teacher not found" });

    res.json({ message: "Teacher deleted", teacher: deletedTeacher });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
