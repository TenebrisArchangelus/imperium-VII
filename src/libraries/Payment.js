import Stripe from 'stripe';
import { S_secret, S_premium, S_vhs } from '../config.js';
import { Data } from './Tempus.js';
import { sendEmail } from './SendEmail.js';
import { UpdateTransactions } from "../models/Updates.js";
const stripe = new Stripe(S_secret)

//Cria produto da venda
export async function criarSessaoVipPremium() {
    return stripe.checkout.sessions.create({
        line_items: [
            {
                price: S_premium,
                quantity: 1,
            }
        ],
        payment_method_types: ['card'],
        mode: 'subscription',
        success_url: 'http://localhost:3000/api/success',
        cancel_url: 'http://localhost:3000/api/cancel',
    });
};


//Cria produto da venda
export async function criarSessaoVipVhs() {
    return stripe.checkout.sessions.create({
        line_items: [
            {
                price: S_vhs,
                quantity: 1,
            }
        ],
        payment_method_types: ['card'],
        mode: 'subscription',
        success_url: 'http://localhost:3000/api/success',
        cancel_url: 'http://localhost:3000/api/cancel',
    });
};


//Consulta com base no ID
export async function StatusPayment(IdSession) {
    try {
        const subscription = await stripe.subscriptions.retrieve(IdSession);
        const statusPagamento = subscription.latest_invoice.payment_intent.status;
        return statusPagamento;
    } catch (erro) {
        console.error('Houve um erro ao verificar o status de pagamento:', erro);
    };
};

export async function RenovarPayment(gerado, sessao, Id, email) {
    try {
        const dataI = await Data(gerado);
        const dataII = gerado;
        await UpdateTransactions(dataI, sessao, dataII, Id);
        await sendEmail(email, 'renovou');
        return;
    } catch (erro) {
        console.error('Houve um erro ao renovar a assinatura do usuário:', erro);
    };
};