import express from 'express'
import itemRouter from './routes/item.routes.js'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/item", itemRouter)

export default app

