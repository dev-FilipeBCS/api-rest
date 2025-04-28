import express from "express"

const PORT = 3333

// inicializa o express e armazena em app todas as suas funcionalidades
const app = express()

app.get("/products/:id/:user", (request, response) => {
  const { id, user } = request.params

  response.send(`Produto ${id} do usuário ${user}`)
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))