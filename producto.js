const { connectDB } = require("./database");

async function insertProducto() {
  const db = await connectDB();
  const productos = db.collection("productos");
  const nuevoProducto = { nombre: "Laptop", precio: 1200, stock: 10 };
  const resultado = await productos.insertOne(nuevoProducto);
  console.log("🆕 Producto insertado:", resultado.insertedId);
}

// insertProducto();

async function leerProductos() {
  const db = await connectDB();
  const productos = db.collection("productos");
  const lista = await productos.find().toArray();
  console.log("📄 Lista:", lista);
}

// leerProductos();

async function actualizarProducto() {
  const db = await connectDB();
  const productos = db.collection("productos");
  const resultado = await productos.updateOne(
    { nombre: "Laptop" },
    { $set: { precio: 1100 } }
  );
  console.log("✏️ Actualizados:", resultado.modifiedCount);
}

// actualizarProducto();

async function eliminarProducto() {
  const db = await connectDB();
  const productos = db.collection("productos");
  const resultado = await productos.deleteOne({ nombre: "Laptop" });
  console.log("🗑️ Eliminados:", resultado.deletedCount);
}

// eliminarProducto();
