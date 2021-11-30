import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pedidoSchema = new Schema(
    {
        usuario: String,
        producto: String,
        total: String,
        ubicacion: String
    }
)

// Crear el modelo
const Pedido = mongoose.model('Pedido', pedidoSchema);

export default Pedido;
