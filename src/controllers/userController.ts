import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.find();
        res.status(200).send(user);
    } catch (e) {
        next(e);
    }
};
