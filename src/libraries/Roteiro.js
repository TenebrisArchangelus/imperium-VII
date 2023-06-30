export const Dialogus = async (roteiro) => {

    try {

        let Titulus = "";
        let Textus = "";
        let requerimento = "";

        switch (roteiro) {
            case 'registro':
                Titulus = "Registro na Imperium Studio Digital",
                Textus = "<h3><i>Seja bem-vindo(a) à Imperium Studio Digital!</i></h3> <p><i>É com grande prazer que lhe damos as boas-vindas à nossa plataforma de streaming de filmes, onde você encontrará uma ampla seleção de conteúdos cinematográficos e bibliográficos para aproveitar no conforto da sua casa.</i></p> <p><i>Nossa equipe está comprometida em fornecer a melhor experiência de entretenimento digital, um serviço de streaming de alta qualidade que possui uma interface intuitiva e recursos que garantem uma experiência única aos nossos usuários.</i></p> <p><i>A Imperium Studio Digital valoriza a sua opinião e estamos sempre abertos a sugestões e comentários. Sinta-se à vontade para compartilhar suas ideias conosco através de nosso suporte ao cliente, disponível em nosso site. Sua opinião é essencial para nos ajudar a melhorar continuamente e fornecer a você a melhor experiência possível.</i></p> <p><i>Agradecemos por escolher a Imperium Studio Digital como sua plataforma e estamos ansiosos para fazer parte dos seus momentos de diversão e etretenimento. É aprazível tê-lo como membro de nossa comunidade!</i></p> <p><i>Atenciosamente,</i></p> <p><i>Equipe Imperium Studio Digital.</i></p> "
                break;

            case 'assinaturaI':
                Titulus = "Assinatura do VIP Premium do Imperium Studio Digital",
                Textus = "<h3><i>Obrigado por assinar o VIP Premium da Imperium Studio Digital!</i></h3> <p><i>Parabéns e bem-vindo(a) ao VIP Premium da Imperium Studio Digital! Estamos extremamente empolgados em tê-lo(a) como nosso assinante VIP Premium e proporcionar a você uma experiência cinematográfica ainda mais extraordinária.</i></p> <p><i>Com o pacote VIP Premium, você terá acesso privilegiado aos nossos lançamentos originais da Imperium, produções únicas e envolventes que só podem ser encontradas em nossa plataforma. Além disso, como assinante VIP, você possui a flexibilidade de trocar de planos a qualquer momento, permitindo que você se adapte facilmente às suas necessidades e preferências em relação à sua assinatura.</i></p> <p><i>Na Imperium Studio Digital, a sua satisfação é de extrema importância para nós, e estamos sempre em busca de maneiras de melhorar. Valorizamos o seu feedback e estamos à disposição para ouvir suas sugestões, comentários ou dúvidas. Não hesite em entrar em contato com nossa equipe de suporte para obter assistência personalizada e responder a todas as suas perguntas.</i></p> <p><i>Mais uma vez, agradecemos por escolher a Imperium Studio Digital como seu destino para teu entretenimento. Estamos animados em acompanhá-lo(a) nessa jornada emocionante e garantir que você tenha acesso aos melhores filmes e livros!</i></p> <p><i>Atenciosamente,</i></p> <p><i>Equipe Imperium Studio Digital.</i></p> <p><i>"
                break;

            case 'assinaturaII':
                Titulus = "Assinatura do VIP VHS do Imperium Studio Digital",
                Textus = "<h3><i>Seja bem-vindo(a) ao VIP VHS da Imperium Studio Digital!</i></h3> <p><i>É com grande prazer que lhe damos as boas-vindas ao VIP VHS da Imperium Studio Digital! Estamos entusiasmados em tê-lo(a) como nosso assinante VIP VHS e permitir que você reviva a nostalgia e a magia da Imperium Studio.</i></p> <p><i>Com o pacote VIP VHS, você terá acesso a todos os benefícios do VIP Premium, lançamentos exclusivos e filmes para assistir off-line. Não importa se você está viajando, em um local remoto ou simplesmente deseja desfrutar de um filme sem interrupções, o VIP VHS permite que você leve o cinema para onde quer que vá.</i></p> <p><i>Valorizamos sua experiência como assinante VIP VHS e estamos sempre abertos a ouvir suas sugestões, comentários ou dúvidas. Nosso time de suporte está à disposição em nosso site para fornecer assistência personalizada e garantir que sua experiência seja a melhor possível!</i></p> <p><i>Agradecemos por escolher a Imperium Studio Digital como sua fonte de entretenimento. Estamos ansiosos para acompanhá-lo(a) nessa jornada emocionante e fornecer a você experiências únicas.</i></p> <p><i>Atenciosamente,</i></p> <p><i>Equipe Imperium Studio Digital.</i></p>"
                break;

            case 'renovou':
                Titulus = "Renovação de assinatura da Imperium Studio Digital",
                Textus = "<h3><i>Querido assinante VIP, </i></h3> <p><i>Estamos felizes em lhe informar que a renovação de tua assinatura VIP foi exitosa, e estamos felizes que tenhas optado em continuar a fazer parte de nosso grupo exclusivo! É um prazer que permita-nos continuar a te levar conteúdos de cada vez melhor qualidade. Tua opinião é extremamente importante para nós, portanto, caso tenhas alguma sugestão ou complicação com nossa plataforma, fique à vontade para entrar em contato com nosso suporte, o qual lhe responderá mais rápido de que tu possas dizer 'Imperium Studio Digital'! </i></p> <p><i>Atenciosamente,</i></p> <p><i>Equipe Imperium Studio Digital.</i></p>"
                break;

            case 'expirou':
                Titulus = "Expiração de assinatura da Imperium Studio Digital",
                Textus = "<h3><i>Estimado assinante, </i></h3> <p><i>É com profundo pesar que lhe informamos o cancelamento de tua assinatura VIP devido à ausência de pagamento. Apesar de lamentarmos tal fato, esperamos que possas assinar novamente nosso VIP quando desejar, e gostaríamos imensamente que tu nos informme como poderíamos melhorar segundo tua opinião, pois ela é extremamente importante. Sempre poderás entrar em contato conosco atarvés de nossos canais. </i></p> <p><i>Atenciosamente,</i></p> <p><i>Equipe Imperium Studio Digital.</i></p>"
                break;

            case 'RecSenha':
                Titulus = "Recuperação de senha da Imperium Studio Digital",
                Textus = "<h1>Olá</h1> <p>Bem-vindo</p>"
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