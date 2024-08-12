import express from "express"

const app = express() // Crea la aplicación

app.get("/", (req, res) => {
  res.json({ mensaje: "Hola mundo!" })
})

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000")) // Inicia el servidor
