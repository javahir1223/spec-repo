const Project = require("../models/Project");

// 📌 Создать новый проект
exports.createProject = async (req, res) => {
  try {
    const { title, link, desc } = req.body;
    const avatar = req.file ? req.file.path : null;

    if (!title || !link || !desc || !avatar) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newProject = new Project({ title, avatar, link, desc });
    await newProject.save();

    res.status(201).json({ message: "Project created", project: newProject });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Получить все проекты
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Получить проект по ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });

    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Обновить проект по ID
exports.updateProject = async (req, res) => {
  try {
    const { title, link, desc } = req.body;
    const avatar = req.file ? req.file.path : req.body.avatar;

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { title, avatar, link, desc },
      { new: true }
    );

    if (!updatedProject) return res.status(404).json({ error: "Project not found" });

    res.json({ message: "Project updated", project: updatedProject });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Удалить проект по ID
exports.deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) return res.status(404).json({ error: "Project not found" });

    res.json({ message: "Project deleted", project: deletedProject });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
