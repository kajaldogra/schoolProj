const express = require('express')
const teacherRouter = express.Router()
const {getTeachers,newTeacher,updateTeacher,deleteTeacher,getTeacherById} = require('../controller/teachersController')

teacherRouter.get('/', getTeachers);
teacherRouter.post('/',newTeacher);
teacherRouter.put('/:id',updateTeacher);
teacherRouter.delete('/:id',deleteTeacher);
teacherRouter.get('/:id',getTeacherById)

module.exports = teacherRouter