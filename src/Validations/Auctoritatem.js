import { ConsultInUsers } from '../models/Consults.js';

export async function Examinare(id, acesso) {
    const Potestatem = await ConsultInUsers('id', id);

    if (Potestatem.role === 'ADM') {
        if ((acesso === "ADM" || acesso === 'vhs' || acesso === 'premium' || acesso === 'user')) {
            return { validez: true, msg: `Bem-vindo à página, administrador ${Potestatem.apelido}.` };
        };
    };

    if (Potestatem.role === 'vhs') {
        if ((acesso === 'vhs' || acesso === 'premium' || acesso === 'user')) {
            return { validez: true, msg: `Bem-vindo à página do VIP VHS, ${Potestatem.apelido}.` };
        };
    };

    if (Potestatem.role === 'premium') {
        if ((acesso === 'premium' || acesso === 'user')) {
            return { validez: true, msg: `Bem-vindo à página do Usuário Premium, ${Potestatem.apelido}.` };
        };
    };

    if (Potestatem.role === 'user') {
        if (acesso === 'user') {
            return { validez: true, msg: `Bem-vindo à página do usuário, ${Potestatem.apelido}.` };
        };
    };

    return { validez: false, msg: 'Acesso negado.' };
};
