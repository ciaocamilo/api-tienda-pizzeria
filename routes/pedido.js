import express from 'express';
const router = express.Router();

// Importar el modelo
import Pedido from '../models/pedido';

// Ruta para crear pedido
router.post('/nuevo-pedido', async(req, res) => {
    const body = req.body.data;
    try {
        const pedidoDB = await Pedido.create(body);
        res.status(200).json(pedidoDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrió un error al crear el pedido',
            error
        })
    }
});

//Exportar configuración
module.exports = router;