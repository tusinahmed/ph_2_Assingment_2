import express from 'express';
import { Request, Response } from 'express';
import router from './app/modules/car/car.router';


const app = express();
app.use(express.json());

app.use('/api/cars', router)

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'server runing',


    })

})

export default app;

