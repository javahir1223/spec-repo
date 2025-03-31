const express = require("express");
const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
} = require("../controllers/studentController");
const { verifyAdmin } = require('../middlewares/auth.middleware');

const upload = require("../middlewares/upload");

const router = express.Router();

router.post("/",verifyAdmin, upload.single("avatar"), createStudent); // Создать студента
router.get("/", getAllStudents); // Получить всех студентов
router.get("/:id", getStudentById); // Получить студента по ID
router.put("/:id",verifyAdmin, upload.single("avatar"), updateStudent); // Обновить студента
router.delete("/:id",verifyAdmin, deleteStudent); // Удалить студента

module.exports = router;
