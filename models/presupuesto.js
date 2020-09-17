const bbdd = require('mongoose');
let autoIncrement = require('mongoose-sequence');


// Esquema de los presupuestos
const presupuestoSchema = new bbdd.Schema({
   idPresupuesto: {
       autoIncrement,
       primaryKey: true,
   },
    titulo: {
       required: true,
        type: String,
        maxlength: 30,
    },
    descripcion:{
       required: true,
        type: String,
        minlength: 60,
    },
    nombre: {
       required: true,
        type: String,
        maxlength: 30
    },
    apellidos: {
       required: true,
        type: String,
        maxlength: 60
    },
    email: {
       required: true,
        type: String,
        minlength: 4,
    },
    telefono: {
       required: true,
        type: Number,
        maxlength: 9,
    },
    solicitado: {
       type: Date,
        default: Date.now,
    },

});


// Exportamos el módulo
module.exports.presupuesto = presupuestoSchema;
presupuestoSchema.plugin(autoIncrement, {inc_field: 'idPresupuesto'});
