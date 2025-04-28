import express from "express"
import { myMiddleware } from "./middlewares/my-middleware"

const PORT = 3333

// inicializa o express e armazena em app todas as suas funcionalidades
const app = express()

app.use(express.json())
// middleware global (aplica para todas as rotas abaixo)
// app.use(myMiddleware)

app.get("/products", (request, response) => {
  // http://localhost:3333/products/?page=1&limit=10
  const {page, limit} = request.query
  
  response.send(`Página ${page} de ${limit}`)
})


// Middleware local em uma rota específica
app.post("/products", myMiddleware, (request, response) => {
  const {name, price} = request.body

  // response.send(`Produto ${name} custa ${price}`)
  response.status(201).json({ name, price, user_id: request.user_id })
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))