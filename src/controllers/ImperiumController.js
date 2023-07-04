import { ConsultInUsers, ConsultInComments, OrderById } from '../models/Consults.js';
import { InsertComentario } from '../models/Inserts.js';
import { UpdateComment, UpdateUser } from '../models/Updates.js';
import { DeleteComentario, DeleteUser } from '../models/Delete.js';
import { Examinare } from '../Validations/Auctoritatem.js';
import { sendEmail } from '../libraries/SendEmail.js';

// Rota de obtenção de dados do usuário para edição
export async function ObterUser(req, res) {
    const id = req.user.id;

    try {
        const user = await ConsultInUsers('id', id);
        res.status(200).json({ Id: user.id, Usuário: user.apelido, Nome: user.name, Email: user.email, Telefone: user.tel, Status: user.role });

    } catch (erro) {
        console.error('Houve um erro na tentativa de obter os dados do usuário:', erro);
        res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
    };
};


//Rota para deletar usuários:
export async function DeletarUser(req, res) {
    const { id } = req.user;
    const { password } = req.body;

    try {
        const user = await ConsultInUsers('id', id);
        if (user.role != 'ADM' && id != user.id) {
            return res.status(422).json("Acesso negado.");
        };

        await CompararSenhas(password, user.password);
        await DeleteUser(id);
        res.json({ msg: 'Conta excluída com sucesso.' });

    } catch (erro) {
        console.error('Houve um erro na tentativa de deletar o usuário:', erro);
        res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
    };
};


//Rota para alteração de dados: Testando
export async function AlterarUser(req, res) {
    const { id } = req.user;
    const { name, email, apelido, tel, cpf, passwordOld, password } = req.body;

    try {
        const user = await ConsultInUsers('id', id);
        await CompararSenhas(passwordOld, user.password);

        let passwordNew = passwordOld;
        if (passwordOld !== password) {
            const passwordHash = await SenhaHash(password);
            passwordNew = passwordHash;
        };

        await UpdateUser(name, email, apelido, tel, cpf, passwordNew, user.role, id);
        return res.status(200).json({ msg: 'Dados atualizados com sucesso.' });

    } catch (erro) {
        console.error('Houve um erro na tentativa de alterar o usuário:', erro);
        res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
    };
};


// Função para ajudar um usuário:
export async function RegistrarComments(req, res) {
    const id = req.user.id;
    const { name, email, text } = req.body;

    try {

        const user = await ConsultInUsers('id', id);
        if (name != user.name) {
            res.status(422).json({ msg: `O nome de usuário é incorreto, ${user.apelido}.` });
        };
        if (email != user.email) {
            res.status(422).json({ msg: `O email do usuário é incorreto, ${user.apelido}.` });
        };

        const lastId = await OrderById();
        await InsertComentario(lastId, id, name, email, text);
        res.status(201).json({ msg: 'Comentário adcionado com sucesso!' });
    } catch (erro) {
        console.error('Houve um erro ao tentar publicar o comentário:', erro);
        res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
    };
};


export async function FiltrarComments(req, res) {
    const ID = req.user.id;
    const { id } = req.body;
    const acesso = "ADM";

    if (ID != id) {
        const resultado = await Examinare(ID, acesso);
        if (!resultado.validez) {
            return;
            return;
        };

    };

    try {

        await ConsultInUsers('id', ID);
        const user = await ConsultInComments('users_id', id);
        const comments = user.map((row) => ({
            Nome: row.name,
            Comentário: row.text,
        }));
        return res.status(200).json(comments);

    } catch (erro) {
        console.error('Houve um erro ao tentar publicar o comentário:', erro);
        return res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
    };
};

export async function AlterarComments(req, res) {
    const ID = req.user.id;
    const { idComment, name, email, text } = req.body;

    try {

        const user = await ConsultInUsers('id', ID);
        const comment = await ConsultInComments('id', idComment);
        if (user.role != 'ADM' && ID != comment.users_id) {
            return res.status(422).json("Acesso negado.");
        };

        await UpdateComment(name, email, text, idComment);
        return res.status(200).json("Comentário alterado com sucesso.");

    } catch (erro) {
        console.error('Houve um erro ao tentar publicar o comentário:', erro);
        return res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
    };
};

export async function DeletarComments(req, res) {
    const ID = req.user.id;
    const { idComment } = req.body;

    try {

        const user = await ConsultInUsers('id', ID);
        const comment = await ConsultInComments('id', idComment);
        if (user.role != 'ADM' && ID != comment.users_id) {
            return res.status(422).json("Acesso negado.");
        };

        await DeleteComentario(idComment);
        return res.status(200).json("Comentário excluído com sucesso.");

    } catch (erro) {
        console.error('Houve um erro ao tentar publicar o comentário:', erro);
        return res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
    };
};


export async function RecuperaUser(req, res) {
    const { email, cpf } = req.body;

    try {
        const user = await ConsultInUsers('email', email);
        const userII = await ConsultInUsers('cpf', cpf);
        if (user != userII) {
            res.status(200).json('Estimado usuário, o e-mail e o CPF não coincidem, sinto muito dizer.');
        };

        const RecToken = await CriarRecToken({ id: user.id })

        await sendEmail(user.email, 'RecSenha', RecToken);
        res.status(200).json('Estimado usuário, um e-mail foi enviado para ti com mais informações para a recuperação de senha. Obrigado.');

    } catch (erro) {
        console.error('Houve um erro na tentativa de recuperar os dados do usuário:', erro);
        res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
    };
};

//lógica para recuperar dados do formulário e recuperar o usuário.
// O  user terá que inserir o token que enviamos antes para acessar esta rota.
export async function UserClavis(req, res) {
    const id = req.rec;
    const { password, confirmpassword } = req.body;


    try {

        if (password != confirmpassword) {
            res.status(401).json({ msg: 'As novas senhas não coincidem.' });
        };

        const user = await ConsultInUsers('id', id);
        const passwordHash = await SenhaHash(password);

        await UpdateUser(passwordHash, id);
        await sendEmail(user.email, 'recClavis', password);
        res.status(200).json('Senha atualizada com sucesso.');
        
    } catch (erro) {
        console.error('Houve um erro na tentativa de obter os dados do usuário:', erro);
        res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
    };
};
