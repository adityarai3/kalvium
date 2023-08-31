const express = require('express');
const router = express.Router();
const Query = require('../model/Query');

router.get('/*', async (req, res) => {
    const url = req.params[0];
    const section = url.split('/')
    let query = ""

    for(let i = 0; i < section.length; i++) {
        if(section[i] === 'plus') {
            query += '+'
        }
        else if(section[i] === 'minus') {
            query += '-'
        }
        else if(section[i] === 'into') {
            query += '*'
        }
        else if(section[i] === 'divide') {
            query += '/'
        }
        else{
            query += section[i]
        }
    }

    let result=0;
    try
    {
        result = eval(query)
    }
    catch(error)
    {
        console.error(error)
    }
    const calculations = new Query({
        question:query,
        answer:result
    })
    await calculations.save();
    res.json({ question: query, answer: result });
})


module.exports = router;