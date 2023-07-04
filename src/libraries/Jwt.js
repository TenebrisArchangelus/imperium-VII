import jwt from "jsonwebtoken";
import { T_secret } from '../config.js';

export async function CriarToken(payload, Situation) {
    let token;

    try {

        if (Situation == 'RecSenha') {
            token = jwt.sign(payload, T_secret, { expiresIn: '1h' });
            return token;
        };

        if (payload.role == 'ADM') {
            token = jwt.sign(payload, T_secret, { expiresIn: '24h' });
        } else {
            token = jwt.sign(payload, T_secret, { expiresIn: '168h' });
        };

        return token;

    } catch (erro) {
        console.error('Houve um erro ao tentar criar o token:', erro);
        res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
    };
};