import { Usermodel } from "../models/usuario.models.js";

export const AddUser = async (req,res) =>{
    try{
        const user = new Usermodel(req.body);
        await user.save();
        res.status(200).json({message: "Usuario creado correctamente"});
    }catch(error){
        res.status(400).json({message: error.message});
    }
}