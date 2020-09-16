// Servidor nodejs http y express
const Joi = require('joi');
const ejs = require('ejs');
const path = require('path');
const request = require('request');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();

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

app.get("/", function (req, res) {
    res.render('index');
});

app.get("/presupuesto", function (req, res) {
    res.render('presupuesto');
});

app.listen(3000);