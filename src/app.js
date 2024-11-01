const express = require('express');

const app = express();
const { userAuth, loggedUser } = require("./middlewares/auth")

app.use("/user", userAuth);

app.get("/user", (req, res) => {
    res.send("User Authenticated");
})

app.get("/user/profile", (req, res) => {
    res.send("Get The User Pofile Here!");
})

app.get("/user/contact", (req, res) => {
    res.send("Find The User Contact List !!");
})

app.get("/product", (req, res) => {
    console.log('/product route');
    res.send("Find Godarage Almond Oil!!");
})

app.get("/product/order", loggedUser, (req, res) => {
    console.log("/product/order route");
    res.send("Product is successfully Placed!!");
})

app.listen(4000, () => {
    console.log("server is running at port 4000");
});