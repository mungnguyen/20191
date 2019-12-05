
module.exports = function (app) {
    const { login } = require("../controller/login")
    app.post("/login", login)
}