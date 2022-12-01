const express = require('express');
const router = express.Router();
const {getGoals,setGoal,updateGoal,deleteGoal} = require('../controller/goalsController')

// if having same routes then
router.route('/').get(getGoals).post(setGoal);
router.route('/:id').delete(deleteGoal).put(updateGoal);


module.exports = router;