const mongoose = require('mongoose')

const teacherSchema = mongoose.Schema({
    name: String,
    subjects: [String],
    level: String,
    qualification: String,
    experience: Number,
    salary: Number,
    email:{
        type: String,
        unique: true
    },
    password: String
}) 

module.exports = mongoose.model('Teacher',teacherSchema )