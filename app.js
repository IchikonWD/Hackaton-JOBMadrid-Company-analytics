import express from 'express';
import { config } from 'dotenv';
import helmet from 'helmet';
import colors from 'colors';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import dataRoutes from './routes/dataRoutes.js';

config();
connectDB();

const app = express();
app.use(express.json());
app.use(helmet());

app.use('/api/v2/data', dataRoutes);

if (process.env.NODE_ENV === 'development') {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

const PORT = process.env.PORT || 5000;

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  );
});
