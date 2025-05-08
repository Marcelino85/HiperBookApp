const versiculos = [
  {
    texto: "O Senhor é o meu pastor; nada me faltará.",
    referencia: "Salmos 23:1",
    comentario: "Neste versículo, somos lembrados de que Deus é nosso cuidador fiel. Assim como um pastor guia, protege e alimenta suas ovelhas, o Senhor cuida de cada detalhe da nossa vida. Mesmo em tempos de escassez ou incertezas, podemos confiar que Ele proverá o necessário. A presença de Deus supre nossas carências mais profundas. Quando estamos com Ele, realmente nada nos falta. Confie nesse cuidado diário, pois Ele é fiel.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Entrega o teu caminho ao Senhor; confia nele, e ele o fará.",
    referencia: "Salmos 37:5",
    comentario: "Entregar nossos caminhos a Deus é um ato de fé e rendição. Muitas vezes, queremos controlar tudo, mas a paz verdadeira vem ao colocarmos nossos planos nas mãos dEle. Ao confiar em Deus, abrimos espaço para que Ele aja com sabedoria e poder. Ele conhece o fim desde o início e sabe o que é melhor para nós. Entregar e confiar são atitudes que revelam maturidade espiritual. Confie: Ele fará o impossível acontecer.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor...",
    referencia: "Jeremias 29:11",
    comentario: "Mesmo quando tudo parece incerto, Deus já tem um plano preparado para nossa vida. Ele nos conhece profundamente e deseja nos conduzir a um futuro cheio de esperança. Seus planos não são de destruição, mas de paz e propósito. Às vezes, o caminho pode parecer difícil, mas confie: Ele está trabalhando nos bastidores. A nossa parte é crer, esperar e caminhar com fé. Seus planos são perfeitos.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Posso todas as coisas naquele que me fortalece.",
    referencia: "Filipenses 4:13",
    comentario: "Esse versículo nos lembra que nossa força vem de Deus. Em momentos de fraqueza, dificuldade ou desafio, podemos recorrer à presença dEle para continuar firmes. A força que recebemos de Cristo é sobrenatural e suficiente. Ela nos capacita a enfrentar o impossível. Não se trata de autossuficiência, mas de uma dependência profunda em Jesus. Com Ele, somos mais do que capazes.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.",
    referencia: "1 Tessalonicenses 5:18",
    comentario: "Ser grato em todas as situações não significa ignorar a dor ou fingir alegria. Significa reconhecer que Deus está presente, mesmo nas adversidades. A gratidão transforma nossa perspectiva e fortalece a fé. Quando damos graças, abrimos espaço para o agir de Deus. Ele usa até mesmo as dificuldades para moldar nosso caráter. A vontade de Deus é que sejamos gratos, pois isso nos aproxima do Seu coração.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus.",
    referencia: "Isaías 41:10",
    comentario: "Deus nos encoraja a não temer, pois Sua presença constante nos fortalece. Em momentos de incerteza, lembrar que Ele está conosco traz paz ao coração. Ele é nosso Deus, nosso refúgio e fortaleza. Quando confiamos nEle, encontramos coragem para enfrentar qualquer desafio. Sua promessa é clara: Ele nos sustenta e nos ajuda. Portanto, não tema, pois Ele está ao seu lado.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Bem-aventurados os que têm fome e sede de justiça, porque serão fartos.",
    referencia: "Mateus 5:6",
    comentario: "Jesus nos ensina que aqueles que anseiam por justiça serão satisfeitos. Ter fome e sede de justiça é desejar ardentemente viver de acordo com os princípios divinos. Deus promete preencher esse desejo com Sua justiça perfeita. Buscar a justiça é buscar a vontade de Deus em nossas vidas. Quando priorizamos o Reino de Deus, Ele nos recompensa com plenitude espiritual. Seja persistente em sua busca por justiça.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho.",
    referencia: "Salmos 119:105",
    comentario: "A Palavra de Deus é nossa guia em meio à escuridão deste mundo. Ela ilumina nossos passos e nos mostra o caminho certo a seguir. Sem ela, corremos o risco de nos perder em meio às incertezas da vida. Ao meditar nas Escrituras, encontramos direção, sabedoria e conforto. Permita que a Bíblia seja sua companheira diária, iluminando cada decisão e passo. Com ela, nunca estaremos sozinhos.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto.",
    referencia: "Isaías 55:6",
    comentario: "Deus nos convida a buscá-Lo enquanto há oportunidade. Sua presença está disponível, mas não devemos adiar esse encontro. Buscar ao Senhor é reconhecer nossa necessidade dEle e desejar comunhão. Quando O invocamos de coração sincero, Ele se revela a nós. Não espere por um momento ideal; o tempo de se aproximar de Deus é agora. Ele está perto e pronto para nos ouvir.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "O choro pode durar uma noite, mas a alegria vem pela manhã.",
    referencia: "Salmos 30:5",
    comentario: "Este versículo nos lembra que a dor é temporária, mas a alegria de Deus é eterna. As noites de lágrimas podem parecer intermináveis, mas Deus promete um novo amanhecer. Ele transforma nosso pranto em dança e nossa tristeza em júbilo. Confie que, mesmo nas dificuldades, Deus está preparando um tempo de alegria. Mantenha a esperança viva, pois a manhã de Deus sempre chega.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Jesus Cristo é o mesmo, ontem, hoje e eternamente.",
    referencia: "Hebreus 13:8",
    comentario: "Em um mundo em constante mudança, Jesus permanece imutável. Sua fidelidade, amor e poder são os mesmos através dos séculos. Podemos confiar nEle, pois Sua natureza não muda. O que Ele fez no passado, continua fazendo hoje e fará no futuro. Essa constância nos dá segurança e esperança. Ancore sua fé na imutabilidade de Cristo.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "O Senhor está perto de todos os que o invocam, de todos os que o invocam com sinceridade.",
    referencia: "Salmos 145:18",
    comentario: "Deus não está distante; Ele se aproxima daqueles que O buscam de coração sincero. Quando clamamos a Ele com verdade, Sua presença se faz real em nossas vidas. Ele ouve nossas orações e responde com amor. A sinceridade em nossa busca atrai o coração de Deus. Não hesite em se aproximar dEle; Ele está sempre pronto a nos acolher.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração.",
    referencia: "Romanos 12:12",
    comentario: "Este versículo nos instrui a manter a alegria, mesmo em meio às dificuldades. A esperança em Deus nos sustenta, a paciência nos fortalece e a oração nos conecta ao Pai. Em tempos de tribulação, essas atitudes nos mantêm firmes. Perseverar na oração é confiar que Deus está no controle. Mantenha-se alegre, paciente e constante em oração.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "O Senhor lutará por vocês; tão somente acalmem-se.",
    referencia: "Êxodo 14:14",
    comentario: "Quando enfrentamos batalhas, Deus nos lembra que Ele luta por nós. Nossa parte é confiar e manter a calma. Em vez de agir impulsivamente, devemos descansar na certeza de que Ele está no controle. Sua intervenção é poderosa e eficaz. Acalme seu coração e permita que Deus opere em sua vida. Ele é nosso guerreiro fiel.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes que não sabes.",
    referencia: "Jeremias 33:3",
    comentario: "Deus nos convida a clamar a Ele, prometendo respostas e revelações profundas. Quando buscamos Sua presença com fervor, Ele nos mostra verdades ocultas. Há mistérios que só são revelados aos que O buscam de todo coração. Não hesite em clamar; Deus deseja se comunicar conosco. Ele tem grandes coisas a nos mostrar.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Se Deus é por nós, quem será contra nós?",
    referencia: "Romanos 8:31",
    comentario: "Este versículo nos lembra do poder e proteção de Deus em nossas vidas. Quando Ele está ao nosso lado, nenhuma adversidade pode nos derrotar. Sua presença nos dá coragem para enfrentar qualquer desafio. Com Deus, somos mais que vencedores. Confie nEle e avance com fé, pois nada pode nos separar do Seu amor.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.",
    referencia: "Provérbios 3:5",
    comentario: "Deus nos chama a confiar plenamente nEle, mesmo quando não compreendemos os caminhos. Nosso entendimento é limitado, mas Ele vê o todo. Ao depositarmos nossa confiança no Senhor, Ele nos guia com sabedoria. Não dependa apenas da lógica humana; permita que Deus dirija seus passos. Sua direção é sempre perfeita.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Perto está o Senhor dos que têm o coração quebrantado, e salva os contritos de espírito.",
    referencia: "Salmos 34:18",
    comentario: "Deus se aproxima dos que estão feridos e arrependidos. Um coração quebrantado toca o coração dEle de forma especial. Quando nos sentimos fracos, tristes ou arrependidos, Ele se faz presente com consolo e salvação. Ele não rejeita quem o busca com humildade. O Senhor é abrigo seguro para os que choram em silêncio. Confie: Ele está mais perto do que você imagina.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Ensina-nos a contar os nossos dias para que o nosso coração alcance sabedoria.",
    referencia: "Salmos 90:12",
    comentario: "Este versículo nos convida à reflexão sobre o tempo. A vida é passageira, e precisamos vivê-la com sabedoria e propósito. Contar os dias é reconhecer a brevidade da existência e buscar viver com mais profundidade. A sabedoria nasce quando valorizamos cada momento e buscamos a vontade de Deus. Que o nosso coração esteja atento ao que realmente importa. Viva com propósito e temor ao Senhor.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Mas buscai primeiro o Reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.",
    referencia: "Mateus 6:33",
    comentario: "Jesus nos ensina a colocar Deus em primeiro lugar. Quando buscamos o Reino, confiando na Sua provisão, tudo o mais se encaixa. As preocupações do dia a dia não devem ofuscar nossa prioridade: Deus. Ao centrarmos nossa vida nEle, experimentamos paz e provisão. Ele cuida de nós quando O colocamos no centro. Priorize o que é eterno, e o restante será acrescentado.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Guia-me pela vereda da justiça por amor do seu nome.",
    referencia: "Salmos 23:3b",
    comentario: "Deus não apenas nos restaura, mas também nos conduz por caminhos corretos. Ele nos orienta não por merecimento, mas por amor ao Seu nome. Ao confiar em Sua direção, somos protegidos de escolhas erradas e conduzidos a um propósito maior. Permita que Ele guie seus passos com fidelidade.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Aquietai-vos, e sabei que eu sou Deus.",
    referencia: "Salmos 46:10",
    comentario: "Em meio à correria e ansiedade, Deus nos convida a silenciar a alma e reconhecer Sua soberania. Muitas vezes, o agir divino se manifesta no silêncio, na pausa. Quando nos aquietamos, ouvimos melhor a voz do Senhor. Ele está no controle, mesmo quando tudo parece fora do lugar.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "O coração alegre aformoseia o rosto, mas pela dor do coração o espírito se abate.",
    referencia: "Provérbios 15:13",
    comentario: "A alegria verdadeira vem de dentro e se reflete até mesmo em nossa aparência. Quando cultivamos gratidão e esperança, nosso semblante muda. Mas a tristeza profunda pode nos enfraquecer. Por isso, busque em Deus a alegria que transforma e fortalece. Ela vem do Espírito e renova o ser.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus.",
    referencia: "Romanos 8:28",
    comentario: "Mesmo as situações difíceis estão sob o controle de Deus. Ele usa cada detalhe — dor, perda ou vitória — para cumprir Seu propósito em nossas vidas. Aos que O amam, nada é em vão. Confie que tudo está cooperando para um bem maior, mesmo que agora você ainda não compreenda.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.",
    referencia: "1 Pedro 5:7",
    comentario: "Deus se importa com cada detalhe do nosso coração. Em vez de carregar sozinhos o peso da preocupação, somos convidados a lançar tudo sobre Ele. Seu cuidado é constante, amoroso e pessoal. Confie Suas aflições ao Senhor e permita que Ele alivie seu fardo.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "A resposta branda desvia o furor, mas a palavra dura suscita a ira.",
    referencia: "Provérbios 15:1",
    comentario: "A forma como respondemos em momentos de conflito revela nossa maturidade. Uma palavra mansa tem o poder de acalmar tempestades, enquanto palavras ásperas podem piorar a situação. Peça sabedoria a Deus para controlar sua fala e semear paz, mesmo em tempos difíceis.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Ensina-nos a contar os nossos dias, de tal maneira que alcancemos corações sábios.",
    referencia: "Salmos 90:12",
    comentario: "A vida é breve, e o tempo é precioso. Este versículo nos chama à reflexão e sabedoria. Contar os dias é viver com propósito, valorizando o presente e buscando o eterno. Um coração sábio é aquele que vive de forma intencional, com os olhos em Deus e na eternidade.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Não se turbe o vosso coração; credes em Deus, crede também em mim.",
    referencia: "João 14:1",
    comentario: "Jesus nos encoraja a manter o coração em paz, mesmo diante da incerteza. Crer nEle é confiar que há um propósito, um caminho e um cuidado divino em cada situação. Quando o medo vier, lembre-se: a fé em Cristo é o antídoto contra a perturbação da alma.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "O que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.",
    referencia: "Salmos 91:1",
    comentario: "Habitar no esconderijo do Altíssimo é viver em comunhão com Deus, sob Sua proteção. Ele é nosso refúgio seguro. Quando nos colocamos sob Sua sombra, encontramos descanso, mesmo em meio ao caos. Viva essa intimidade com o Senhor e experimente Sua paz sobrenatural.",
    autor: "Por: Marcelino Albuquerque"
  },
  {
    texto: "Bem-aventurado o homem que põe no Senhor a sua confiança.",
    referencia: "Salmos 40:4",
    comentario: "Feliz é aquele que escolhe confiar em Deus em vez de depender apenas de si mesmo ou de outros. Essa confiança não decepciona, pois o Senhor é fiel. Ele honra aqueles que colocam nEle sua esperança. Que sua confiança esteja firmemente enraizada no Senhor.",
    autor: "Por: Marcelino Albuquerque"
  }
];


 
