import { ConsultTransactions } from "../models/Consults.js";
import { UpdateUserII } from "../models/Updates.js";
import { sendEmail } from './SendEmail.js';

export const Data = async (VerData) => {

    try {

        const dataAtual = new Date(VerData * 1000);

        let dia = dataAtual.getDate();
        let mes = dataAtual.getMonth() + 1;
        let ano = dataAtual.getFullYear() % 100;
        let hora = dataAtual.getHours();
        let minutos = dataAtual.getMinutes();

        dia = dia < 10 ? "0" + dia : dia;
        mes = mes < 10 ? "0" + mes : mes;
        ano = ano < 10 ? "0" + ano : ano;
        hora = hora < 10 ? "0" + hora : hora;
        minutos = minutos < 10 ? "0" + minutos : minutos;

        const data = dia + "/" + mes + "/" + ano + " " + hora + ":" + minutos;
        return data;

    } catch (erro) {
        console.error('Houve um erro ao executar a operação de obter o horário:', erro);
        res.status(500).json({ error: 'Sentimos muito, mas não pudemos registrar o horário atual' });
    };
};


export const VerificaRole = async (Id, email) => {

    try {
        const dataAtual = new Date();
        let dia = dataAtual.getDate();
        dia = dia < 10 ? "0" + dia : dia;

        const Transactions = await ConsultTransactions(Id);
        const sessao = await StatusPayment(Transactions.id_compra);
        const data = Transactions.data_compra;
        const diaDB = data.split("/")[0];

        if (sessao.created != Transactions.renovar) {
            await RenovarPayment(sessao.created, sessao, Id, email);
        };

        if (dia == diaDB && sessao.payment_status != "succeeded") {
            await UpdateUserII('user', Id);
            await sendEmail(email, 'expirou');
        };

        return;

    } catch (erro) {
        console.error('Houve um erro ao executar a mudança de cargo:', erro);
        res.status(500).json({ error: 'Sentimos muito, mas hpuve um erro no servidor.' });
    };
};