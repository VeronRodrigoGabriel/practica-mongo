import { Router } from 'express'
import { AddUserctrl } from '../controllers/user.controllers.js';

const userRoutes = Router();


userRoutes.post('/user', AddUserctrl)


export { userRoutes }