const Calendar = require("../models/Calendar");

// 🔹 Создать событие
exports.createEvent = async (req, res) => {
  try {
    const { title, desc } = req.body;
    if (!title || !desc) {
      return res.status(400).json({ error: "Все поля обязательны" });
    }
    const newEvent = new Calendar({ title, desc });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Получить все события
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Calendar.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Получить одно событие по ID
exports.getEventById = async (req, res) => {
  try {
    const event = await Calendar.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: "Событие не найдено" });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Обновить событие
exports.updateEvent = async (req, res) => {
  try {
    const { title, desc } = req.body;
    const updatedEvent = await Calendar.findByIdAndUpdate(
      req.params.id,
      { title, desc },
      { new: true }
    );
    if (!updatedEvent) {
      return res.status(404).json({ error: "Событие не найдено" });
    }
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Удалить событие
exports.deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Calendar.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ error: "Событие не найдено" });
    }
    res.json({ message: "Событие удалено" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
