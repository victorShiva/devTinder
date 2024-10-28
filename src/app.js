const express = require('express');

const app = express();

app.use("/user", (req, res) => {
    res.send("HA HAHAAHA AHAHAHAHA");
})

//this route will match only handle GET call to user 
app.get("/user", (req, res) => {
    res.send({
        firstName: "Raghav",
        age: 22
    })
});

//post
app.post("/user", (req, res) => {
    //saving data to DB
    res.send("Data successfully saved to the database!")
});

//patch
app.patch("/user", (req, res) => {
    res.send(" Updated Successfully! ");
})

//DELETE
app.delete("/user", (req, res) => {
    res.send("Delete Successfully!");
})

//this route match all the HTTP method API call to /home 
app.use('/home', (req, res) => {
    res.send("Welcme to user2 home page!");
});

app.listen(4000, () => {
    console.log("server is running at port 4000");
});