import { EpistulaI, EpistulaII, EpistulaIII, EpistulaIV, EpistulaV, EpistulaVI, EpistulaVII } from "./Epistulare.js";


export const Dialogus = async (roteiro, dados) => {

    try {

        let Titulus = "";
        let Textus = "";
        let requerimento = "";

        switch (roteiro) {
            case 'registro':
                Titulus = "Registro na Imperium Studio Digital",
                    Textus = await EpistulaI(dados);
                break;

            case 'assinaturaI':
                Titulus = "Assinatura do VIP Premium do Imperium Studio Digital",
                    Textus = await EpistulaII(dados);
                break;

            case 'assinaturaII':
                Titulus = "Assinatura do VIP VHS do Imperium Studio Digital",
                    Textus = await EpistulaIII(dados);
                break;

            case 'renovou':
                Titulus = "Renovação de assinatura da Imperium Studio Digital",
                    Textus = await EpistulaIV(dados);
                break;

            case 'expirou':
                Titulus = "Expiração de assinatura da Imperium Studio Digital",
                    Textus = await EpistulaV(dados);
                break;

            case 'RecSenha':
                Titulus = "Tentativa de alteração de senha da Imperium Studio Digital",
                    Textus = await EpistulaVI(dados);
                break;

            case 'RecClavis':
                Titulus = "Recuperação exitosa de senha da Imperium Studio Digital",
                    Textus = await EpistulaVII(dados);
                break;

            default:
                throw new Error("Houve um erro ao enviar o e-mail.");
        };

        requerimento = { Titulus, Textus }
        return requerimento;

    } catch (erro) {
        console.error('Houve um erro ao selecionar o contexto":', erro);
        throw new Error('Sentimos muito, mas houve um erro ao tentar enviar o e-mail.');
    };
};