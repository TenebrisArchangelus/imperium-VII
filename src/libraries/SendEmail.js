import Mercurius from "./Email.js";
import { EMAIL_user } from '../config.js';
import { Dialogus } from "./Roteiro.js";

export async function sendEmail(destinatario, contexto, dados) {

    try {
        const requerimento = await Dialogus(contexto, dados);
        const emailOptions = {
            from: EMAIL_user,
            to: destinatario,
            replyTo: EMAIL_user,
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
