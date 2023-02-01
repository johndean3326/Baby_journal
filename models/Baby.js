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
        baby_name:{
            type: DataTypes.STRING, 
            allowNull: false, 
        },  
        milestone:{
            type: DataTypes.STRING, 
            allowNull: true, 
        }, 
        birthday:{
            type: DataTypes.STRING, 
            allowNull: true, 
        },
        first_word:{
            type: DataTypes.STRING, 
            allowNull: true, 
        }, 
        eye_color:{
            type: DataTypes.STRING, 
            allowNull: true, 
        },
        {

        
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'baby',
        sequelize,
        }

)



module.exports = Baby;