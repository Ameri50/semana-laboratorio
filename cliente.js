const { connectDB } = require("./database");

async function consultarClientesMayores30() {
  const db = await connectDB();
  const clientes = db.collection("clientes");
  const resultado = await clientes.find(
    { edad: { $gt: 30 } },
    { projection: { nombre: 1, correo: 1, _id: 0 } }
  ).toArray();
  console.log("Clientes >30:", resultado);
}

// consultarClientesMayores30();

async function actualizarCiudadCliente(nombre, nuevaCiudad) {
  const db = await connectDB();
  const clientes = db.collection("clientes");
  const res = await clientes.updateOne(
    { nombre },
    { $set: { ciudad: nuevaCiudad } }
  );
  console.log("✏️ Ciudad actualizada:", res.modifiedCount);
}

// actualizarCiudadCliente("Carlos", "Lima");

async function actualizarCiudadBogota() {
  const db = await connectDB();
  const clientes = db.collection("clientes");
  const res = await clientes.updateMany(
    { ciudad: "Bogotá" },
    { $set: { ciudad: "Cali" } }
  );
  console.log("✏️ Clientes actualizados:", res.modifiedCount);
}

// actualizarCiudadBogota();

async function eliminarCliente(nombre) {
  const db = await connectDB();
  const clientes = db.collection("clientes");
  const res = await clientes.deleteOne({ nombre });
  console.log("🗑️ Eliminado:", res.deletedCount);
}

// eliminarCliente("Carlos");

async function eliminarClientesPorCiudad(ciudad) {
  const db = await connectDB();
  const clientes = db.collection("clientes");
  const res = await clientes.deleteMany({ ciudad });
  console.log("🗑️ Eliminados:", res.deletedCount);
}

// eliminarClientesPorCiudad("Cali");
