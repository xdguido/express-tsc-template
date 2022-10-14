import express, { Application } from 'express';
import routes from './routes/routes';
import { errorHandler } from './middleware/errorMiddleware';

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routes(app);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
