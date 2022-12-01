const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

//  get request------read
const getGoals = asyncHandler(async(req, res)=>{
    const Goals = await Goal.find()
    res.json(Goals)
})
//  post request------create
const setGoal = asyncHandler(async(req, res)=>{
if(!req.body.text){
    res.status(400)
    throw new Error('Please enter a text field')
}
const goal = await Goal.create({
    text: req.body.text
})
    res.json(goal)
})
// put request----update
const updateGoal = asyncHandler(async(req, res)=>{
    const goal = await Goal.findById(req.params.id)

if(!goal){
    res.status(400)
    throw new Error('Goal not found')
}
const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{new:true})
    res.status(200).json(updatedGoal)
})
//  delete request------delete
const deleteGoal = asyncHandler(async(req, res)=>{
    const deleteGoal = await Goal.findById(req.params.id)

    if(!deleteGoal){
        res.status(400)
        throw new Error('Goal not found')
    }
    await deleteGoal.remove()
    res.json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}