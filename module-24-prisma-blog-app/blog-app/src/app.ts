import express, { Application, Request, Response } from 'express';
import { postRouter } from './modules/post/post.router';

const app: Application = express();
app.use(express.json());


app.use('/api/v1/post', postRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');

});


export default app;