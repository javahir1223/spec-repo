const express = require("express");
const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject
} = require("../controllers/projectController");
const { verifyAdmin } = require('../middlewares/auth.middleware');

const upload = require("../middlewares/upload");

const router = express.Router();

router.post("/",verifyAdmin, upload.single("avatar"), createProject); // Создать проект
router.get("/", getAllProjects); // Получить все проекты
router.get("/:id", getProjectById); // Получить проект по ID
router.put("/:id",verifyAdmin, upload.single("avatar"), updateProject); // Обновить проект
router.delete("/:id",verifyAdmin, deleteProject); // Удалить проект

module.exports = router;
