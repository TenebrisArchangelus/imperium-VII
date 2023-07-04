import { ConsultInUsers } from '../models/Consults.js';
import { NameValidum, EmailValidum, CpfValidum, TelValidum, PasswordValidum, UserValidum } from '../libraries/Codex.js';

//Validação no registro
export async function validus(check) {
    const CampusCodicisI = await NameValidum(check.name);
    const CampusCodicisII = await EmailValidum(check.email);
    const CampusCodicisIII = await CpfValidum(check.cpf);
    const CampusCodicisIV = await TelValidum(check.tel);
    const CampusCodicisV = await PasswordValidum(check.password);
    const CampusCodicisVI = await UserValidum(check.name, check.email, check.apelido, check.cpf);


    if (CampusCodicisVI.name === check.name) {
        return { validez: false, msg: `${check.name} já possui um cadastro. Por favor, utilize outro nome ou contacte-nos para obter suporte.` };
    };
    if (!CampusCodicisI) {
        return { validez: false, msg: 'Nome inválido.' };
    };

    if (CampusCodicisVI.email === check.email) {
        return { validez: false, msg: `O email ${CampusCodicisVI.email} já possui cadastro. Por favor, utilize outro.` };
    };
    if (!CampusCodicisII) {
        return { validez: false, msg: 'E-mail inválido.' };
    };

    if (CampusCodicisVI.apelidoII || !check.apelido) {
        return { validez: false, msg: 'Nome de usuário já existente ou inválido' };
    };

    if (CampusCodicisVI.cpf === check.cpf) {
        return { validez: false, msg: `O CPF ${CampusCodicisVI.cpf} já possui cadastro com outro email. Por favor, utilize outro.` };
    };
    if (!CampusCodicisIII) {
        return { validez: false, msg: 'CPF inválido ou escrito incorretamente: 123.456.789-10.' };
    };
    if (CampusCodicisVI.cpfII || !check.cpf) {
        return { validez: false, msg: 'CPF inválido ou já existente.' };
    };

    if (!CampusCodicisIV) {
        return { validez: false, msg: 'Telefone inválido ou escrito incorretamente: +55 (21) 98769-6778 ou +55 (21) 4002-8922.' };
    };

    if (!CampusCodicisV) {
        return {
            validez: false,
            msg: 'A senha deve conter no mínimo 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial (@#$%^&+=*).',
        };
    };
    if (check.password != check.confirmpassword) {
        return { validez: false, msg: `As senhas não coincidem.` };
    };

    return { validez: true };
};



export async function Legitimus(check) {
    const ID = req.user.id;

    const CampusCodicisI = await NameValidum(check.name);
    const CampusCodicisII = await EmailValidum(check.email);
    const CampusCodicisIII = await CpfValidum(check.cpf);
    const CampusCodicisIV = await TelValidum(check.tel);
    const CampusCodicisV = await PasswordValidum(check.password);
    const CampusCodicisVI = await UserValidum(check.name, check.email, check.apelido, check.cpf);
    const user = await ConsultInUsers('id', ID)

    if (CampusCodicisVI.name === check.name && check.name != user.name) {
        return { validez: false, msg: `${check.name} já possui um cadastro. Por favor, utilize outro nome ou contate-nos para obter suporte.` };
    };
    if (!CampusCodicisI) {
        return { validez: false, msg: 'Nome inválido.' };
    };

    if (CampusCodicisVI.email === check.email && check.email != user.email) {
        return { validez: false, msg: `O email ${check.email} já possui cadastro. Por favor, utilize outro.` };
    };
    if (CampusCodicisII) {
        return { validez: false, msg: 'E-mail inválido.' };
    };

    if (CampusCodicisVI.cpfII && check.cpf != user.cpf) {
        return { validez: false, msg: `O CPF ${CampusCodicisVI.cpf} já possui cadastro com outro email. Por favor, utilize outro.` };
    };
    if (!CampusCodicisIII) {
        return { validez: false, msg: 'CPF inválido ou escrito incorretamente: 123.456.789-10.' };
    };

    if (!CampusCodicisIV) {
        return { validez: false, msg: 'Telefone inválido ou escrito incorretamente: +55 (21) 98769-6778 ou +55 (21) 4002-8922.' };
    };

    if (check.password && !CampusCodicisV) {
        return {
            validez: false,
            msg: 'A senha deve conter no mínimo 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial (@#$%^&+=*).',
        };
    }
    if (!check.password && !check.confirmpassword) {
        return { validez: true };
    };
    if (check.password !== check.confirmpassword) {
        return { validez: false, msg: 'As novas senhas não coincidem.' };
    };

    if (!check.name || check.name === user.name) {
        check.name = user.name;
    };
    if (!check.email || check.email === user.email) {
        check.email = user.email;
    };
    if (!check.cpf || check.cpf === user.cpf) {
        check.cpf = user.cpf;
    };
    if (!check.apelido || check.apelido === user.apelido) {
        check.apelido = user.apelido;
    };
    if (!check.tel || check.tel === user.tel) {
        check.tel = user.tel;
    };
    if (!check.password || check.password === user.password) {
        check.password = user.password;
    };

    return { validez: true };
}



export async function Probatus(check) {
    //Gerais
    if (('name' in check) && !check.name) {
        return { validez: false, msg: 'Por favor, insira a teu nome para prosseguir.' };
    };
    if (('email' in check) && !check.email) {
        return { validez: false, msg: 'Por favor, insira a teu e-mail para prosseguir.' };
    };
    if (('apelido' in check) && !check.apelido) {
        return { validez: false, msg: 'Por favor, insira a teu nome de usuário para prosseguir.' };
    };
    if (('tel' in check) && !check.tel) {
        return { validez: false, msg: 'Por favor, insira a teu telefone para prosseguir.' };
    };
    if (('cpf' in check) && !check.cpf) {
        return { validez: false, msg: 'Por favor, insira teu CPF para prosseguir.' };
    };
    if (('password' in check) && !check.password) {
        return { validez: false, msg: 'Por favor, insira a tua senha para prosseguir.' };
    };
    if (('confirmpassword' in check) && !check.confirmpassword) {
        return { validez: false, msg: 'Por favor, confirme tua senha para prosseguir.' };
    };
    //Pouco usuais
    if (('passwordNew' in check) && !check.passwordNew) {
        return { validez: false, msg: 'Por favor, insira a tua nova antiga para prosseguir.' };
    };
    if (('passwordOld' in check) && !check.passwordOld) {
        return { validez: false, msg: 'Por favor, insira a tua senha antiga para prosseguir.' };
    };
    //Exclusiva de comentários
    if (('text' in check) && !check.text) {
        return { validez: false, msg: 'Por favor, insira um comentário para prosseguir.' };
    };
    if (('id' in check) && !check.id) {
        return { validez: false, msg: 'Por favor, insira o Id para prosseguir.' };
    };
    if (('idComment' in check) && !check.idComment) {
        return { validez: false, msg: 'Por favor, insira o Id do comentário para prosseguir.' };
    };
    //Exclusiva de compras
    if (('produto' in check) && !check.produto) {
        return { validez: false, msg: 'Por favor, insira o VIP para prosseguir a compra.' };
    };
    return { validez: true };
};