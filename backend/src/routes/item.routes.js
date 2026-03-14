import express from 'express'
import { itemController } from '../controllers/item.controller.js'

const itemRouter = express.Router()

itemRouter.post("/save", itemController)

export default itemRouter;