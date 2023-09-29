import { PublicationModel } from "../PublicationModel.js";
import { UserModel } from "../UserModel.js";

export async function addPublications(publication1, publication2, _id) {
    const newpublication1 = await PublicationModel.create(publication1)
    const newpublication2 = await PublicationModel.create(publication2)

    const user = await UserModel.findOne(_id);

    user.publications.push(newpublication1)
    user.publications.push(newpublication2)

    await user.save()
}