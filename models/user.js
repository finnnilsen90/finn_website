var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');

// const { Client } = require('pg');

// var database_url = 'postgres://yyssbjsxbooeoi:6001391d88054adc9ae074c1d3cd68680baba4712ae7111911e499ee965795fe@ec2-50-19-113-219.compute-1.amazonaws.com:5432/dann15kue1cruh?ssl=true'

// const client = new Client({
//   connectionString: process.env.database_url,
//   ssl: true,
// });


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

// setup User model and its fields.
var User = sequelize.define('users', {
    ID: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
    },
    first_name: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_type: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true
    }
}); 

User.beforeCreate((user) => {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(user.password, salt);
});
    
User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}
    


// create all the defined tables in the specified database.
sequelize.sync()
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

// export User model for use in other files.
module.exports = User;