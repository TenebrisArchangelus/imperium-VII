import { VerificaConexao } from './Nectum.js';

export const DeleteUser = async (Id) => {
    try {

        const connection = await VerificaConexao();
        await connection.promise().query('DELETE FROM users WHERE id = ?', [Id]);
        connection.release();
        return;

    } catch (erro) {
        console.log('Houve um erro ao realizar a consulta do usuário:', erro);
    };
};

export const DeleteComentario = async (Id) => {
    
    try {

        const connection = await VerificaConexao();
        await connection.promise().query('DELETE FROM comments WHERE id = ?', [Id]);
        connection.release();
        return;

    } catch (erro) {
        console.log('Houve um erro ao tentar publicar o comentário:', erro);
    }
};