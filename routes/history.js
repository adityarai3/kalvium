const express = require("express");
const router = express.Router();
const Query = require('../model/Query')

router.get('/', async (req, res) => {
    try {
        const history = await Query.find()
            .sort({ _id: -1 })
            .limit(20)
            .select('question answer'); 
        res.json(history);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching history' });
    }
});

module.exports = router;