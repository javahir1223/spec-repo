const express = require("express");
const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject
} = require("../controllers/projectController");

const upload = require("../middlewares/upload");

const router = express.Router();

router.post("/", upload.single("avatar"), createProject); // Создать проект
router.get("/", getAllProjects); // Получить все проекты
router.get("/:id", getProjectById); // Получить проект по ID
router.put("/:id", upload.single("avatar"), updateProject); // Обновить проект
router.delete("/:id", deleteProject); // Удалить проект

module.exports = router;
