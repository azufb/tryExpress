const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
    console.log(`Example app listening an port ${port}`);
});