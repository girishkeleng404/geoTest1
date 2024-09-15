'use strict';

const sequelize = require("../config/databaseConfig");
const user = require("./user");

const country= sequelize.define('country',{
  id:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type:sequelize.Sequelize.INTEGER
  },
  name:{
    type:sequelize.Sequelize.STRING,
    allowNull:false,
    validate:{
      notNull:{
        msg:'Please enter a valid name'
      },
      notEmpty:{
        msg:"Name cannot be empty"
      },
    }
  },
  iso_code:{
    type:sequelize.Sequelize.STRING[2],
    allowNull:false,
    validate:{
      notNull:{
        msg:'Please enter a valid iso code'
      },
      notEmpty:{
        msg:"Iso code cannot be empty"
      },
    }
  },
  capital:{
    type:sequelize.Sequelize.STRING,
    allowNull:false,
    validate:{
      notNull:{
        msg:'Please enter a valid capital'
      },
      notEmpty:{
        msg:"Capital cannot be empty"
      },
    }
  },
  countryImage:{
    type:sequelize.Sequelize.ARRAY(sequelize.Sequelize.STRING),
    allowNull:false,
    validate:{
      notNull:{
        msg:'Please enter a valid image'
      },
      notEmpty:{
        msg:"Product image cannot be empty"
      },
    }
  },
  coastline_km:{
    type:sequelize.Sequelize.FLOAT,
    allowNull:false,
    validate:{
      notNull:{
        msg:'Please enter a valid coastline'
      },
      notEmpty:{
        msg:"Coastline cannot be empty"
      },
    }
  },
  climate:{
    type:sequelize.Sequelize.TEXT,
    allowNull:false,
    validate:{
      notNull:{
        msg:'Please enter a valid climate'
      },
      notEmpty:{
        msg:"Climate cannot be empty"
      },
    }
  },
  createdBy:{
    type:sequelize.Sequelize.INTEGER,
    allowNull:true,
    references:{
      model:'user',
      key:'id'
    }
  },
  createdAt:{
    allowNull:false,
    type:sequelize.Sequelize.DATE
  },
  updatedAt:{
    allowNull:false,
    type:sequelize.Sequelize.DATE
  },
  deletedAt:{
    type:sequelize.Sequelize.DATE
  }
},{
  paranoid:true,
  freezeTableName:true,
  tableName:'country',
})

country.belongsTo(user,{
  foreignKey:'createdBy',
  onDelete: 'CASCADE',
})


module.exports={country}