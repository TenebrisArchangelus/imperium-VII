import { criarSessaoVipPremium, criarSessaoVipVhs, StatusPayment } from '../libraries/Payment.js'
import { Data } from '../libraries/Tempus.js'
import { InsertTransaction } from '../models/Inserts.js';
import { ConsultInUsers } from '../models/Consults.js';
import { sendEmail } from '../libraries/SendEmail.js';

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
    const idSessao = 'cs_test_a1RrI2EpvQak0NguuUpc6MgnviOl8BO7XfnXWze3OREMmEy1OnWnzEoIPG';
    let role = " ";
    let assinatura = " ";

    try {
        const user = await ConsultInUsers('id', id);
        const sessao = await StatusPayment(idSessao);
        const dataI = await Data(sessao.created);
        const dataII = sessao.created;
        const Item = sessao.amount;
        const PaymentStatus = sessao.payment_status;

        if (PaymentStatus === "succeeded") {
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
            await InsertTransaction(id, sessao, dataI, dataII);
            await sendEmail(user.email, assinatura, user.apelido);
        };

        res.redirect('http://localhost:3000/api/login/user');
        //https://imperiumstudio.netlify.app/parte%20interior/assinatura%20vhs/
    } catch (erro) {
        res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
    };
};
