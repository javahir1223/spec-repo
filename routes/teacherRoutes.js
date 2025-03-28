const express = require("express");
const {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher
} = require("../controllers/teacherController");

const upload = require("../middlewares/upload");

const router = express.Router();

router.post("/", upload.single("avatar"), createTeacher); // Создать учителя
router.get("/", getAllTeachers); // Получить всех учителей
router.get("/:id", getTeacherById); // Получить учителя по ID
router.put("/:id", upload.single("avatar"), updateTeacher); // Обновить учителя
router.delete("/:id", deleteTeacher); // Удалить учителя

module.exports = router;
