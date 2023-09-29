import { UserModel } from "../UserModel.js"

export async function createUser(user) {
    return await UserModel.create(user)
}