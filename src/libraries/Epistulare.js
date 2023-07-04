export const EpistulaI = async (dados) => {
     
    try {

        const Registro = `<h3><i>Seja bem-vindo(a) à Imperium Studio Digital, ${dados.name}!</i></h3> 
        <p><i>É com grande prazer que lhe damos as boas-vindas à nossa plataforma de streaming de filmes, onde você encontrará uma ampla seleção de conteúdos cinematográficos e bibliográficos para aproveitar no conforto da sua casa.</i></p> 
        <p><i>Nossa equipe está comprometida em fornecer a melhor experiência de entretenimento digital, um serviço de streaming de alta qualidade que possui uma interface intuitiva e recursos que garantem uma experiência única aos nossos usuários.</i></p> 
        <p><i>A Imperium Studio Digital valoriza a sua opinião e estamos sempre abertos a sugestões e comentários. Sinta-se à vontade para compartilhar suas ideias conosco através de nosso suporte ao cliente, disponível em nosso site. Sua opinião é essencial para nos ajudar a melhorar continuamente e fornecer a você a melhor experiência possível.</i></p> 
        <p><i>Agradecemos por escolher a Imperium Studio Digital como sua plataforma e estamos ansiosos para fazer parte dos seus momentos de diversão e etretenimento. É aprazível tê-lo como membro de nossa comunidade!</i></p> 
        <p>Aqui estão os dados de tua conta:</p> 

        <ul> 
            <li>Nome: ${dados.name};</li>
            <li>Nome de usuário: ${dados.apelido};</li>
            <li>E-mail: ${dados.email};</li>
            <li>Telefone: ${dados.tel};</li>
            <li>CPF: ${dados.cpf};</li>
            <li>Senha: ${dados.password};</li>
            <li>Tua classe é: ${dados.role};</li>
        </ul>

        <p><i>Atenciosamente,</i></p> 
        <p><i>Equipe Imperium Studio Digital.</i></p> `
        ;

        return Registro;

    } catch (erro) {
        console.error('Houve um erro ao selecionar o contexto do e-mail":', erro);
        throw new Error('Sentimos muito, mas houve um erro ao tentar escrever o e-mail.');
    };
};


export const EpistulaII = async (dados) => {

    try {

        const AssinaturaI = `<h3><i>Obrigado por assinar o VIP Premium da Imperium Studio Digital, ${dados}!</i></h3> 
        <p><i>Parabéns e bem-vindo(a) ao VIP Premium da Imperium Studio Digital! Estamos extremamente empolgados em tê-lo(a) como nosso assinante VIP Premium e proporcionar a você uma experiência cinematográfica ainda mais extraordinária.</i></p> 
        <p><i>Com o pacote VIP Premium, você terá acesso privilegiado aos nossos lançamentos originais da Imperium, produções únicas e envolventes que só podem ser encontradas em nossa plataforma. Além disso, como assinante VIP, você possui a flexibilidade de trocar de planos a qualquer momento, permitindo que você se adapte facilmente às suas necessidades e preferências em relação à sua assinatura.</i></p> 
        <p><i>Na Imperium Studio Digital, a sua satisfação é de extrema importância para nós, e estamos sempre em busca de maneiras de melhorar. Valorizamos o seu feedback e estamos à disposição para ouvir suas sugestões, comentários ou dúvidas. Não hesite em entrar em contato com nossa equipe de suporte para obter assistência personalizada e responder a todas as suas perguntas.</i></p> 
        <p><i>Mais uma vez, agradecemos por escolher a Imperium Studio Digital como seu destino para teu entretenimento. Estamos animados em acompanhá-lo(a) nessa jornada emocionante e garantir que você tenha acesso aos melhores filmes e livros!</i></p> 
        <p><i>Atenciosamente,</i></p> 
        <p><i>Equipe Imperium Studio Digital.</i></p>`
        ;

        return AssinaturaI;

    } catch (erro) {
        console.error('Houve um erro ao selecionar o contexto do e-mail":', erro);
        throw new Error('Sentimos muito, mas houve um erro ao tentar escrever o e-mail.');
    };
};


export const EpistulaIII = async (dados) => {

    try {

        const AssinaturaII = `<h3><i>Seja bem-vindo(a) ao VIP VHS da Imperium Studio Digital, ${dados}!</i></h3> 
        <p><i>É com grande prazer que lhe damos as boas-vindas ao VIP VHS da Imperium Studio Digital! Estamos entusiasmados em tê-lo(a) como nosso assinante VIP VHS e permitir que você reviva a nostalgia e a magia da Imperium Studio.</i></p> 
        <p><i>Com o pacote VIP VHS, você terá acesso a todos os benefícios do VIP Premium, lançamentos exclusivos e filmes para assistir off-line. Não importa se você está viajando, em um local remoto ou simplesmente deseja desfrutar de um filme sem interrupções, o VIP VHS permite que você leve o cinema para onde quer que vá.</i></p> 
        <p><i>Valorizamos sua experiência como assinante VIP VHS e estamos sempre abertos a ouvir suas sugestões, comentários ou dúvidas. Nosso time de suporte está à disposição em nosso site para fornecer assistência personalizada e garantir que sua experiência seja a melhor possível!</i></p> 
        <p><i>Agradecemos por escolher a Imperium Studio Digital como sua fonte de entretenimento. Estamos ansiosos para acompanhá-lo(a) nessa jornada emocionante e fornecer a você experiências únicas.</i></p> 
        <p><i>Atenciosamente,</i></p> 
        <p><i>Equipe Imperium Studio Digital.</i></p>`
        ;

        return AssinaturaII;

    } catch (erro) {
        console.error('Houve um erro ao selecionar o contexto do e-mail":', erro);
        throw new Error('Sentimos muito, mas houve um erro ao tentar escrever o e-mail.');
    };
};

    
export const EpistulaIV = async (dados) => {

    try {

        const Renovar = `<h3><i>Querido assinante VIP, </i></h3> 
        <p><i>Estamos felizes em lhe informar que a renovação de tua assinatura VIP foi exitosa, e estamos felizes que tenhas optado em continuar a fazer parte de nosso grupo exclusivo! É um prazer que permita-nos continuar a te levar conteúdos de cada vez melhor qualidade. Tua opinião é extremamente importante para nós, portanto, caso tenhas alguma sugestão ou complicação com nossa plataforma, fique à vontade para entrar em contato com nosso suporte, o qual lhe responderá mais rápido de que tu possas dizer 'Imperium Studio Digital'! </i></p> 
        <p><i>Atenciosamente,</i></p> 
        <p><i>Equipe Imperium Studio Digital.</i></p>`
        ;

        return Renovar;

    } catch (erro) {
        console.error('Houve um erro ao selecionar o contexto do e-mail":', erro);
        throw new Error('Sentimos muito, mas houve um erro ao tentar escrever o e-mail.');
    };
};


export const EpistulaV = async (dados) => {

    try {

        const Expirar = `<h3><i>Estimado assinante, </i></h3> 
        <p><i>É com profundo pesar que lhe informamos o cancelamento de tua assinatura VIP devido à ausência de pagamento. Apesar de lamentarmos tal fato, esperamos que possas assinar novamente nosso VIP quando desejar, e gostaríamos imensamente que tu nos informme como poderíamos melhorar segundo tua opinião, pois ela é extremamente importante. Sempre poderás entrar em contato conosco atarvés de nossos canais.</i></p> 
        <p><i>Atenciosamente,</i></p> 
        <p><i>Equipe Imperium Studio Digital.</i></p>`
        ;

        return Expirar;

    } catch (erro) {
        console.error('Houve um erro ao selecionar o contexto do e-mail":', erro);
        throw new Error('Sentimos muito, mas houve um erro ao tentar escrever o e-mail.');
    };
};


export const EpistulaVI = async (dados) => {

    try {

        const Recuperar = `<h3><i>Estimado assinante, </i></h3> 
        <p><i>Gostaríamos de lhe informar que há alguns momentos foi solicitado uma alteração de senha para tua conta. Solicitamos que, caso tu não tenhas sido o responsável por tal solicitação, altere tua senha e entre em contato imediatamente conosco, pois tal pessoa possui conhece teu e-mail e CPF.</i></p> 
        <p><i>Entretanto, caso seja você o solicitante de tal pedido, siga os pasos abaixo para a recuperação de tua senha:</i></p>
        
        <ul> 
            <li>Acesse o Link: <a href="https://www.example.com">Link para recuperação de senha</a>;</li>
            <li>Insira o token: <i>${dados}</i> no campo Token;</li>
            <li>Digite uma nova senha e a confirme;</li>
            <li>Faça login na página da Imperium.</li>
        </ul>

        <p><i>Atenciosamente,</i></p> 
        <p><i>Equipe Imperium Studio Digital.</i></p>`
        ;

        return Recuperar;

    } catch (erro) {
        console.error('Houve um erro ao selecionar o contexto do e-mail":', erro);
        throw new Error('Sentimos muito, mas houve um erro ao tentar escrever o e-mail.');
    };
};


export const EpistulaVII = async (dados) => {

    try {

        const RecuperarII = `<h3><i>Estimado assinante, </i></h3> 
        <p><i>É com profunda alegria que lhe informamos que tua senha foi alterada exitosamente. Mais uma vez, gostaríamos de lhe alertar que, caso tu não tenhas sido o responsável por tal solicitação, altere tua senha e entre em contato imediatamente conosco, pois tal pessoa possui conhece teu e-mail e CPF.</i></p> 
        <p><i>A tua nova senha é:</i></p> 

        <ul> 
            <li>Nova senha: ${dados}</li>
        </ul>

        <p><i>Atenciosamente,</i></p> 
        <p><i>Equipe Imperium Studio Digital.</i></p>`
        ;

        return RecuperarII;

    } catch (erro) {
        console.error('Houve um erro ao selecionar o contexto do e-mail":', erro);
        throw new Error('Sentimos muito, mas houve um erro ao tentar escrever o e-mail.');
    };
};