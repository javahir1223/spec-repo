const express = require("express");
const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
} = require("../controllers/calendarController");

const router = express.Router();

// 🔹 Создать событие
router.post("/", createEvent);

// 🔹 Получить все события
router.get("/", getAllEvents);

// 🔹 Получить одно событие по ID
router.get("/:id", getEventById);

// 🔹 Обновить событие
router.put("/:id", updateEvent);

// 🔹 Удалить событие
router.delete("/:id", deleteEvent);

module.exports = router;
