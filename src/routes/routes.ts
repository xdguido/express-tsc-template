import { Application, Request, Response, NextFunction } from 'express';
import { ErrorException } from '../error/errorException';
import { ErrorCode } from '../error/errorCode';

const error = async () => {
    const num: any = null;
    console.log(num.length);
};

export default function routes(app: Application) {
    app.get('/', (req: Request, res: Response) => {
        res.status(200).send({ data: 'Hello World' });
    });
    app.get('/async-unknown-error', async (req: Request, res: Response, next: NextFunction) => {
        try {
            await error();
        } catch (e) {
            next(e);
        }
    });
    app.get('/known-error', (req: Request, res: Response, next: NextFunction) => {
        throw new ErrorException(ErrorCode.NotFound);
    });
    app.get('/unknown-error', (req: Request, res: Response, next: NextFunction) => {
        const num: any = null;
        console.log(num.length);
    });
}
