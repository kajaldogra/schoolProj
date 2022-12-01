const asyncHandler = require('express-async-handler')
const Student = require('../models/studentModel')

// get all students
const getStudents = asyncHandler(async(req,res)=>{
    const students = await Student.find() 
    res.json(students)
})

//  create
const newStudent = asyncHandler(async(req, res)=>{
    console.log(req.body)
    if(!req.body){
        res.status(400)
        throw new Error('Please enter a data')//wrong
    }
    const student = await Student.create(req.body)
    student.save()
    console.log(student)
        res.json(student)
    })


    // update
  const updateStudent = asyncHandler(async(req,res)=>{
    const student = await Student.findById(req.params.id)

    if(!student){
        res.status(400)
        throw new Error('Student not found')
    }
    const updatedStudent =await Student.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json(updatedStudent)
  }) 
  
  
//   delete
const deleteStudent = asyncHandler(async(req,res)=>{
    const deletedStudent = await Student.findByIdAndDelete(req.params.id)

    if(!deletedStudent){
        res.status(400)
        throw new Error('Student not found')
    }
    await deletedStudent.remove()
    res.json({id: req.params.id})
})

const getStudentById = asyncHandler(async(req,res)=>{

    const student = await Student.findById(req.params.id)
    if(!student){
        res.status(400)
        throw new Error('student not found')
    }else{
        res.json(student)
    }
})

module.exports = {
    getStudents,
    newStudent,
    updateStudent,
    deleteStudent,
    getStudentById
}