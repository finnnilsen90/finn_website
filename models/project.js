var Sequelize = require('sequelize');

// create a sequelize instance with our local postgres database information.
var sequelize = new Sequelize('postgres://tdfumtyhtntczc:1567ed49ae33258de2da6c07ce7495fa3d2865954af526c32c85ef01abbe4365@ec2-54-204-14-96.compute-1.amazonaws.com:5432/d7uobjeo0oi232', {  
    "dialect": "postgres",
    "ssl": true,
    "dialectOptions": {
        "ssl": {
            "require": true
        }
    }    
});

// setup project model and its fields.
var Project = sequelize.define('project', {
    user_id: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false
    },
    project_name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    company: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true
    },
    budget: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true
    }
}); 

// create all the defined tables in the specified database.
sequelize.sync()
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

// export User model for use in other files.
module.exports = Project;