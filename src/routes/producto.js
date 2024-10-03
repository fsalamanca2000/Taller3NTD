const express = require("express");
const router = express.Router(); //manejador de rutas de express
const productoSchema = require("../models/producto");

//Nuevo Producto
router.post("/productos", (req, res) => {
    const producto = productoSchema(req.body);
    producto
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consultar Producto
router.get("/productos", (req, res) => {
    productoSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Modificar el producto por su id
router.put("/productos/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, precio, cantidad, tipo, deporte, tamaño, peso } = req.body;
    productoSchema
        .updateOne({ _id: id }, {
            $set: { nombre, precio, cantidad, tipo, deporte, tamaño, peso }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Eliminar el producto por su id
router.delete("/productos/:id", (req, res) => {
    const { id } = req.params;
    productoSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router;