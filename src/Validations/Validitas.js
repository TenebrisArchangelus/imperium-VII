import { ConsultInValiditas } from '../models/Consults.js';


//Aceitamos eszett(ß) nas senhas :D 
//Validação no registro
export async function validus(check) {
    const NameValidus = /^\s*\S.*$/i;
    const EmailValidus = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const CpfValidus = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;
    const TelValidus = /^\+\d{2} \(\d{2}\) \d{4,5}\-\d{4}$/;
    const PasswordValidus = /^(?=.*\d)(?=.*[a-zß])(?=.*[A-Z])(?=.*[@#$%^&+=*])[a-zA-Z\dß@#$%^&+=*]{8,}$/;

    const resultsName = await ConsultInValiditas('name', check.name);
    const resultsEmail = await ConsultInValiditas('email', check.email);
    const resultsApelido = await ConsultInValiditas('apelido', check.apelido);
    const resultsCpf = await ConsultInValiditas('cpf', check.cpf);

    const user = {
        name: resultsName[0][0] ? resultsName[0][0].name : null,
        email: resultsEmail[0][0] ? resultsEmail[0][0].email : null,
        apelido: resultsApelido[0][0] ? resultsApelido[0][0].apelido : null,
        cpf: resultsCpf[0][0] ? resultsCpf[0][0].cpf : null
    };

    if (user.name === check.name) {
        return { validez: false, msg: `${check.name} já possui um cadastro. Por favor, utilize outro nome ou contacte-nos para obter suporte.` };
    };
    if (!NameValidus.test(check.name) || !check.name) {
        return { validez: false, msg: 'Nome inválido.' };
    };
    if (user.email === check.email) {
        return { validez: false, msg: `O email ${user.email} já possui cadastro. Por favor, utilize outro.` };
    };
    if (!EmailValidus.test(check.email) || !check.email) {
        return { validez: false, msg: 'E-mail inválido.' };
    };
    if (resultsApelido[0].length > 0 || !check.apelido) {
        return { validez: false, msg: 'Nome de usuário já existente ou inválido' };
    };
    if (user.cpf === check.cpf) {
        return { validez: false, msg: `O CPF ${check.cpf} já possui cadastro com o email ${user.email}. Por favor, utilize outro.` };
    };
    if (!CpfValidus.test(check.cpf) || !check.cpf) {
        return { validez: false, msg: 'CPF inválido ou escrito incorretamente: 123.456.789-10' };
    };
    if (!TelValidus.test(check.tel) || !check.tel) {
        return { validez: false, msg: 'Telefone inválido ou escrito incorretamente: +55 (21) 98769-6778 ou +55 (21) 4002-8922' };
    };
    if (check.password != check.confirmpassword) {
        return { validez: false, msg: 'As senhas não coincidem.' };
    };
    if (!PasswordValidus.test(check.password) || !check.password || check.password.length < 8 || check.password.length > 12) {
        return { validez: false, msg: 'A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais, possuindo de 8 a 12 caracteres.' };
    };
    return { validez: true };
};


export async function Legitimus(check) {
    const NameValidus = /^\s*\S.*$/i;
    const EmailValidus = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const CpfValidus = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;
    const TelValidus = /^\+\d{2} \(\d{2}\) \d{4,5}\-\d{4}$/;
    const PasswordValidus = /^(?=.*\d)(?=.*[a-zß])(?=.*[A-Z])(?=.*[@#$%^&+=*])[a-zA-Z\dß@#$%^&+=*]{8,}$/;

    const ratificare = await ConsultInValiditas('apelido', check.apelido);
    const resultsName = await ConsultInValiditas('name', check.name);
    const resultsEmail = await ConsultInValiditas('email', check.email);
    const resultsCpf = await ConsultInValiditas('cpf', check.cpf);

    const usersDB = {
        name: resultsName[0][0] ? resultsName[0][0].name : null,
        email: resultsEmail[0][0] ? resultsEmail[0][0].email : null,
        cpf: resultsCpf[0][0] ? resultsCpf[0][0].cpf : null
    };

    const user = ratificare[0];

    if (usersDB.name === check.name && check.name != user[0].name) {
        return { validez: false, msg: `${check.name} já possui um cadastro. Por favor, utilize outro ou contacte-nos para obter suporte.` };
    };
    if (!check.name || check.name === user[0].name) {
        check.name = user[0].name;
    };
    if (!NameValidus.test(check.name)) {
        return { validez: false, msg: 'O novo nome é inválido.' };
    };

    if (usersDB.email === check.email && check.email != user[0].email) {
        return { validez: false, msg: `O email ${check.email} já possui cadastro. Por favor, utilize outro.` };
    };
    if (!check.email || check.email === user[0].email) {
        check.email = user[0].email;
    };
    if (!EmailValidus.test(check.email)) {
        return { validez: false, msg: 'O novo e-mail é inválido.' };
    };

    if (!check.apelido || check.apelido === user[0].apelido) {
        check.apelido = user[0].apelido;
    };
    if (check.apelido !== user[0].apelido && ratificare[0].length > 0) {
        return { validez: false, msg: 'O novo nome de usuário já existe ou é inválido' };
    };

    if (user.cpf === check.cpf && check.cpf != user[0].cpf) {
        return { validez: false, msg: `O CPF ${check.cpf} já possui cadastro com o email ${user[0].email}. Por favor, utilize outro.` };
    };
    if (!check.cpf || check.cpf === user[0].cpf) {
        check.cpf = user[0].cpf;
    };
    if (!CpfValidus.test(check.cpf)) {
        return { validez: false, msg: 'O novo CPF inválido ou escrito incorretamente: 123.456.789-10' };
    };

    if (!check.tel || check.tel === user[0].tel) {
        check.tel = user[0].tel;
    };
    if (!TelValidus.test(check.tel)) {
        return { validez: false, msg: 'O novo número de telefone inválido ou escrito incorretamente: +55 (21) 98769-6778 ou +55 (21) 4002-8922' };
    };

    if (!check.password && !check.confirmpassword) {
        return { validez: true };
    };
    if (check.password !== check.confirmpassword) {
        return { validez: false, msg: 'As novas senhas não coincidem.' };
    };
    if (!PasswordValidus.test(check.password) || check.password.length < 8 || check.password.length > 12) {
        return { validez: false, msg: 'A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais, possuindo de 8 a 12 caracteres.' };
    };
    return { validez: true };
};


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