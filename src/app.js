import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import authroutes from './routes/auth.routes.js'
import controlroutes from './routes/control.routes.js'
import paymentroutes from './routes/payment.routes.js'

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use("/api", authroutes);
app.use("/api", controlroutes);
app.use('/api', paymentroutes)


export default app;