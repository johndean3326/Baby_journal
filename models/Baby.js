const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Baby extends Model{}

Baby.init(
    {
        id:{
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true,
        }, 
        date:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
        title:{
            type: DataTypes.STRING, 
            allowNull: false, 
            primaryKey: true, 
        }, 
        milestone:{
            type: DataTypes.STRING, 
            allowNull: true, 
        }, 
        sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'baby',
    }
)



module.exports = Baby;