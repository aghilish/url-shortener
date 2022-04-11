import { ValidateError } from '@tsoa/runtime';
import { NextFunction, Request, Response } from 'express';

export function handleError(
    error: Error | ValidateError,
    req: Request,
    res: Response,
    next: NextFunction,
) {
    if (error instanceof ValidateError) {
        res.status(422).json({
            message: 'Validation Failed',
            details: error.fields,
        });
    } else {
        res.status(500).json({ code: 500, message: 'Internal Server Error' });
    }

    next();
}
