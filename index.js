const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.listen(port, () => {
    console.log(`Example app listening an port ${port}`);
});

app.get('/sample1', (req, res) => {
    res.send('Sample1!');
});