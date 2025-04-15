const express = require("express");
const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  fileUpload
} = require("../controllers/studentController");
const { verifyAdmin } = require('../middlewares/auth.middleware');

const upload = require("../middlewares/upload");

const router = express.Router();

router.post("/", createStudent);
router.post("/upload",upload.single("avatar"), fileUpload);
router.get("/", getAllStudents); // Получить всех студентов
router.get("/:id", getStudentById); 
router.put("/:id",verifyAdmin, updateStudent);
router.delete("/:id",verifyAdmin, deleteStudent); // Удалить студента

module.exports = router;
