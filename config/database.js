import {connect} from "mongoose";
import 'dotenv/config'

export async function connectDB(){
    try{
        await connect(process.env.Database);
        console.log('Database connection')
    }catch(err){
        console.log(err)
    }
}