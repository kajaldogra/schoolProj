const express = require('express');
const colors = require('colors');
const {errorHandler} = require('./backend/middleware/errorMiddleware');
const connectDB = require('./backend/config/db');
const goalRoutes = require('./backend/routes/goalRoutes');
const studentRoutes = require('./backend/routes/studentRoutes');
const teacherRoutes = require('./backend/routes/teacherRoutes')

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/goals',goalRoutes);

app.use('/api/students',studentRoutes);
app.use(errorHandler);

app.use('/api/teachers',teacherRoutes)

app.listen(8000);
console.log('Server is running on port 8000')