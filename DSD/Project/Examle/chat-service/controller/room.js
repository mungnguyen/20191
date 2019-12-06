const db = require("../models");
const Sequelize = require('sequelize');

exports.listAllRoom = async function (req, res) {
    const where = {}
    try {
        const roomList = await db.room.findAll({
            include: [
                {
                    model: db.roomMember,
                    where: {
                        userId: req.params.userId
                    }
                }
            ]
        })

        res.json(roomList)
    } catch (err) {
        console.log("listAllRoom", err)
        res.status(400).json({ error: err })
    }
}