import { VerificaConexao } from './Nectum.js';

export const InsertRegistro = async (name, email, apelido, tel, cpf, passwordHash, role) => {
    try {
        const connection = await VerificaConexao();

        const insertQuery = 'INSERT INTO users (name, email, apelido, tel, cpf, password, role) VALUES (?, ?, ?, ?, ?, ?, ?)';
        await connection.promise().query(insertQuery, [name, email, apelido, tel, cpf, passwordHash, role]);
        
        connection.release();
        return;
    } catch (erro) {
        console.log('Houve um erro ao registrar o usuário:', erro);
    }
};


export const InsertComentario = async (lastId, id, name, email, text) => {
    try {
        const connection = await VerificaConexao();

        const insertQuery = 'INSERT INTO comments (id, users_id, name, email, text) VALUES (?, ?, ?, ?, ?)';
        await connection.promise().query(insertQuery, [lastId, id, name, email, text]);
        
        connection.release();
        return;
    } catch (erro) {
        console.log('Houve um erro ao tentar publicar o comentário:', erro);
    }
};


export const InsertTransaction = async (id, sessao, data) => {
    try {
        const connection = await VerificaConexao();

        const insertQuery = 'INSERT INTO transactions (id_user, id_compra, data) VALUES (?, ?, ?)';
        await connection.promise().query(insertQuery, [id, sessao, data]);
        
        connection.release();
        return;
    } catch (erro) {
        console.log('Houve um erro ao tentar publicar o comentário:', erro);
    }
};