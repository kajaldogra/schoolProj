const express = require('express')
const router = express.Router()
const {getStudents,newStudent,updateStudent,deleteStudent,getStudentById} = require('../controller/studentsController')

router.route('/').get(getStudents).post(newStudent);
router.route('/:id').put(updateStudent).delete(deleteStudent).get(getStudentById);


module.exports = router;