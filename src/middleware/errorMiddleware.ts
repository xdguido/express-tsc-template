import { Request, Response, NextFunction } from 'express';
import { ErrorCode } from '../error/errorCode';
import { ErrorException } from '../error/errorException';
import { ErrorModel } from '../error/errorModel';

const { NODE_ENV } = process.env;

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ErrorException) {
        res.status(err.status).send(err);
    } else {
        console.error('Error occured:', err);
        res.status(500).send({
            code: ErrorCode.UnknownError,
            status: 500,
            stack: NODE_ENV === 'production' ? null : err.stack
        } as ErrorModel);
    }
};
