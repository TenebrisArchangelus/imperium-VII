import express from 'express';
import { RegistrarUser, LoginUser, LogoutUser, AdmUser, VipUser, PremiumUser, UserNormal } from '../controllers/UserController.js';
import { checkToken } from '../middlewares/ValidateToken.js'
import { ValidationMiddlewareI, ValidationMiddlewareIII } from '../middlewares/ValidateDados.js';

const rota = express.Router();

//Rota Home
rota.get('/', (req, res) => {
    res.status(200).json({ msg: 'API dedicada ao TCC dos VIP do T.I Firjan SENAI 2023' });
});


// Rota de registro
rota.post("/registrar", ValidationMiddlewareI, RegistrarUser);

// Rota de login
rota.post("/login", ValidationMiddlewareIII, LoginUser);

// Rota de logout
rota.post("/logout", checkToken, LogoutUser);

// Rota de ADM com login
rota.post("/login/adm", checkToken, AdmUser);

// Rota de VIP VHS com login
rota.post("/login/vhs", checkToken, VipUser);

// Rota de User Premium com login
rota.post("/login/premium", checkToken, PremiumUser);

// Rota de User normal com login
rota.post("/login/user", checkToken, UserNormal);

export default rota;