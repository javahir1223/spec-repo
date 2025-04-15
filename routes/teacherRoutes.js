const express = require("express");
const {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
  fileUpload
} = require("../controllers/teacherController");
const { verifyAdmin } = require('../middlewares/auth.middleware');

const upload = require("../middlewares/upload");

const router = express.Router();

router.post("/", verifyAdmin, upload.single("avatar"), createTeacher); // Создать учителя
router.get("/", getAllTeachers); // Получить всех учителей
router.post("/upload",upload.single("avatar"), fileUpload);
router.get("/:id", getTeacherById); // Получить учителя по ID
router.put("/:id",verifyAdmin,  upload.single("avatar"), updateTeacher); // Обновить учителя
router.delete("/:id",verifyAdmin, deleteTeacher); // Удалить учителя

module.exports = router;
