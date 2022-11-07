const aysncHandler = require('express-async-handler');

const Goal = require('../models/goalsModel');

const getGoals = aysncHandler(async (req, res) => {
    const goals = await Goal.find({
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
        text: req.body.text
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

    await Goal.remove(goal)

    res.json({ id: req.params })
});

module.exports = {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal
}