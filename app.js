import express from 'express';
import morgan from 'morgan';


const app = express();
const PORT = process.env.PORT || 3000


app.use(morgan('dev'));
app.use(express.json())

//rutas
import { router } from './routes/user.routes.js';
app.use('/api', router)




app.listen(PORT, ()=>{
    console.log('listening on port ',PORT);
})


