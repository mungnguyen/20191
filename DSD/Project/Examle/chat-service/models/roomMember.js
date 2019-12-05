module.exports = function (sequelize, DataTypes) {
    const roomMember = sequelize.define('roomMember', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        groupName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false
        }
    },
        {
            timestamps: false
        });

    return roomMember;
}