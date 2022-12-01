const mongoose = require('mongoose')

const goalsSchema = mongoose.Schema({
    text:{
        type: String,
        required: [true, 'Please add a text value']
    }
},{
    timeStamps: true
})

module.exports = mongoose.model('Goal',goalsSchema)