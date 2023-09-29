import express from 'express';
import { connectMongoDb } from './src/config/connection.js';
import { allRouter } from './src/routes/all.routes.js';
import { userRoutes } from './src/routes/user.routes.js';

const app = express();

const PORT = 3000;

app.use(allRouter)
app.use(userRoutes)

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
    connectMongoDb()
})