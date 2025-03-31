require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerDocs = require('./swagger.js');

const teacherRoutes = require('./routes/teacherRoutes.js');
const projectRoutes = require('./routes/projectRoutes.js');
const studentRoutes = require('./routes/studentRoutes.js');
const calendarRoutes = require("./routes/calendarRoutes");
const authRoutes = require('./routes/authRoutes.js');

const app = express();
app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

app.use(express.json());
app.use("/uploads", express.static("uploads")); // Доступ к загруженным файлам

app.use("/teachers", teacherRoutes);
app.use("/projects", projectRoutes);
app.use("/students", studentRoutes);
app.use("/calendar", calendarRoutes);
app.use('/auth', authRoutes);

swaggerDocs(app);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
