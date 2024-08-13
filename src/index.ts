import express from "express"

// Crea la aplicación
const app = express()

app.get("/", (req, res) => {
  res.json({ message: "Hola YouTube!" })
})

// Inicia el servidor
app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"))
