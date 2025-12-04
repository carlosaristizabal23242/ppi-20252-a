const express = require("express");
const path = require("path");
const app = express();

// Servir archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname)));

// Ruta principal
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Puerto asignado por Heroku
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
