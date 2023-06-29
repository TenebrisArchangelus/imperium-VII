import { validus, Legitimus, Probatus } from '../Validations/Validitas.js'

export async function ValidationMiddlewareI(req, res, next) {
    const { name, email, apelido, tel, cpf, password, confirmpassword } = req.body;

    try {

        const resultado = await validus({ name, email, apelido, tel, cpf, password, confirmpassword });
        if (!resultado.validez) {
            return res.status(422).json({ msg: resultado.msg });
        } else {
            next();
        };

    } catch (erro) {
        console.log("Houve um erro ao validar os dados.", erro)
    };
};


export async function ValidationMiddlewareII(req, res, next) {
    const { name, email, apelido, tel, cpf, password, confirmpassword } = req.body;

    try {

        const resultado = await Legitimus({ name, email, apelido, tel, cpf, password, confirmpassword });
        if (!resultado.validez) {
            return res.status(422).json({ msg: resultado.msg });
        } else {
            next();
        };

    } catch (erro) {
        console.log("Houve um erro ao validar os dados.", erro)
    };
};


export async function ValidationMiddlewareIII(req, res, next) {

    try {
        const resultado = await Probatus(req.body);
        if (!resultado.validez) {
            return res.status(422).json({ msg: resultado.msg });
        } else {
            next();
        };

    } catch (erro) {
        console.log("Houve um erro ao validar os campos.", erro)
    };
};