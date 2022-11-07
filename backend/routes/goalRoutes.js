const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Get Goals'
    })
});

router.post('/', (req, res) => {
    res.json({
        message: 'Post Goals'
    })
});

router.put('/:id', (req, res) => {
    res.json({
        message: `Update goal ${req.params.id}`
    })
});

router.delete('/:id', (req, res) => {
    res.json({
        message: `Delete goal ${req.params.id}`
    })
});

module.exports = router;