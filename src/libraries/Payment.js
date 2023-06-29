import Stripe from 'stripe';
import { S_secret, S_premium, S_vhs } from '../config.js';
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
export async function StatusSession(IdSession) {
    try {
        const sessao = await stripe.checkout.sessions.retrieve(IdSession);
        return sessao;
    } catch (erro) {
        console.error('Erro ao obter informações da sessão:', erro);
    };
};