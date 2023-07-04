import { VerificaConexao } from './Nectum.js';

export const ConsultInUsers = async (coluna, campo) => {
    try {

      const connection = await VerificaConexao();
      const results = await connection.promise().query(`SELECT * FROM users WHERE ${coluna} = ?`, [campo]);
      const user = await results[0][0];
        if (results.length === 0) {
            res.status(404).json({ msg: 'O usuário não está cadastrado. Por favor, registre-se.' });
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

    } catch (erro) {
      console.log('Houve um erro ao realizar a consulta do usuário:', erro);
    };
  };



  
export const ConsultInComments = async (coluna, campo) => {
    try {

        const connection = await VerificaConexao();
        const results = await connection.promise().query(`SELECT * FROM comments WHERE ${coluna} = ?`, [campo]);
        const user = await (results[0]);
        if (results.length === 0) {
            res.status(404).json({ msg: 'Este usuário não possui comentários.' });
            connection.release();
            return;
        };
        connection.release();
        return user;

    } catch (erro) {
        console.log('Houve um erro ao realizar a consulta de comentários:', erro);
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


  
export const ConsultTransactions = async (Id) => {
    try {

        const connection = await VerificaConexao();
        const results = await connection.promise().query('SELECT * FROM transactions WHERE id_user = ?', [Id]);
        const user = await results[0][0];
        if (results.length === 0) {
            res.status(404).json({ msg: 'Data não encontrada.' });
            connection.release();
            return;
        };
        connection.release();
        return user;

    } catch (erro) {
        console.log('Houve um erro ao realizar a consulta da data:', erro);
    };
};