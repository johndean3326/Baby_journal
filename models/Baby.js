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
            type: DataTypes.DATEONLY, 
            allowNull: false, 
        },
        first_word:{
            type: DataTypes.STRING, 
            allowNull: true, 
        }, 
        eye_color:{
            type: DataTypes.STRING, 
            allowNull: false, 
        },
        parent_id:{
            type: DataTypes.INTEGER,
            references: {
                model: "parents",
                key: "id",
            }
        }
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