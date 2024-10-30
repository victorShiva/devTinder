const express = require('express');

const app = express();

//app.get('/ab?c', (req, res) => {
//    res.send({
//        userName: "Raghava",
//        password: 845678
//    })
//});

//app.get(/^\/a$/, (req, res) => {
//    res.send({
//        userName: "Aman",
//        password: "jhgt789"
//    })
//});

app.get(/^\/user\/:id?\/[0-9]+$/, (req, res) => {
    console.log(req.params);
    res.send({
        userName: "danish",
        password: "dan@23"
    })
});




app.listen(4000, () => {
    console.log("server is running at port 4000");
});