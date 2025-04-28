import express from "express"

const PORT = 3333

// inicializa o express e armazena em app todas as suas funcionalidades
const app = express()

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))