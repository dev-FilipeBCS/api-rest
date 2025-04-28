import express from "express"

const PORT = 3333

// inicializa o express e armazena em app todas as suas funcionalidades
const app = express()

app.get("/products", (request, response) => {
  // http://localhost:3333/products/?page=1&limit=10
  const {page, limit} = request.query
  
  response.send(`Página ${page} de ${limit}`)
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))