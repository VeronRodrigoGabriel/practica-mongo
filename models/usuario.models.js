import {Schema, model} from "mongoose";

export const User = new Schema({
    name:{
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})


const Usermodel = model('User', User)

export {Usermodel}