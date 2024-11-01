const express = require('express');

const app = express();
const { userAuth, loggedUser } = require("./middlewares/auth");


app.get("/getUserData", (req, res) => {
    try {
        // Logic of DB call and get user getuserData
        throw new Error("qwefgh");
        res.send("User Data send!!")
    } catch (err) {
        res.status(500).send('Some Error occur Please Contact Help support team!!');
    }


})

app.use('/', (err, req, res, next) => {
    res.send("Something went wrong!!")
})

app.listen(4000, () => {
    console.log("server is running at port 4000");
});