import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ data: 'Hello Route' });
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
