const userAuth = (req, res, next) => {
    // Logic of checking if User is authorized
    console.log("User Auth is getting checked!");
    const token = "xyz@123";
    const isUserAuthorized = token === "xyz@123";
    if (!isUserAuthorized) {
        res.status(401).send("Unauthorized User!");
    } else {
        next();
    }
}
const loggedUser = (req, res, next) => {
    // Logic of checking if User is authorized
    console.log("User is loggedIn checked!");
    const token = "xyz@123";
    const isUserAuthorized = token === "xyz@123";
    if (!isUserAuthorized) {
        res.status(401).send("Unauthorized User!");
    } else {
        next();
    }
}

module.exports = {
    userAuth,
    loggedUser
}