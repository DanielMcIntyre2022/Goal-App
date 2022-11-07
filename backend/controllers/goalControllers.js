
const getGoals = (req, res) => {
    res.json({
        message: 'Get Goals'
    })
};

const addGoal = (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text feild');
    }
    res.json({
        message: 'Add Goals'
    })
};

const updateGoal = (req, res) => {
    res.json({
        message: `Update goal ${req.params.id}`
    })
};

const deleteGoal = (req, res) => {
    res.json({
        message: `Delete goal ${req.params.id}`
    })
}

module.exports = {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal
}