export function checkPay(req, res, next) {
    const PayStatus = req.cookies.PayStatus;

    if (!PayStatus) {
        return res.status(401).json({ msg: "Não é possível identificar o Id da compra. Acesso negado." });
    };

    try {

        req.status = PayStatus;
        next();
        
    } catch (erro) {
        console.log(erro);
        res.status(403).json({ msg: "Id da compra inválido." });
    };
};