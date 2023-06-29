import app from './app.js';
import { VerificaConexao } from './models/Nectum.js';
import { porta } from './config.js'

const port = porta || 8080;
VerificaConexao();
app.listen(port, () => {
    console.log(`Servidor operando na porta ${port}`);
});
