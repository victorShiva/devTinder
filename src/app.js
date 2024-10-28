const express = require('express');

const app = express();

app.use('/home', (req, res) => {
    res.send("Welcme to user dashboard!");
})

app.use('/share', (req, res) => {
    res.send("Welcome to share holder!");
})

app.listen(4000, () => {
    console.log("server is running at port 4000");
})