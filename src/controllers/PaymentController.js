import { criarSessaoVipPremium, criarSessaoVipVhs, StatusSession } from '../libraries/Payment.js'
import { Data } from '../libraries/Tempus.js'
import { InsertTransaction } from '../models/Inserts.js';
import { ConsultById } from '../models/Consults.js';

//Cria a sessão de venda
export async function CriarSession(req, res) {
    const { produto } = req.body;
    let Status, sessionVip;

    try {

        switch (produto) {
            case 'Premium':
                sessionVip = await criarSessaoVipPremium();
                break;

            case 'VHS':
                sessionVip = await criarSessaoVipVhs();
                break;

            default:
                res.status(500).json("Houve um erro ao selecionar o produto");
        };

        Status = sessionVip.id;
        res.cookie('PayStatus', Status, { httpOnly: true, maxAge: 3600000 });
        res.status(200).json({ StripeUrl: sessionVip.url });

    } catch (erro) {
        console.error('Houve um erro na tentativa de obter os dados da compra', erro);
        res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
    };
};


//Função de sucesso
export async function SuccessSession(req, res) {
    const id = req.user.id;
    const idSessao = req.status;
    let role = " ";
    let assinatura = " ";

    try {
        const user = await ConsultById(id);
        const sessao = await StatusSession(idSessao);
        const data = await Data(sessao.created);
        const Item = sessao.amount_subtotal;
        const PaymentStatus = sessao.payment_status;

        if (PaymentStatus === "paid") {
            switch (Item) {
                case 1599:
                    role = "premium",
                    assinatura = "assinaturaI"
                    break;

                case 2599:
                    role = "vhs",
                    assinatura = "assinaturaII"
                    break;

                default:
                    res.status(500).json("Houve um erro ao selecionar o produto comprado");
            };
            await InsertTransaction(id, sessao, data);
            await sendEmail(user.email, assinatura);
        };

        res.redirect('http://localhost:3000/api/login/user');
        //https://imperiumstudio.netlify.app/parte%20interior/assinatura%20vhs/
    } catch (erro) {
        res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
    };
};