import util from 'util';
import pool from './Db.js'

const getConnectionAsync = await util.promisify(pool.getConnection).bind(pool);

export const VerificaConexao = async () => {
    try {

        const connection = await getConnectionAsync();
        console.log('Servidor conectado ao Banco de Dados.');
        return connection;

    } catch (erro) {
        const Mendum = { Erro: erro.code, Mensagem: erro.sqlMessage, Status: erro.sqlState, ErroID: erro.errno, Info: erro.sql};
        console.log('Houve um erro ao obter a conexão do pool:', Mendum);
    };
};