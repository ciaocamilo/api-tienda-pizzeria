import express from 'express';
const router = express.Router();

// Importar el modelo
import Cliente from '../models/cliente';

// Ruta para crear cliente
router.post('/nuevo-cliente', async(req, res) => {
    const body = req.body.data;
    // console.log(body);
    try {
        const clienteDB = await Cliente.create(body);
        res.status(200).json(clienteDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrió un error al crear el cliente',
            error
        })
    }
});

// Ruta para buscar cliente
router.get('/cliente/:identificacion', async(req, res) => {
    const identificacion = req.params.identificacion;
    try {
        const clienteDB = await Cliente.findOne({identificacion});
        res.json(clienteDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrió un error al buscar cliente',
            error
        })
    }
});

// Ruta para actualizar cliente
router.put('/actualizar-cliente/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const clienteDB = await Cliente.findByIdAndUpdate(
            _id,
            body,
            {new: true}
        );
        res.json(clienteDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrió un error al actualizar el cliente',
            error
        })
    }
});

// Ruta para eliminar cliente
router.delete('/eliminar-cliente/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const clienteDB = await Cliente.findByIdAndDelete({_id});
        if(!clienteDB){
            return res.status(400).json({
                mensaje: 'No se encontró el cliente',
                error
            })
        }
        res.json(clienteDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrió un error al eliminar el cliente',
            error
        })
    }
});


//Exportar configuración
module.exports = router;