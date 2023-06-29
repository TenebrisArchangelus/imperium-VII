import util from 'util';
import pool from './Db.js'

const getConnectionAsync = await util.promisify(pool.getConnection).bind(pool);

export const VerificaConexao = async () => {
    try {

        const connection = await getConnectionAsync();
        console.log('Servidor conectado ao Banco de Dados.');
        return connection;

    } catch (erro) {
        console.log('Houve um erro ao obter a conexão do pool:', erro);
    };
};