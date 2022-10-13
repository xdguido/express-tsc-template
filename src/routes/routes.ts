import express, { Request, Response, NextFunction } from 'express';

let router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ data: 'Hello Route' });
});

export = router;