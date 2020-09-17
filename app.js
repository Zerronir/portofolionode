// Servidor nodejs http y express
const Joi = require('joi');
const ejs = require('ejs');
const path = require('path');
const request = require('request');
const bcrypt = require('bcrypt');
const express = require('express');
const articleRouter = require('articles');
const app = express();
const bbdd = require('mongoose');
const presupuesto = require('./models/presupuesto');

bbdd.connect("mongodb://localhost/portofolio", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true  });

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.set('view engine', 'ejs');
const mysql = require('mysql');

// Conexión a la base de datos
const conn = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'septiembre_2020_7'
});

// GET requests
app.get("/", function (req, res) {
    res.render('index');
});

app.get("/presupuesto", function (req, res) {
    res.render('presupuesto', {text: "Hey"});
});

// POST requests
app.post('/api/sendmail', function(req, res) {

});

app.listen(3000);