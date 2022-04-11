import express, { Application } from 'express';
import morgan from 'morgan';
import { RegisterRoutes } from './routes';
import { handleError, handleNotFound, visitsAnalytics } from './middleware';

const app: Application = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(visitsAnalytics);



RegisterRoutes(app);

app.use(handleNotFound);
app.use(handleError);


export default app;
