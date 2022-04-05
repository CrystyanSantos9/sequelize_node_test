const routes = require("express").Router();
const {User} = require('./app/models')

User.create({
    name: 'rodrigo',
    email: 'rod@gmail.com',
    password_hash: 'abc124',
})
//Definição de rotas 
module.exports = routes; 

