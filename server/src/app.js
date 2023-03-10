import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import testRoute from './api/routes/books.js';
import { errorHandler, notFoundHandler } from '../middleware/errorHandler.js';

dotenv.config();

const dirname = path.resolve();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use(express.static(path.join(dirname, '/public')));

app.use(express.json());

app.use('/books', testRoute);
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
