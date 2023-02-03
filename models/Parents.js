const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Parents extends Model{}

Parents.init(
    {
        id:{
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true,
        }, 
        date:{
            type: DataTypes. DATEONLY,
            allowNull: false,
        },  
        parents_name:{
            type: DataTypes.STRING, 
            allowNull: false,
        },
        father_age:{
            type: DataTypes.INTEGER, 
            allowNull: false,
        },
        mother_age:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        grandfather:{
            type: DataTypes.STRING, 
            allowNull: true,
        },
        grandmother:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        user_id:{
            type: DataTypes.INTEGER,
            references:{
                model: "parents",
                key: "id"
            }
        },


    },
        {
        
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'parents',
        },
    
)



module.exports = Parents;