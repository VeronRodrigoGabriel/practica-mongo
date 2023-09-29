import { response } from "express"
import { addPublications } from "../models/services/publications.services.js"

export const AddPulicationCtrl = async (req, res) => {
    try {

        const { _id } = req.params

        const publication1 = {
            title: 'Mi primer publicacion',
            content: 'Mi primer contenido',
            autor: user._id
        }

        const publication2 = {
            title: 'Mi SEGUNDA publicacion',
            content: 'Mi SEGUNDA contenido',
            autor: user._id
        }
        const newPublication = await addPublications(publication1, publication2, _id)


    } catch (error) {
        console.log(error)
        response.status(500).json({
            message: 'Error al crear publicacion'
        })
    }
}