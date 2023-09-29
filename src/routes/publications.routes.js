import { Router } from "express";
import { AddPulicationCtrl } from '../controllers/publications.controllers.js'
const publicationsRoutes = Router();

publicationsRoutes.post('/publications', AddPulicationCtrl)

export { publicationsRoutes }