import express from 'express'
import { identifyUser } from '../middleware/auth.middleware.js'
import { loginController, registerController } from '../controllers/auth.controller.js'

const authRouter = express.Router()

authRouter.post("/register", registerController)
authRouter.post("/login", loginController)

export default authRouter