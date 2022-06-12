require("dotenv").config();
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3001;

const config = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password
});

config.connect();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    /*res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET");
    res.setHeader("Access-Control-Max-Age", "3600");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, x-access-token, x-user-id,Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");*/
    next();
});

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'こちら、バックエンド側からのメッセージです。' });
});

app.listen(port, () => {
    console.log(`Example app listening an port ${port}`);
});