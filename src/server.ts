import express from "express"
import { routes } from "./routes"

const PORT = 3333

// inicializa o express e armazena em app todas as suas funcionalidades
const app = express()
app.use(express.json())

app.use(routes)

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))