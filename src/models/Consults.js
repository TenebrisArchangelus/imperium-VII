import { VerificaConexao } from './Nectum.js';

export const ConsultById = async (Id) => {
    try {

        const connection = await VerificaConexao();
        const results = await connection.promise().query('SELECT * FROM users WHERE id = ?', [Id]);
        const user = await results[0][0];
        if (results.length === 0) {
            res.status(404).json({ msg: 'Usuário não encontrado.' });
            connection.release();
            return;
        };
        connection.release();
        return user;

    } catch (erro) {
        console.log('Houve um erro ao realizar a consulta do usuário:', erro);
    };
};


export const ConsultByIdII = async (Id) => {
    try {

        const connection = await VerificaConexao();
        const results = await connection.promise().query('SELECT * FROM comments WHERE users_id = ?', [Id]);
        const user = await (results[0]);
        if (results.length === 0) {
            res.status(404).json({ msg: 'Este usuário não possui comentários.' });
            connection.release();
            return;
        };
        connection.release();
        return user;

    } catch (erro) {
        console.log('Houve um erro ao realizar a consulta do usuário:', erro);
    };
};


export const ConsultByIdIII = async (Id) => {
    try {

        const connection = await VerificaConexao();
        const results = await connection.promise().query('SELECT * FROM comments WHERE id = ?', [Id]);
        const user = await (results[0]);
        if (results.length === 0) {
            res.status(404).json({ msg: 'Este usuário não possui comentários.' });
            connection.release();
            return;
        };
        connection.release();
        return user;

    } catch (erro) {
        console.log('Houve um erro ao realizar a consulta do usuário:', erro);
    };
};


export const OrderById = async () => {
    try {

        const connection = await VerificaConexao();
        const [rows] = await connection.promise().query('SELECT * FROM comments ORDER BY id DESC LIMIT 1');
        const lastId = rows[0].id + 1;
        connection.release();
        return lastId;

    } catch (erro) {
        console.log('Houve um erro ao realizar a consulta do usuário:', erro);
    };
};

export const ConsultByApelido = async (Apelido) => {
    try {

        const connection = await VerificaConexao();
        const results = await connection.promise().query('SELECT * FROM users WHERE apelido = ?', [Apelido]);
        const user = results[0][0];
        if (results.length === 0) {
            res.status(404).json({ msg: 'O usuário não está cadastrado, por favor, registre-se.' });
            connection.release();
            return;
        };
        connection.release();
        return user;

    } catch (erro) {
        console.log('Houve um erro ao realizar a consulta do usuário:', erro);
    };
};


export const ConsultInValiditas = async (coluna, campo) => {
    try {

      const connection = await VerificaConexao();
      const user = await connection.promise().query(`SELECT * FROM users WHERE ${coluna} = ?`, [campo]);
      connection.release();
      return user;

    } catch (error) {
      console.log('Houve um erro ao realizar a consulta do usuário:', error);
    };
  };