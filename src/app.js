const express = require('express');

const app = express();

app.use('/user',
    (req, res, next) => {
        console.log('Handling user1 !!');
        //res.send("1st Response !!");
        next();
        //res.send("1st Response !!");
    },
    (req, res, next) => {
        console.log('Handling user2 !!');
        next()
        res.send("2st Response !!");
    },
    (req, res, next) => {
        console.log('Handling user3 !!');
        //res.send("3st Response !!");
        next();
    }
)


app.listen(4000, () => {
    console.log("server is running at port 4000");
});