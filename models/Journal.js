const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Journal extends Model{}

Journal.init (
    {
        id:{
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true,
        },
        entry:{
            type: DataTypes.TEXT, 
            allowNull: false, 
        },
        date:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        baby_id:{
            type: DataTypes.INTEGER,
            references: {
                model: "baby",
                key: "id",
            }
        },



    },
        {
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'journal',
        sequelize,
        }



)
module.exports = Journal;