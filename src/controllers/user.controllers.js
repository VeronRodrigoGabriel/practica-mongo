import { createUser } from '../models/services/user.services.js'

export const AddUserctrl = async (req, res) => {
    try {

        const user = {
            name: 'admin',
            email: 'admin@example.com'
        }




        const NewUser = await createUser(user);

        res.status(201).json({
            message: 'creados correctamente',
            user
        })

    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
}

