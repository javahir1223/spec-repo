const Student = require("../models/Student");

// 📌 Создать нового студента
exports.createStudent = async (req, res) => {
  try {
    const { name, age, coins, email, birthdate, phoneNumber,avatar } = req.body;

    if (!name || !age || !coins || !email || !birthdate || !phoneNumber || !avatar) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newStudent = new Student({ name, age, coins, avatar, email, birthdate, phoneNumber });
    await newStudent.save();

    res.status(201).json({ message: "Student created", student: newStudent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Получить всех студентов
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Получить одного студента по ID
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ error: "Student not found" });

    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Обновить студента по ID
exports.updateStudent = async (req, res) => {
  try {
    const { name, age, coins, email, birthdate, phoneNumber, avatar } = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      { name, age, coins, avatar, email, birthdate, phoneNumber },
      { new: true }
    );

    if (!updatedStudent) return res.status(404).json({ error: "Student not found" });

    res.json({ message: "Student updated", student: updatedStudent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Удалить студента по ID
exports.deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) return res.status(404).json({ error: "Student not found" });

    res.json({ message: "Student deleted", student: deletedStudent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.fileUpload = async (req, res) => {
  try {
    const filePath = req.file.filename;
    if (!filePath) {
      return res.status(400).json({ message: "Fayl yuklanmadi!" });
    }
    res.status(201).json({ url: filePath });
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik bor" });
  }
};
