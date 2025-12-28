import express, { Router, Request, Response } from 'express';
const router = express.Router();


router.post('/', (req: Request, res: Response) => {
    console.log('post found');
    res.send('Create a new post');
});


export const postRouter: Router = router;