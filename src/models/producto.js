const mongoose = require("mongoose"); // importando el componente mogoose
const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true
    },
    tipo: {
        type: String,
        required: true,
    },
    deporte: {
        type: String,
        required: true
    },
    tamaño: {
        type: String,
        required: true
    },
    peso: {
        type: Number,
        required: true,
    },
});
module.exports = mongoose.model("Producto", productoSchema);