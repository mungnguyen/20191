module.exports = function (sequelize, DataTypes) {
    const message = sequelize.define('message', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time: {
            type: DataTypes.DATE,
            allowNull: false
        },
        isDeleteBySender: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
        {
            timestamps: false
        });

    return message;
}