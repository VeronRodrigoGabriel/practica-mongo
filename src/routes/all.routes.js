import { Router } from "express";
import { PublicationModel } from "../models/PublicationModel.js";

const allRouter = Router();

allRouter.get('/new',)


allRouter.get('/getUsers', async (req, res) => {
    try {

        const users = await UserModel.find().populate('publications', {
            __v: 0,
            createdAt: 0,
            updatedAt: 0
        })

        res.status(200).json(users)


    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
})

allRouter.get('/getPublications', async (req, res) => {
    try {

        const publications = await PublicationModel.find().populate('autor', {
            publications: 0,
            _id: 0,
            __v: 0
        })

        res.status(200).json(publications)


    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
})



export { allRouter }


