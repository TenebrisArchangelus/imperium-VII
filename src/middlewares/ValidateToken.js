import jwt from "jsonwebtoken";
import { T_secret, R_secret } from "../config.js";

export function checkToken(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ msg: "Não é possível identificar o token. Acesso negado." });
    };

    try {

        const secret = T_secret;
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();

    } catch (erro) {
        console.log(erro);
        res.status(403).json({ msg: "Token inválido." });
    };
};


export function recToken(req, res, next) {
    const token = req.body.token;

    if (!token) {
        return res.status(401).json({ msg: "Não é possível identificar o token de recuperação. Acesso negado." });
    };

    try {

        const secret = R_secret;
        const decoded = jwt.verify(token, secret);
        req.rec = decoded;
        next();

    } catch (erro) {
        console.log(erro);
        res.status(403).json({ msg: "Token inválido." });
    };
};