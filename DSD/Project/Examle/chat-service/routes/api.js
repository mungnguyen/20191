
module.exports = function (app) {
    const { login } = require("../controller/login")
    const { listAllRoom } = require("../controller/room")

    app.post("/login", login)

    //room api
    app.get("/room/:userId", listAllRoom)
}