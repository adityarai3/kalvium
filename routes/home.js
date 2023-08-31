const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Endpoints Available</title>
        </head>
        <body>
            <h1 style="color: #333; text-align: center;">Endpoints Available</h1>
            
            <h2 style="color: #3399CC;"><u>Calculate the Expression</u></h2>
            <p>Endpoint: /numbers/{expression}</p>
            <p>Sample: <a href="/numbers/7/plus/3/divide/2/minus/1" style="color: blue;">/numbers/7/plus/3/divide/2/minus/1</a></p>
            
            <h2 style="color: #3399CC;"><u>Check History</u></h2>
            <p>Endpoint: /history</p>
            <p>Sample: <a href="/history" style="color: blue;">/history</a></p>
            
            <h2 style="color: #3399CC;"><u>Go to Home</u></h2>
            <p>Endpoint: /</p>
            <p>Sample: <a href="/" style="color: blue;">Home</a></p>
        </body>
        </html>
    `;

    res.set('Content-Type', 'text/html');

    res.send(html);
});

module.exports = router;