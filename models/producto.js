import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productoSchema = new Schema(
    {
        codigoBarras: String,
        nombre: { type: String, required: [true, 'Nombre requerido'] },
        precio: { type: Number, required: [true, 'Precio requerido'] },
        descripcion: { type: String, default: 'Lorem' },
        imagen: String
    }
)

// Crear el modelo
const Producto = mongoose.model('Producto', productoSchema);

export default Producto;
