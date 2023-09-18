import { Router } from "express";
import { AddUser } from "../controllers/usuario.controllers.js";

const router = Router();

router.post("/user", AddUser);


export {router};