const aysncHandler = require('express-async-handler');

const Goal = require('../models/goalsModel');
const User = require('../models/userModel');

const getGoals = aysncHandler(async (req, res) => {
    const goals = await Goal.find({
        user: req.user.id
    })
    res.json({
       goals
    })
});

const addGoal = aysncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text feild');
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.json({
        goal
    })
});

const updateGoal = aysncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user //

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user the goal user //

    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.json(updatedGoal)
});

const deleteGoal = aysncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw Error('Goal not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user //

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user the goal user //

    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await Goal.remove(goal)

    res.json({ id: req.params })
});

module.exports = {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal
}