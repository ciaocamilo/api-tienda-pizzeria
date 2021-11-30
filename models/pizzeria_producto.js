import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pizzeriaProductoSchema = new Schema(
    {
        codigo: String,
        nombre: { type: String, required: [true, 'Nombre requerido'] },
        desc_corta: { type: String, default: 'Lorem' },
        desc_larga: { type: String, default: 'Lorem ipsum' },
        precio: { type: Number, required: [true, 'Precio requerido'] }
    }
)

// Crear el modelo
const PizzeriaProducto = mongoose.model('PizzeriaProducto', pizzeriaProductoSchema);

export default PizzeriaProducto;
