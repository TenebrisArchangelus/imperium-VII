import express from 'express';
import { checkToken } from '../middlewares/ValidateToken.js';
import { checkPay } from '../middlewares/ValidatePayment.js';
import { ValidationMiddlewareIII } from '../middlewares/ValidateDados.js';
import { CriarSession, SuccessSession } from '../controllers/PaymentController.js'

const rota = express.Router();

rota.post("/create-checkout-session", checkToken, ValidationMiddlewareIII, CriarSession);

rota.get('/success', checkToken, checkPay, SuccessSession);

rota.get('/cancel', checkToken, (req, res) => {
    res.redirect('http://localhost:3000/api/login/user');
});

export default rota;