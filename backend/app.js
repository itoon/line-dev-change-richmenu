require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const line = require('@line/bot-sdk');
const cors = require('cors');

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
};

const client = new line.Client(config);
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get('/api/v1/unlink-richmenu', (req, res) => {    
    client.unlinkRichMenuFromUser("U74f5c0564a76037c2a6be68779119176");
    res.json({
        data: req.body
    });
});

app.post('/api/v1/change-richmenu', (req, res) => {
    // save data in db
    const { firstname, lastname, email, userId } = req.body;
    client.linkRichMenuToUser(userId, "richmenu-30eccf0fc2584916361b853a0187f71a");
    res.json({
        data: req.body
    });
})

app.listen(3000, () => {
    console.log("Ready on port 3000");
});