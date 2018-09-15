var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');

// const { Client } = require('pg');

// var database_url = 'postgres://yyssbjsxbooeoi:6001391d88054adc9ae074c1d3cd68680baba4712ae7111911e499ee965795fe@ec2-50-19-113-219.compute-1.amazonaws.com:5432/dann15kue1cruh?ssl=true'

// const client = new Client({
//   connectionString: process.env.database_url,
//   ssl: true,
// });


// create a sequelize instance with our local postgres database information.
var sequelize = new Sequelize('postgres://dseodrqbcsbgpj:efda57f9ed1c8c415d845a79d3738b2022482b624df8280390852a03e2593faa@ec2-54-243-213-188.compute-1.amazonaws.com:5432/dahj04ucobqc89', {  
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
    }
}); 

User.hook('beforeCreate', (user) => {
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