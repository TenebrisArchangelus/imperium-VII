import { VerificaConexao } from './Nectum.js';

export const UpdateUser = async (name, email, apelido, tel, cpf, passwordNew, role, id) => {
    try {

        const connection = await VerificaConexao();
        await connection.promise().query('UPDATE users SET name = ?, email = ?, apelido = ?, tel = ?, cpf = ?, password = ?, role = ? WHERE id = ?', [name, email, apelido, tel, cpf, passwordNew, role, id]);
        connection.release();
        return;

    } catch (erro) {
        console.log('Houve um erro ao tentar alterar o usuário:', erro);
    };
};


export const UpdateUserII = async (role, id) => {
    try {

        const connection = await VerificaConexao();
        await connection.promise().query('UPDATE users SET role = ? WHERE id = ?', [role, id]);
        connection.release();
        return;

    } catch (erro) {
        console.log('Houve um erro ao tentar alterar o usuário:', erro);
    };
};


export const UpdateComment = async (name, email, text, id) => {
    try {

        const connection = await VerificaConexao();
        await connection.promise().query('UPDATE comments SET name = ?, email = ?, text = ? WHERE id = ?', [name, email, text, id]);
        connection.release();
        return;

    } catch (erro) {
        console.log('Houve um erro ao tentar editar o comentário:', erro);
    };
};


export const UpdateTransactions = async (data, compra, renovar, id) => {
    try {

        const connection = await VerificaConexao();
        await connection.promise().query('UPDATE transactions SET data_compra = ?, id_compra = ?, renovar = ? WHERE id_user = ?', [data, compra, renovar, id]);
        connection.release();
        return;

    } catch (erro) {
        console.log('Houve um erro ao tentar alterar o usuário:', erro);
    };
};