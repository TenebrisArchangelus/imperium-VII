import bcrypt from 'bcrypt';

export async function CompararSenhas(password, user) {

    try {

        const passwordMatch = await bcrypt.compare(password, user);
        if (!passwordMatch) {
            return res.status(401).json({ msg: 'Senha inválida' });
        };

        return;

    } catch (erro) {
        console.error('Houve um erro ao tentar criar o token:', erro);
        res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
    };
};


export async function SenhaHash(password) {

    try {

        const saltRounds = 12;
        const salt = await bcrypt.genSalt(saltRounds);
        const passwordHash = await bcrypt.hash(password, salt);
        return passwordHash;

    } catch (erro) {
        console.error('Houve um erro ao tentar criar o token:', erro);
        res.status(500).json({ error: 'Sentimos muito, mas houve um erro interno do servidor.' });
    };
};
