import Mercurius from "./Email.js";
import { EMAIL_user } from '../config.js';
import { Dialogus } from "./Roteiro.js";

export async function sendEmail(destinatario, contexto) {

    try {
        const requerimento = await Dialogus(contexto);
        const emailOptions = {
            from: EMAIL_user,
            to: destinatario,
            subject: requerimento.Titulus,
            html: requerimento.Textus
        };

        await Mercurius.sendMail(emailOptions);
        Mercurius.close;
        console.log('E-mail enviado com sucesso.');

    } catch (erro) {
        console.error('Houve um erro ao enviar o e-mail:', erro);
        Mercurius.close;
    };
};
