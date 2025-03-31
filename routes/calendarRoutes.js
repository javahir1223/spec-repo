const express = require("express");
const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
} = require("../controllers/calendarController");
const { verifyAdmin } = require('../middlewares/auth.middleware');

const router = express.Router();

// 🔹 Создать событие
router.post("/",verifyAdmin, createEvent);

// 🔹 Получить все события
router.get("/", getAllEvents);

// 🔹 Получить одно событие по ID
router.get("/:id", getEventById);

// 🔹 Обновить событие
router.put("/:id",verifyAdmin, updateEvent);

// 🔹 Удалить событие
router.delete("/:id",verifyAdmin, deleteEvent);

module.exports = router;
