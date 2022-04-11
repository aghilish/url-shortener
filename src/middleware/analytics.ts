import { NextFunction, Request, Response } from 'express';
import { setVisitsCounter } from '../services';

export function visitsAnalytics(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    res.on('finish', async () => {
        const { slug } = req.params;
        if (req.method === 'GET' && slug) {
            await setVisitsCounter(slug);
        }

    });
    next();
}