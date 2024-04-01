const express = require('express');
const app = express();

const clientes = [
  { id: 1, nombre: "Juan Pérez" },
  { id: 2, nombre: "Ana García" },
  { id: 3, nombre: "Pedro López" },
];

const productos = [
  { id: 1, nombre: "Producto 1", precio: 100 },
  { id: 2, nombre: "Producto 2", precio: 200 },
  { id: 3, nombre: "Producto 3", precio: 300 },
];

app.get('/clientes', (req, res) => {
  res.json(clientes);
});

app.get('/productos', (req, res) => {
  res.json(productos);
});

app.listen(3000, () => {
  console.log('Servidor funcionando en el puerto 3000');
});
