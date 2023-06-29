import { config } from 'dotenv';
config();


//Banco de dados:
export const Db = process.env.DB;
export const DB_host = process.env.DB_HOST;
export const DB_user = process.env.DB_USER;
export const DB_pass = process.env.DB_PASS;
export const DB_limit = process.env.DB_LIMIT;

//Email:
export const EMAIL_host = process.env.EMAIL_HOST;
export const EMAIL_port = process.env.EMAIL_PORT;
export const EMAIL_user = process.env.EMAIL_USER;
export const EMAIL_pass = process.env.EMAIL_PASS;

//Stripe:
export const S_secret = process.env.S_SECRET;
export const S_vhs = process.env.S_VHS;
export const S_premium = process.env.S_PREMIUM;

//Outros:
export const porta = process.env.PORT;
export const ADM_senha = process.env.ADM_SENHA;
export const T_secret = process.env.SECRET;

//Criar tabela no mysql para registrar as compras.
//Lembrar de fazer a lógica de rota para revogar o role VIP Premium ou User com o sucesso dos pagamentos
//buscar senhas de app da conta da imperium para poder trocar a email pass.
//Rota para voce esqueceu a senha