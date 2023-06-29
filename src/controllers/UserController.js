import { ConsultByApelido } from '../models/Consults.js';
import { ADM_senha } from '../config.js';
import { Examinare } from '../Validations/Auctoritatem.js';
import { InsertRegistro } from '../models/Inserts.js';
import { CriarToken } from '../libraries/Jwt.js';
import { CompararSenhas, SenhaHash } from '../libraries/bcrypt.js';
import { sendEmail } from '../libraries/SendEmail.js';

//Função de Registro
export async function RegistrarUser(req, res) {
  const { name, email, apelido, tel, cpf, password, signaculum } = req.body;
  let role = "user";
  if (signaculum == ADM_senha) {
    role = "ADM"
  } else {
    role = "user"
  };

  try {

    const passwordHash = await SenhaHash(password);
    await InsertRegistro(name, email, apelido, tel, cpf, passwordHash, role);
    await sendEmail(email, 'registro');
    res.status(201).json({ msg: 'Usuário cadastrado com sucesso!' });

  } catch (erro) {
    console.error('Houve um erro ao executar a operação de registro:', erro);
    res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
  };
};


//Função para realizar o login do usuário
export async function LoginUser(req, res) {
  const { apelido, password } = req.body;

  try {

    const user = await ConsultByApelido(apelido);
    await CompararSenhas(password, user.password);

    // res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 604800000 });
    const token = await CriarToken({id: user.id, role: user.role})
    res.cookie('token', token, { httpOnly: true, maxAge: 604800000 });
    res.status(200).json({ msg: `Autenticação realizada com sucesso, ${user.name}` });

  } catch (erro) {
    console.error('Houve um erro ao executar a operação de login:', erro);
    res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
  };
};


//Função para realizar o logout do usuário
export async function LogoutUser(req, res) {

  try {

    res.clearCookie('token');
    return res.sendStatus(200);

  } catch (erro) {
    console.error('Houve um erro ao executar a operação de logout:', erro);
    res.sendStatus(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
  };
};


//ADM user:
export async function AdmUser(req, res) {
  const id = req.user.id;
  const acesso = "ADM";

  try {
    
    const resultado = await Examinare(id, acesso);
    if (resultado.validez) {
      return res.status(200).json({ msg: resultado.msg });
    }

  } catch (erro) {
    console.error('Houve um erro ao executar a operação:', erro);
    res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
  };
};


//Vip user:
export async function VipUser(req, res) {
  const id = req.user.id;
  const acesso = "vhs";

  try {

    const resultado = await Examinare(id, acesso);
    if (resultado.validez) {
      return res.status(200).json({ msg: resultado.msg });
    }

  } catch (erro) {
    console.error('Houve um erro ao executar a operação:', erro);
    res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
  };
};


//Premium user
export async function PremiumUser(req, res) {
  const id = req.user.id;
  const acesso = "premium";

  try {

    const resultado = await Examinare(id, acesso);
    if (resultado.validez) {
      return res.status(200).json({ msg: resultado.msg });
    }

  } catch (erro) {
    console.error('Houve um erro ao executar a operação:', erro);
    res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
  };
};


//Rota para Usuários normais
export async function UserNormal(req, res) {
  const id = req.user.id;
  const acesso = "user";

  try {

    const resultado = await Examinare(id, acesso);
    if (resultado.validez) {
      return res.status(200).json({ msg: resultado.msg });
    }
  } catch (erro) {
    console.error('Houve um erro ao executar a operação:', erro);
    res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
  };
};