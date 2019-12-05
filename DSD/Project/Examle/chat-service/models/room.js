module.exports = function (sequelize, DataTypes) {
    const room = sequelize.define('room', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isTwomember: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    },
        {
            timestamps: false
        });

    return room;
}