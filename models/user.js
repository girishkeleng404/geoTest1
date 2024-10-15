'use strict';

const { DataTypes } = require("sequelize");
// const sequelize = require("../config/databaseConfig"); 
const bcrypt = require('bcrypt');
const AppError = require("../utils/appError");

 


module.exports = (sequelize, DataTypes)=> {


  const user = sequelize.define('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userType: {
      type: DataTypes.ENUM('0', '1', '2'),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a valid user type'
        },
        notEmpty: {
          msg: "UserType cannot be empty"
        },
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a valid first name'
        },
        notEmpty: {
          msg: "First name cannot be empty"
        },
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter a valid last name"
        },
        notEmpty: {
          msg: "Last name cannot be empty"
        },
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter a valid email"
        },
        notEmpty: {
          msg: "Email cannot be empty"
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter a valid password"
        },
        notEmpty: {
          msg: "Password cannot be empty"
        },
      }
    },
    confirmPassword: {
      type: DataTypes.VIRTUAL,
      set(value) {
        if (this.password.length < 7) {
          throw new AppError("Password must be at least 7 characters long", 400);
        }
        if (value === this.password) {
          const hashPassword = bcrypt.hashSync(value, 10);
          this.setDataValue('password', hashPassword);
        } else {
          throw new AppError("Password does not match", 400);
        }
      }

    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    deletedAt: {
      type: DataTypes.DATE
    }

  }, {
    paranoid: true,
    freezeTableName: true,
    modelName: 'user',
  });


   user.associate = (models)=>{
    user.hasMany(models.country,{foreignKey:'createdBy',   onDelete: 'CASCADE', onUpdate: 'CASCADE' })
   }
    
   return user;
  
};




 