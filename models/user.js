'use strict';

const { DataTypes } = require("sequelize");
const sequelize = require("../config/databaseConfig");
const { up } = require("../migrations/20240911163034-create-user");

 

const user = sequelize.define('user',{
  id:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type:DataTypes.INTEGER
  },
  userType:{
    type:DataTypes.ENUM('0','1'),
    allowNull:false,
    validate:{
      notNull:{
        msg:'Please enter a valid user type'
      },
      notEmpty:{
        msg:"UserType cannot be empty"
      },
    }
  },
  firstName:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{
        msg:'Please enter a valid first name'
      },
      notEmpty:{
        msg:"First name cannot be empty"
      },
    }
  },
  lastName:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{
        msg:"Please enter a valid last name"
      },
      notEmpty:{
        msg:"Last name cannot be empty"
      },
    }
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{
        msg:"Please enter a valid email"
      },
      notEmpty:{
        msg:"Email cannot be empty"
      },
      }
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{
        msg:"Please enter a valid password"
      },
      notEmpty:{
        msg:"Password cannot be empty"
      },
    }
  },
  // confirmPassword:{
  //   type:DataTypes.VIRTUAL,
    
  // }
  createdAt:{
    allowNull:false,
    type:DataTypes.DATE
  },
  updatedAt:{
    allowNull:false,
    type:DataTypes.DATE
  },
   deletedAt:{
    type:DataTypes.DATE
   }

},{
  paranoid:true,
  freezeTableName:true,
  modelName:'user',
})


module.exports = user;