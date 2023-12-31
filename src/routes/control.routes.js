import express from 'express';
import { ObterUser, DeletarUser, AlterarUser, FiltrarComments, AlterarComments, DeletarComments, RegistrarComments, RecuperaUser, UserClavis } from '../controllers/ImperiumController.js';
import { checkToken, recToken } from '../middlewares/ValidateToken.js';
import { ValidationMiddlewareII, ValidationMiddlewareIII } from '../middlewares/ValidateDados.js';

const rota = express.Router();

//Rota para Obter dados do Usuário
rota.get("/perfil", checkToken, ObterUser);

// Rota de deletar usuários
rota.delete("/delete", checkToken, ValidationMiddlewareIII, DeletarUser);

// Rota de Alterar Dados.
rota.patch("/alterarDados", checkToken, ValidationMiddlewareII, ValidationMiddlewareIII, AlterarUser);

// Rota de comentários
rota.post("/Comments", checkToken, ValidationMiddlewareIII, RegistrarComments);

// Rota de filtar comentários
rota.get("/filtrarComments", checkToken, ValidationMiddlewareIII, FiltrarComments);

// Rota de alterar comentários
rota.patch("/alterarComments", checkToken, ValidationMiddlewareIII, AlterarComments);

// Rota de deletar comentários
rota.delete("/deletarComments", checkToken, ValidationMiddlewareIII, DeletarComments);

//Rota de Pedir recuperação de conta
rota.post("/RecSenha", ValidationMiddlewareIII, RecuperaUser);

//Rota de Recuperação de conta
rota.post("/RecClavis", recToken, ValidationMiddlewareIII, UserClavis);

export default rota;