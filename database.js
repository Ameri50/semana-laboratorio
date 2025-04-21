require("dotenv").config();
const mongoose = require("mongoose");

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a MongoDB con Mongoose"))
  .catch(error => console.error("Error al conectar a MongoDB:", error));

// Definir el esquema
const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true }
});

// Crear el modelo
const Producto = mongoose.model("Producto", ProductoSchema);

// Función para insertar un producto
async function crearProducto() {
  const producto = new Producto({ nombre: "Mouse", precio: 50, stock: 20 });
  try {
    await producto.save();
    console.log("Producto guardado:", producto);
  } catch (error) {
    console.error("Error al guardar el producto:", error);
  } finally {
    mongoose.connection.close(); // cerrar conexión después
  }
}

// Ejecutar la función
crearProducto();
