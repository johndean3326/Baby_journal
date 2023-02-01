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
            type: DataTypes.DATE,
            allowNull: true,
        },  
        parents_name:{
            type: DataTypes.STRING, 
            allowNull: true,
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
            allowNull: true
        },
        grandmother:{
            type: DataTypes.STRING,
            allowNull:true,
        },
<<<<<<< HEAD


    },

        {

=======
    },
        {
        
>>>>>>> 0f134c5a830728f2956b1b35eac9bc024caca3d0
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'parents',
        },
    
)



module.exports = Parents;