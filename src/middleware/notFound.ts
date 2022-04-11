import { Request, Response } from 'express';

export default function handleNotFound(_req: Request, res: Response) {
    res.status(404).send({
        message: 'Not Found',
    });
}
