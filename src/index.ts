import express from "express"
import { USERS } from "./consts"

// Crea la aplicación
const app = express()

app.get("/", (req, res) => {
  res.json({ message: "Hola YouTube!" })
})

// Rutas estáticas
app.get("/users", (req, res) => {
  res.json(USERS)
})

// Rutas dinámicas
app.get("/users/:id", (req, res) => {
  const { id } = req.params // Obtenemos el parámetro id del URL

  // Verificamos que el id sea un número
  if (Number.isNaN(Number(id))) return res.status(400).json({ error: "La id debe de ser un número" })

  // Obtenemos el usuario con ese id
  const currentUser = USERS.find(user => user.id === Number(id))
  if (!currentUser) return res.json({})

  res.json(currentUser)
})

// Inicia el servidor
app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"))
