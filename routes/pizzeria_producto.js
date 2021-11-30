import express from 'express';
const router = express.Router();

// Importar el modelo
import PizzeriaProducto from '../models/pizzeria_producto';

// Ruta para consultar todos los productos de la pizzeria
router.get('/pizzeria/productos', async(req, res) => {
    try {
        const pizzeriaProductoDB = await PizzeriaProducto.find();
        res.json(pizzeriaProductoDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Se presentó un error en la consulta de los productos de la pizzeria',
            error
        })
    }
});

//Exportar configuración
module.exports = router;