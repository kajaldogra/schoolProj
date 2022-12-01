const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: String,
    age : Number,
    class: String,
    rollno: Number,
    fatherName: String,
    address: {
        city: String,
        street: String,
        houseNo: Number,
    },
    isLocal: Boolean,
    subjects: [String]
})

module.exports = mongoose.model('Student',studentSchema)
