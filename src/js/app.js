function startGame() {
    const quizContainer = document.getElementById('quiz-container');
    const quizContainerWrapper = document.getElementById('quiz-wrapper');
    const resultContainer = document.getElementById('result-container');
    const quizContainerQuestions = document.getElementById('quiz-container-questions');
    const headerQuizContainer = document.getElementById('header-quiz');

    // Resetando variáveis para um novo jogo
    currentQuestion = 0;
    score = 0;
    questionTimes = [];
    totalTimeSpent = 0; // Reseta o tempo total gasto para o novo jogo
    
    // Modificação: selecionar todas as perguntas, sem limite de 5
    selectedQuestions = shuffleQuestions(questions); // Agora inclui todas as perguntas

    resultContainer.style.display = 'none';
    quizContainerWrapper.style.display = 'flex';
    quizContainerQuestions.style.display = 'flex';
    quizContainer.style.display = 'flex';
    headerQuizContainer.style.display = 'flex'; // Mostrar cabeçalho novamente se estiver escondido
    document.getElementById('next-button').style.display = 'none'; // Esconder botão de próxima pergunta

    createProgressPlanets(); // Cria os planetas de progresso
    loadQuestion();
}

  function createProgressPlanets() {
        const progressContainer = document.getElementById('progress-container');
        progressContainer.innerHTML = ''; // Limpa o contêiner de progresso

        selectedQuestions.forEach((_, index) => {
            const planet = document.createElement('div');
            planet.classList.add('planet');
            planet.setAttribute('id', `planet-${index}`); // Adiciona um ID único para cada planeta
            progressContainer.appendChild(planet);
        });
    }

    function updateProgressPlanet(index, isCorrect) {
        const planet = document.getElementById(`planet-${index}`);
        if (isCorrect) {
            planet.style.backgroundColor = '#4caf50'; // Verde para resposta correta
        } else {
            planet.style.backgroundColor = '#e74c3c'; // Vermelho para resposta incorreta
        }
    }
  
  function animateOptions() {
    const options = document.querySelectorAll('.option');
  
    options.forEach((option, index) => {
        setTimeout(() => {
            option.style.opacity = '1';
        }, index * 100);
    });
  }

  const questions = [
    {
        question: "De acordo com Laudon e Laudon (2014), o hardware é visto como a tecnologia para processamento computacional, armazenamento, entrada e saída de dados. Esta definição complementa as características do hardware como elemento do sistema de informação que agrega os dispositivos físicos computacionais. Assinale a alternativa a seguir que apresenta exemplos de dispositivos de hardware exclusivos de saída de dados:",
        options: [
            "Monitor de vídeo touchscreen, impressora, alto-falante, projetor de imagens e modem.",
            "Disco rígido, memória RAM, memória ROM e memória SSD.",
            "Impressora matricial, projetor de imagens, alto-falantes e monitor de vídeo.", // Resposta correta
            "Teclado, mouse, microfone, câmera de fotografia, câmera de vídeo, touchpad, touchscreen (monitor com tela sensível ao toque), sensores e modem.",
            "Processador, modem e memória ROM."
        ],
        correctAnswer: 2,
        explanation: "A opção correta inclui dispositivos que são exclusivamente para saída de dados, como impressora matricial e projetor de imagens."
    },
    {
        question: "Com relação à aquisição e utilização de sistemas de ERP por empresas, são feitas as seguintes afirmações:\n\n" +
            "I. Um sistema ERP implantado no modelo on-premise refere-se à aquisição de um sistema que irá ser instalado, implantado e customizado dentro da empresa, em seus servidores e estrutura computacional privada.\n" +
            "II. O modelo on-premise de ERP é recomendado para empresas que necessitam de adaptação e customização do software para ajustá-lo às suas necessidades e operações, o que representa um maior tempo e custo de implantação.\n" +
            "III. Sistemas ERP utilizados no modelo on-cloud são executados pelas empresas através de acesso a servidores externos que oferecem o software no modelo de computação em nuvem.\n" +
            "IV. Um sistema ERP on-cloud oferece menor possibilidade de escalabilidade do sistema e maiores gastos com infraestrutura e recursos e hardware comparado com sistemas on-premise.\n\n" +
            "É correto o que se afirma em:",
        options: [
            "I, II e III, apenas.", // Resposta correta
            "III e IV, apenas.",
            "I e II, apenas.",
            "I, II, III e IV.",
            "II e IV, apenas."
        ],
        correctAnswer: 0,
        explanation: "A opção correta inclui as afirmações I, II e III, que descrevem corretamente as características do modelo on-premise e on-cloud de ERP."
    },
    {
        question: "Pode-se observar que a fase de desenvolvimento de Sistemas de Informação iniciou-se há mais de 40 anos, período este que possibilitou o desenvolvimento de sistemas complexos que suportam a tomada de decisão gerencial e de inteligência de negócios. Atualmente vivenciamos uma nova fase com desenvolvimento de sistemas de análise de dados suportada por sistemas de inteligência artificial e reestruturada por algoritmos mais poderosos.\n\n" +
            "Analise as assertivas a seguir:\n" +
            "I. Atualmente as empresas de tecnologia da informação, como Google, Amazon, Apple, Facebook e Microsoft lideram o ranking mundial de valor de marcas e empresas.\n" +
            "II. O poder da informação está sobressaindo-se ao poder de grandes ativos industriais e levando o valor das empresas de tecnologia a um posicionamento importante no mundo.\n" +
            "III. Qualquer empresa que mantenha intenções de ser sustentável nesta era de competitividade deverá ter foco na utilização apenas em sistemas de informação, sem a necessidade de uso de sistemas de análise de dados.\n" +
            "IV. Há uma velocidade muito grande na criação de dados e de novas tecnologias, formando um imenso cenário empresarial suportado por sistemas de análise de dados para tomada de decisões.\n\n" +
            "Assinale a alternativa que apresenta a sequência correta.",
        options: [
            "F – F – V – F.",
            "V – V – V – V.", // Resposta correta
            "V – V – F – V.",
            "V – F – F – F.",
            "F – V – V – V."
        ],
        correctAnswer: 1,
        explanation: "Todas as assertivas são verdadeiras de acordo com a situação atual do mercado de empresas de tecnologia."
    },
    {
        question: "Conforme Laudon e Laudon (2014), os Sistemas de Informação podem ser vistos sob a perspectiva de grupos de usuários, instalados e distribuídos em uma organização nos níveis organizacionais. Estes sistemas podem ser classificados de acordo com sua operação dentro dos níveis organizacionais: operacional, tático e estratégico.\n\n" +
            "Com relação aos tipos de Sistemas de Informação são feitas as seguintes afirmações:\n" +
            "I. Um Sistema de Processamento de Transações (SPT) tem como objetivo monitorar as atividades básicas de uma organização em suporte às atividades operacionais da empresa.\n" +
            "II. Sistemas de Informações Gerenciais (SIG) são sistemas que acompanham o controle operacional e processos, as atividades administrativas e a tomada de decisões gerenciais.\n" +
            "III. Sistemas de Apoio à Decisão (SAD) são Sistemas de Informação para apoio aos níveis de alta gerência para análise e tomada de decisões estratégicas e tendências de longo prazo. Abordam questões rotineiras para análise através de gráficos e dados consolidados.\n" +
            "IV. Sistemas de Apoio ao Executivo (SAE) são Sistemas de Informação para apoio de nível médio para tomada de decisões não usuais, focados em problemas únicos e que se alteram com rapidez, sem procedimentos para solução bem definidos.\n\n" +
            "Assinale a alternativa que contém todas as afirmativas corretas.",
        options: [
            "I, II e III.",
            "I e III, apenas.",
            "I e II, apenas", // Resposta correta
            "I, apenas.",
            "II e III, apenas."
        ],
        correctAnswer: 2,
        explanation: "As afirmações I e II descrevem corretamente os sistemas de processamento de transações e sistemas de informações gerenciais."
    },
    {
        question: "Conforme Laudon e Laudon (2007, p. 244), um software integrado de gestão é desenvolvido em torno de milhares de processos de negócios predefinidos. Todos estes processos são integrados em bases de dados unificadas e sistemas integrados de gestão empresarial, o que leva a informação disponível através de sistemas informatizados para todos os pontos de operação de uma empresa, para os escritórios gerenciais e para os estrategistas do negócio.\n\n" +
            "Considerando este contexto, avalie as asserções apresentadas a seguir e a relação proposta entre elas.\n\n" +
            "I. A utilização de um sistema integrado de gestão empresarial permite à empresa ganho de performance e produtividade em relação à utilização de sistemas não integrados.\n\n" +
            "PORQUE\n\n" +
            "II. Um sistema integrado de gestão empresarial apresenta benefícios como a redução de pessoal para realizar as atividades, unificação de base de dados e interfaces com o usuário, aprimoramento de processos, padronização de sistemas e processos administrativos e ainda oferece melhoria no relacionamento com clientes e fornecedores através de sistemas especializados.\n\n" +
            "A respeito dessas asserções, assinale a alternativa correta:",
        options: [
            "As asserções I e II são proposições verdadeiras, mas a II não complementa a I.",
            "As asserções I e II são proposições verdadeiras, e a II complementa a I.", // Resposta correta
            "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
            "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
            "As asserções I e II são proposições falsas."
        ],
        correctAnswer: 1,
        explanation: "As duas asserções são verdadeiras, e a II explica como o sistema integrado de gestão melhora a produtividade e desempenho."
    },
    {
        question: "Os bancos de dados, como elementos dos sistemas de informação são estratégicos e importantes para o gerenciamento de sistemas e dos negócios. Eles podem ser vistos como os guardiões dos dados, e instrumentos para análise, interpretação de informações e geração de valor para o negócio.\n\n" +
            "Com relação aos bancos de dados e às suas ferramentas de análise e tratativa de dados distribuídas em sistemas atuais, em nuvem pela internet, são feitas as seguintes afirmativas:\n\n" +
            "I. Os bancos de dados relacionais têm sido um padrão muito utilizado, porém outra tecnologia chamada de sistemas de gestão de banco de dados não relacional (NoSQL) representa um outro modelo de gestão de dados necessário pela natureza dos dados carregados nos sistemas baseados na Web, oferecendo um modelo mais flexível e projetos para grande volume de dados.\n\n" +
            "II. As questões de gestão de dados relacionadas ao Big data estão totalmente sob controle, considerando que os dados distribuídos em conteúdo na internet estão sempre em formatos estruturados.\n\n" +
            "III. Em uma análise realizada em 2014, pode perceber que cerca de 80% das informações úteis de uma empresa estão disponíveis em sistemas com dados estruturados dentro de bancos de dados.\n\n" +
            "IV. Aliado aos novos formatos de dados, os bancos de dados em nuvem também representam uma forma contemporânea que necessita de uma nova forma de gestão de dados, que estão distribuídos em diversos servidores. A Oracle apresenta uma solução chamada de Database Cloud Services para essa finalidade; e a Microsoft, o Windows Azure SQL e o Database para implementarem soluções em nuvem de gestão de dados.\n\n" +
            "É correto o que se afirma em:",
        options: [
            "III e IV, apenas.",
            "I e IV, apenas.", // Resposta correta
            "I, II, III e IV.",
            "I e II, apenas.",
            "I, II e III, apenas."
        ],
        correctAnswer: 1,
        explanation: "A opção correta inclui as afirmações I e IV, que abordam características essenciais dos bancos de dados em nuvem e NoSQL."
    },
    {
        question: "Um SGBD (Sistema Gerenciador de Banco de Dados) possui os recursos e as ferramentas necessárias para organizar, administrar e acessar os dados nos bancos de dados de uma empresa. Os seus principais recursos são a definição de dados, o dicionário de dados e a linguagem de manipulação de dados.\n\n" +
            "Avalie as alternativas a seguir sobre os aspectos relacionados aos bancos de dados e assinale a que representa um recurso em que a sua principal ferramenta é o SQL (Structured Query Language)",
        options: [
            "Definição de dados",
            "Linguagem de manipulação de dados.", // Resposta correta
            "Sistema Gerenciador de Banco de Dados.",
            "Dicionário de dados.",
            "Tabela de dados."
        ],
        correctAnswer: 1,
        explanation: "A linguagem de manipulação de dados (SQL) é usada para acessar e modificar dados dentro dos bancos de dados."
    },
    {
        question: "O novo cenário de armazenamento e gerenciamento de dados, sistemas de Analytics e de Business Intelligence (BI), faz uso de uma diversidade de tecnologias, chamadas também de ferramentas, para que os dados em seus formatos estruturados, semiestruturados e não estruturados possam ser gerenciados nos ambientes do Big data.\n\n" +
            "Avalie as assertivas apresentadas a seguir a respeito de tecnologias que levam a computação atual a suportar os sistemas de Business Intelligence.\n\n" +
            "I. Hadoop: refere-se a um framework desenvolvido pela Google para suporte a aplicações de computação paralela em imensas (vastas ou vastíssimas) coleções de dados distribuídos em clusters de máquinas. É uma tecnologia que mapeia onde está a informação e faz a coleta de dados distribuídos em sistemas diversos de forma mais ágil.\n\n" +
            "II. MapReduce: é uma plataforma de software em linguagem Java para desenvolvimento de aplicações distribuídas voltada para clusters e processamento de grandes (vastos) volumes de dados com suporte a tolerância a falhas.\n\n" +
            "III. NoSQL: Not Only SQL, ou “não apenas Structured Query Language”, o NoSQL é considerado como um novo padrão de linguagem de consulta para bancos de dados não relacionais.\n\n" +
            "É correto o que se afirma em:",
        options: [
            "I, II, III e IV.",
            "III e IV, apenas.",
            "I, II e III, apenas.", // Resposta correta
            "I e II, apenas.",
            "III, apenas."
        ],
        correctAnswer: 4,
        explanation: "A opção correta inclui as afirmações I, II e III, que explicam tecnologias como Hadoop, MapReduce e NoSQL."
    },
    {
        question: "No contexto de ferramentas NoSQL, algumas ferramentas vêm sendo apresentadas ao mercado e utilizadas de forma mais intensa. São exemplos de softwares NoSQL: MongoDB, Elastic Search, Redis, HBase, Cassandra, MarkLogic, CouchBase e Amazon Dynamo DB.\n\n" +
            "Analise as afirmativas a seguir, que apresentam a relação de uma ferramenta NoSQL e suas características:\n\n" +
            "I - MongoDB: é considerado como um document store ou document database e mantém atualmente a posição de líder de mercado no segmento de banco de dados não relacionais (NoSQL).\n\n" +
            "II - Amazon DynamoDB: sistema de banco de dados NoSQL baseado em nuvem e utilizado pela Amazon Web Services.\n\n" +
            "III- Cassandra: sistema NoSQL orientado a coluna, é uma implementação gratuita do sistema BigTable do Google.\n\n" +
            "IV - Apache HBase: desenvolvido originalmente pelo Facebook, o software é um sistema de banco de dados descentralizado, distribuído e orientado a coluna.\n\n" +
            "Assinale a alternativa que apresenta a sequência correta.",
        options: [
            "V – F – F – V.",
            "V – V – F – F.", // Resposta correta
            "F – V – V – V.",
            "F – F – V – V.",
            "V – V – V – V."
        ],
        correctAnswer: 1,
        explanation: "As opções I e II estão corretas, mas as afirmações sobre Cassandra e HBase têm incorreções sobre sua origem e características."
    },
    {
        question: "Sistemas de gestão de bancos de dados não relacionais, chamados de Not Only SQL (NoSQL), utilizam modelos variados de dados para acessar e gerenciar dados. Esses bancos de dados são customizados especialmente para aplicações que exigem modelos de gestão de dados que suportem grandes volumes de dados, baixa latência e flexibilidade.\n\n" +
            "Considerando esse contexto, avalie as asserções apresentadas a seguir e a relação proposta entre elas.\n\n" +
            "I. Sistemas NoSQL são criados para modelos de dados específicos e possuem esquemas flexíveis para a criação de aplicações que trabalham com dados estruturados, semiestruturados e não estruturados.\n\n" +
            "PORQUE\n\n" +
            "II. Esses sistemas são utilizados para suportarem ambientes informacionais que necessitam coletar, tratar e representar dados oriundos de sistema em grande volume e variedade de dados, conforme disponíveis em sistemas distribuídos no Big data.\n\n" +
            "A respeito dessas asserções, assinale a alternativa correta:",
        options: [
            "As asserções I e II são proposições falsas.",
            "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
            "As asserções I e II são proposições verdadeiras, mas a II não complementa a I.",
            "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
            "As asserções I e II são proposições verdadeiras, e a II complementa a I." // Resposta correta
        ],
        correctAnswer: 4,
        explanation: "Ambas as afirmações são verdadeiras e se complementam, pois a asserção II explica a necessidade de ambientes NoSQL para Big Data."
    },
    {
        question: "Barbieri (2020) nos ensina que deixamos o momento histórico baseado em sistemas de tomada de decisão gerencial, sistemas de inteligência de negócios e atualmente sistemas que buscam a coleta, análise e apresentação de dados com uso de sistemas de inteligência artificial baseados no uso de algoritmos mais lapidados e máquinas mais poderosas, atuando em conjunto.\n\n" +
            "O maior desafio dos sistemas de informação da atualidade é aplicar os dados como ____________ e usá-los para tomada de decisão, o que precisa ser feito de forma ____________, com os sistemas de Business Analytics, com inteligência de negócios, ou Business Intelligence, dentro de um ambiente ____________, utilizando-se dos já disseminados sistemas integrados de gestão empresarial ou Enterprise Resource Planning (ERP) para administração de operações empresariais, Sistemas Gerenciadores de Banco de Dados (SGBD) através de seus Data warehouses, e também em ambiente ____________, junto ao imenso universo de dados criado nestes últimos 40 anos, chamado de Big data.\n\n" +
            "Assinale a alternativa que complementa o texto apresentado de forma correta.",
        options: [
            "informações; estruturada; interno; externo.",
            "ativos; conceitual; externo; interno",
            "estratégia; analítica; interno; externo.", // Resposta correta
            "estratégia; analítica; externo; interno",
            "ativos; analítica; externo; interno"
        ],
        correctAnswer: 2,
        explanation: "A resposta correta é 'estratégia; analítica; interno; externo', que complementa o texto corretamente."
    },
    {
        question: "O termo “análise de dados” dentro do cenário dos sistemas de informações gerenciais da atualidade substituiu os componentes individuais anteriores de tecnologias de apoio à decisão computadorizadas que estavam disponíveis no passado recente (décadas de 1980 e 1990). Neste novo século, a expressão análise de dados é utilizada em conjunto ou mesmo no lugar de Business Intelligence.\n\n" +
            "Esta análise de dados é aplicada à análise de negócios em três níveis: descritiva, preditiva e prescritiva. Considerando os três tipos de análise de dados, analise as afirmativas a seguir:\n" +
            "I-) A análise de dados descritiva busca conhecer o que está acontecendo na organização e entender tendências e causas subjacentes de tais ocorrências.\n" +
            "II-) A análise de dados preditiva busca determinar o que é mais provável de acontecer no futuro, utilizando técnicas de estatísticas e mineração de dados.\n" +
            "III-) A análise de dados prescritiva busca reconhecer o que está acontecendo, bem como o que dever vir a acontecer, e tomar decisões para garantir o melhor desempenho possível.\n" +
            "IV-) Na análise de dados descritiva utilizam-se mineração de dados, mineração de texto e mineração na Web, enquanto na análise de dados preditiva utilizam-se relatórios, dashboards, scoreboards e data warehouse.\n\n" +
            "V-) Considerando o contexto apresentado, é correto o que se afirma em:",
        options: [
            "I e III, apenas",
            "I, II, III e IV",
            "I, II e III, apenas", // Resposta correta
            "I e II, apenas",
            "II e IV, apenas"
        ],
        correctAnswer: 2,
        explanation: "A resposta correta inclui as afirmações I, II e III, que descrevem corretamente os tipos de análise de dados."
    },
    {
        question: "O termo Business Intelligence (BI) teve sua origem no Gartner Group no início dos anos 1990 e remete a uma nova tecnologia que se utiliza dos Sistemas de Informação Gerenciais (SIG), dos Sistemas de Apoio a Decisões (SAD) dentro de uma visão contemporânea de gestão de negócios baseada em análise e interpretação de dados.\n\n" +
            "Avalie as assertivas a seguir referentes às características de sistemas de Business Intelligence.\n" +
            "1. Um sistema de Business Intelligence (BI) apresenta quatro componentes principais em sua arquitetura: Data warehouse e seus dados; Análise de negócios; BPM (Business Performance Management) e Dashboards.\n" +
            "2. Business Intelligence (BI) relaciona-se à coleta de dados, organização de dados, análise de dados, ação e monitoramento de dados para tomar melhores decisões e saber se os investimentos publicitários feitos estão trazendo bons resultados.\n" +
            "3. O principal objetivo do Business Intelligence (BI) é possibilitar acesso interativo (desejável em tempo real) a dados, permitir a manipulação de dados e oferecer a gestores empresariais e analistas a capacidade de conduzir análises apropriadas.\n" +
            "4. O processo de Business Intelligence (BI) tem como base as informações transformadas em dados, depois para suporte de ações em ações e, em seguida, sua interpretação.\n\n" +
            "Assinale a alternativa que contém todas as afirmativas corretas.",
        options: [
            "I e II, apenas.",
            "II e III, apenas.",
            "I, II, III e IV",
            "I, II e III, apenas.", // Resposta correta
            "I e III, apenas."
        ],
        correctAnswer: 3,
        explanation: "As afirmações I, II e III são corretas, descrevendo os componentes e objetivos do Business Intelligence."
    },
    {
        question: "Os renomados pesquisadores do Business Intelligence (BI), Sharda, Delen e Turban (2019, p. 9) nos ensinam que “aplicações computadorizadas passaram de atividades de processamento e monitoramento de transações para tarefas de análise e solução de problemas, e boa parte disso por meio de tecnologias na nuvem, em muitos casos acessadas via dispositivos móveis”.\n\n" +
            "Tomando como referência o cenário e Business Intelligence, julgue as afirmativas a seguir em (V) Verdadeiras ou (F) Falsas.\n" +
            "(   ) Não é somente o uso de tecnologias que faz a diferença nos negócios deste novo século XXI, mas sim quais tecnologias são utilizadas e a forma que buscam e analisam dados.\n" +
            "(   ) As ferramentas de Business Intelligence (BI), como armazenamento de dados, mineração de dados, OLAP – Online Analytical Processing e dashboards são usados para apoio a decisões.\n" +
            "(   ) O maior objetivo da gestão administrativa na atualidade é aprimorar o apoio a decisões gerenciais pela análise de dados de diversas maneiras, incluindo: comunicação e colaboração em grupo, gerenciamento de dados, gerenciamento de grandes Data warehouses e Big data, suporte analítico, superação de limites cognitivos no processamento e armazenamento de informações, gestão do conhecimento e suporte on-line em empresas de serviços.\n" +
            "(   ) O Business Intelligence (BI) é um termo guarda-chuva, de acordo com Sharda, Delen e Turban (2019), que combina arquiteturas, ferramentais, bases de dados, ferramentas analíticas, aplicativos e metodologias.\n\n" +
            "Assinale a alternativa que apresenta a sequência CORRETA.",
        options: [
            "V-V-V-F",
            "V-F-V-F",
            "F-V-F-V",
            "V-V-V-V", // Resposta correta
            "F-F-V-V"
        ],
        correctAnswer: 3,
        explanation: "Todas as afirmações são verdadeiras, de acordo com Sharda, Delen e Turban (2019)."
    },
    {
        question: "Os incríveis avanços da tecnologia ocorridos nas últimas décadas levaram a sociedade e as organizações a chamá-la de era da informação, ou era do conhecimento. Nesse cenário, as informações se transformaram em registros digitais e se tornaram determinantes para tomadas de decisões. Os dados, que se transformam em informações ao adquirem significado, constroem conhecimento e oportunizam o desenvolvimento de negócios.\n\n" +
            "Tomando as informações acima apresentadas sobre divisão de uma rede em sub-redes, julgue as afirmativas a seguir em (V) Verdadeiras ou (F) Falsas.\n" +
            "(   ) A inteligência empresarial atende às necessidades de tomada de decisão de todos os níveis de gerência.\n" +
            "(   ) A inteligência empresarial é definida por Laudon e Laudon (2014, p. 65) como um termo contemporâneo para dados e ferramentas de software que organizam, analisam e disponibilizam os dados para ajudar os gerentes e outros usuários corporativos a tomarem decisões mais embasadas nas informações.\n" +
            "(   ) Business Intelligence (BI) como um processo de análise de informações que oferece suporte aos negócios de uma empresa de forma isolada aos sistemas de informação.\n" +
            "(   ) A inteligência empresarial nos remete à inteligência de negócios, que abarca a análise dos negócios, que é uma ampla categoria de aplicações técnicas para reunir, armazenar e fornecer acesso aos dados com o objetivo de ajudar os usuários da empresa a tomarem melhores decisões comerciais e estratégicas.\n\n" +
            "A respeito dessas asserções, assinale a alternativa correta:",
        options: [
            "V-V-F-V", // Resposta correta
            "F-F-V-V",
            "V-V-V-F",
            "V-V-F-F",
            "V-V-V-V"
        ],
        correctAnswer: 0,
        explanation: "A resposta correta é V-V-F-V, refletindo as afirmações verdadeiras e falsas sobre inteligência empresarial."
    },
    {
        question: "A comunidade de análise de dados ainda aceita outra abordagem, fundamentada na inteligência de negócios baseada na ideia de observar os dados a fim de entender o que está acontecendo, o que poderá acontecer e como agir para tirar proveito da análise. Essa abordagem é originária da Informs e estruturada em três níveis: descritivo, preditivo e prescritivo.\n\n" +
            "Assinale a alternativa a seguir que apresenta as características de uma análise de dados descritiva:",
        options: [
            "Reconhece o que está acontecendo, o que poderá vir a acontecer, para que se possa tomar decisões e garantir o melhor desempenho possível em um negócio.",
            "Extração de relatórios informativos e diz respeito ao fato de conhecer o que está acontecendo na organização para posteriormente entender as tendências e causas subjacentes das ocorrências relatadas.", // Resposta correta
            "Usa técnicas estatísticas e mineração de dados, chamada de data mining, é também representada por atividades de busca e descoberta de dados no cenário do Big data, como o text mining ou ainda o web mining.",
            "Costumava ser estudado junto a PO (Pesquisa Operacional) ou das ciências administrativas, e seu objetivo geral é otimizar o desempenho de um sistema.",
            "Determina o que é mais provável de acontecer em um determinado negócio, mediante a interpretações de dados concebidos do passado relacionados ao produto, serviço ou mesmo ao negócio como um todo."
        ],
        correctAnswer: 1,
        explanation: "A alternativa correta descreve a análise descritiva, que foca em entender o que está acontecendo na organização."
    },
    {
        question: "Considerando as arquiteturas para um data warehouse, diversas são as formas de construção de um sistema. Primeiramente, é importante considerar que o armazenamento de dados possui três partes: data warehouse, back-end e front-end.\n\n" +
            "Avalie as proposições a seguir e a relação entre elas.\n" +
            "I. Atualmente, a arquitetura em estrela é a mais utilizada na construção de sistemas de data warehouse.\n\n" +
            "PORQUE\n\n" +
            "II. Uma arquitetura em estrela é concentrada na construção de uma infraestrutura escalável e de fácil manutenção. Inclui um data warehouse centralizado e vários data marts dependentes, que permitem fácil customização e interfaces de usuário e de relatórios.\n\n" +
            "A respeito dessas asserções, assinale a alternativa correta:",
        options: [
            "As asserções I e II são proposições verdadeiras, e a II complementa a I.", // Resposta correta
            "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
            "As asserções I e II são proposições verdadeiras, mas a II não complementa a I.",
            "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
            "As asserções I e II são proposições falsas."
        ],
        correctAnswer: 0,
        explanation: "A alternativa correta indica que as afirmações I e II são verdadeiras e que a segunda complementa a primeira."
    },
    {
        question: "Um tomador de decisões precisa ter acesso a múltiplas fontes de dados que devem ser integrados, o que era um processo muito trabalhoso até o desenvolvimento de sistemas de data warehouses e Business Intelligence. Sharda, Delen e Turban (2019) nos lembram que os usuários empresariais cada vez mais precisam de acesso a dados em tempo real, não estruturados e em ambientes remotos.\n\n" +
            "Analise as assertivas a seguir a respeito dos processos ETL.\n" +
            "I. Acesso a dados relaciona-se à capacidade de acessar e extrair dados de fontes de dados diversificadas.\n" +
            "II. Federação de dados representa a integração de visões de negócios por múltiplos depósitos de dados.\n" +
            "III. Captura de mudanças relaciona-se à identificação, coleta e entrega das alterações realizadas nas fontes de dados empresariais.\n" +
            "IV. O objetivo do ETL é abastecer o data warehouse com dados isolados e brutos.\n\n" +
            "Assinale a alternativa que apresenta a sequência correta.",
        options: [
            "V – V – F – V.",
            "V – V – V – F.", // Resposta correta
            "F – F – V – F.",
            "V – V – V – V.",
            "V – F – F – F."
        ],
        correctAnswer: 1,
        explanation: "A alternativa correta é V – V – V – F, que descreve corretamente as afirmações sobre os processos ETL."
    },
    {
        question: "De forma geral, Sharda, Delen e Turban (2019) nos ensinam que a análise de dados descritiva é formada por dados representados por sua diferente natureza, pela modelagem estatística e pela visualização de dados. A estatística descritiva é então uma importante ferramenta para a análise de dados descritiva.\n\n" +
            "Com relação às técnicas da estatística descritiva no contexto de análise de dados, são feitas as seguintes afirmações.\n" +
            "I. Medidas de tendência de centralidade: métodos matemáticos que estimam ou descrevem o posicionamento central de uma determinada variável.\n" +
            "II. Média aritmética: soma de todos os valores/observações divididos pela quantidade de observações no conjunto de dados.\n" +
            "III. Mediana: medida do valor central de um determinado conjunto de dados.\n" +
            "IV. Medidas de dispersão: métodos matemáticos que estimam o grau de variação de uma variável.\n\n" +
            "Assinale a alternativa que contém todas as afirmativas corretas.",
        options: [
            "I e III, apenas.",
            "II e III, apenas",
            "I e II, apenas.",
            "I, II, III e IV.", // Resposta correta
            "I e IV, apenas."
        ],
        correctAnswer: 3,
        explanation: "A alternativa correta é I, II, III e IV, que inclui todas as técnicas da estatística descritiva."
    },
    {
        question: "Uma maneira convencional de realizar análise de dados é constituída por busca e coleta de dados organizados em estruturas não voláteis de armazenamento e disponibilização de dados, ou seja, por meio de data warehouses.\n\n" +
            "Sobre os principais tipos de data warehouses, avalie as assertivas apresentadas a seguir.\n" +
            "I. Data marts: sistema de armazenamento de dados menor que um data warehouse que se concentra em um tema ou departamento específico. Trata-se de um subconjunto de um data warehouse, tipicamente abarcando uma única área temática.\n" +
            "II. Operational Data Store (ODS): são os sistemas de data warehouse empresariais, ou seja, um data warehouse em grande escala usado por toda a empresa para embasamento de decisões corporativas.\n" +
            "III. Enterprise Data Storage (WDS): são os depósitos de dados operacionais que oferecem uma forma bem recente de arquivamento de informações sobre clientes. Esse sistema é utilizado para decisões a curto prazo envolvendo aplicações de missão crítica e não para decisões de médio e/ou longo prazos associados aos sistemas de armazenamento de dados corporativos.\n\n" +
            "É correto o que se afirma em:",
        options: [
            "I e II, apenas.",
            "II e III, apenas.",
            "I, II e III.",
            "I, apenas.", // Resposta correta
            "III, apenas."
        ],
        correctAnswer: 3,
        explanation: "A alternativa correta é I, apenas, que descreve corretamente o conceito de data marts."
    },
    {
        question: "Enquanto a análise de dados ____________ explora a modelagem estatística, a visualização de dados, a inteligência em negócios e o uso de data warehouses, posicionando-se dentro do contexto de Business Intelligence, as análises ____________ e prescritiva são consideradas técnicas ____________ de análise de dados.\n\n" +
            "Assinale a alternativa que preenche corretamente as lacunas.",
        options: [
            "preditiva / prescritiva / rudimentares.",
            "preditiva / prescritiva / avançadas.",
            "descritiva / prescritiva / básicas.",
            "descritiva / preditiva / avançadas.", // Resposta correta
            "preditiva / prescritiva / isoladas."
        ],
        correctAnswer: 3,
        explanation: "A alternativa correta é 'descritiva / preditiva / avançadas', que preenche corretamente as lacunas."
    },
    {
        question: "A análise de dados no cenário corporativo é utilizada para entender o que está acontecendo e o que pode vir a acontecer. O como agir para tirar proveito dessas análises acabou por definir três categorias de análises de dados (para negócios). Essa abordagem foi desenvolvida pela Informs e estruturada em três níveis: descritivo, preditivo e prescritivo.\n\n" +
            "Considerando as categorias de análise de dados junto ao Business Intelligence, analise as afirmativas a seguir:\n" +
            "I. A análise de dados descritiva refere-se à extração de relatórios e diz respeito a conhecer o que está acontecendo na organização para entender as tendências e causas subjacentes de tais ocorrências.\n" +
            "II. As ferramentas tecnológicas utilizadas para a análise descritiva são: relatórios empresariais, dashboards, scoreboards e data warehouse.\n" +
            "III. A análise de dados utiliza-se de um contexto superficial, sem aprofundamento e sem necessidade de utilização de Data warehouses como estruturas especiais de banco de dados.\n" +
            "IV. Na análise descritiva de dados, o BPM (Business Process Model) não tem aplicabilidade.\n\n" +
            "Assinale a alternativa que contém todas as afirmativas corretas.",
        options: [
            "I e III, apenas.",
            "I e II, apenas.", // Resposta correta
            "I, II e III.",
            "I, apenas.",
            "II e III, apenas"
        ],
        correctAnswer: 1,
        explanation: "A alternativa correta é 'I e II, apenas', que inclui as afirmativas corretas sobre análise descritiva de dados."
    },
    {
        question: "O Data mining ou mineração de dados é “uma forma de desenvolver informações ou conhecimentos de caráter prático a partir de dados que uma organização coleta, organiza e armazena”, de acordo com Sharda, Delen e Turban (2019, p. 233).\n\n" +
            "Considerando este contexto, avalie as asserções apresentadas a seguir e a relação proposta entre elas.\n" +
            "I. Importante compreender também que técnicas de análise de dados utilizam métodos estatísticos, fazem uso de algoritmos específicos de inteligência artificial e do machine learning ou aprendizado de máquina, que podem ser considerados métodos não convencionais de tratamento de dados.\n\n" +
            "PORQUE\n\n" +
            "II. O termo “não convencional” está relacionado a processos diferentes de extrações de dados realizadas por meio de comandos de linguagem de manipulação de dados, como o SQL (Structured Query Language), por exemplo. Essa necessidade se dá pela complexidade dos dados oriundos de formatos semiestruturados ou não estruturados e também por estarem disponibilizados em vastas bases de dados no contexto do Big data.\n\n" +
            "A respeito dessas asserções, assinale a alternativa correta:",
        options: [
            "As asserções I e II são proposições falsas.",
            "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
            "As asserções I e II são proposições verdadeiras, mas a II não complementa a I.",
            "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
            "As asserções I e II são proposições verdadeiras, e a II complementa a I." // Resposta correta
        ],
        correctAnswer: 4,
        explanation: "A alternativa correta é 'As asserções I e II são proposições verdadeiras, e a II complementa a I', que descreve corretamente a relação entre as afirmações."
    },
    {
        question: "Sharda, Delen e Turban (2019, p. 187) sustentam que “a principal estrutura operacional no OLAP se baseia em um conceito denominado cubo”. O cubo é uma estrutura de dados multidimensionais que permite rápida análise de dados e relaciona-se à capacidade de manipular e analisar dados com eficiência a partir de múltiplos enfoques.\n\n" +
            "Avalie as assertivas a seguir a respeito das operações com cubo de dados no contexto de análise multidimensional de dados.\n" +
            "Segmentar ou fatiar (slice): fatia é um subconjunto de um leque multidimensional correspondendo a um único conjunto de valores das dimensões.\n" +
            "Diminuir ou picar (dice): a operação de dividir corresponde a fatiar um cubo de dados em mais do que duas dimensões.\n" +
            "Aumentar/diminuir o foco (drill down/up): rolar envolve computador todas as relações de dados para uma ou mais dimensões.\n" +
            "Rodar par acima (roll-up): o aumento ou diminuição de foco permite que o usuário navegue por meio de níveis de dados, indo desde os mais resumidos (menos foco) até os mais detalhados (mais foco).\n\n" +
            "Assinale a alternativa que apresenta a sequência correta.",
        options: [
            "V – F – F – F.",
            "V – F – V – V.",
            "F – F – V – F.",
            "F – V – V – V.",
            "V – V – F – F." // Resposta correta
        ],
        correctAnswer: 4,
        explanation: "A alternativa correta é 'V – V – F – F', que descreve corretamente as operações com cubo de dados no contexto OLAP."
    },
    {
        question: "A mineração de dados ou Data mining utiliza análises matemáticas para encontrar padrões e tendências nos conjuntos de dados, não encontrados normalmente por sistemas convencionais de gerenciamento de banco de dados por se tratar da análise de dados extremamente volumosos.\n\n" +
            "Avalie as assertivas a seguir e sua relação com os quatro tipos de padrões de mineração de dados:\n" +
            "I. Previsão/associação: indicam o caráter das ocorrências futuras de certos eventos, tendo como base o que ocorreu no passado, como, por exemplo, a previsão do ganhador do campeonato nacional de futebol americano ou da temperatura prevista em um dia específico.\n" +
            "II. Previsão: encontram os itens que costuma ocorrer em concomitância, apresentando alguma relação entre elas.\n" +
            "III. Agrupamento: identificam aglomerações naturais de coisas com base em suas características conhecidas, como a atribuição de clientes em diferentes segmentos de mercado dependendo de seus traços demográficos e comportamento de compra.\n" +
            "IV. Relações sequenciais: revelam eventos temporalmente ordenados, como, por exemplo, a previsão de clientes que possuem conta-corrente e tendem a abrir contas ou carteiras de investimento nos próximos meses/anos.\n\n" +
            "É correto o que se afirma em:",
        options: [
            "I e II, apenas.",
            "I, II, III e IV.",
            "II e IV, apenas.",
            "III e IV, apenas.", // Resposta correta
            "I, II e III, apenas."
        ],
        correctAnswer: 3,
        explanation: "A alternativa correta é 'III e IV, apenas', que descreve corretamente os tipos de padrões de mineração de dados."
    },
    {
        question: "A mineração de dados faz uso de diversos processos para compor uma análise geral de análise de dados. São exemplos desses processos o CRISP-DM (Cross Industry Standard Process for Data Mining), o SEMMA (Sample, Explore, Modify and Assess) e o KDD (Knowledge Discovery in Database).\n\n" +
            "Considerando esse contexto, avalie as asserções apresentadas a seguir e a relação proposta entre elas.\n\n" +
            "I. O KDD (Knowledge Discovery in Database) é um processo de mineração de dados propriamente dito utilizado em data warehouses. Um data warehouse empresarial permite que KDD seja implementada de forma eficiente, pois oferece uma fonte única de dados a serem garimpados.\n\n" +
            "PORQUE\n\n" +
            "II. O KDD é um processo que abrange em si a mineração de dados.\n\n" +
            "A respeito dessas asserções, assinale a alternativa correta:",
        options: [
            "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
            "As asserções I e II são proposições verdadeiras, mas a II não complementa a I.",
            "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
            "As asserções I e II são proposições verdadeiras, e a II complementa a I.", // Resposta correta
            "As asserções I e II são proposições falsas."
        ],
        correctAnswer: 3,
        explanation: "As asserções são verdadeiras, e a II complementa a I, pois o KDD abrange a mineração de dados e é suportado por data warehouses empresariais."
    },
    {
        question: "Vivenciamos um mundo quase que totalmente conectado e a competitividade das empresas atuais cresce de uma maneira preocupante a cada dia. O crescimento da internet nos últimos 30 anos, desde a abertura de acesso a empresas e residências oportunizadas no Brasil pelos provedores de acesso à internet, facilitou sobremaneira a criação de novos sites que, por sua vez, elevaram a quantidade de sistemas interligados.\n\n" +
            "Considerando as informações sobre Business Intelligence e o web mining, analise as afirmativas a seguir:\n\n" +
            "I. A www (world wide web) pode ser vista como um enorme repositório de dados e informações sobre praticamente todos os assuntos.\n" +
            "II. A web também impõe alguns obstáculos para a eficiência da descoberta de dados.\n" +
            "III. O web mining ou mineração na web é o processo de descoberta de relações intrínsecas, ou seja, informações interessantes e úteis, a partir de dados da web.\n" +
            "IV. O web mining assemelha-se à mineração de dados, porém usando dados gerados via sistemas web com a meta de transformar vastos repositórios de dados de transações comerciais, interações com clientes e páginas web em geral em informações úteis (conhecimento) para tomada de decisões gerenciais nas empresas.\n\n" +
            "É correto o que se afirma em:",
        options: [
            "III e IV, apenas.",
            "II e IV, apenas.",
            "I e II, apenas.",
            "I, II, III e IV.", // Resposta correta
            "I, II e III, apenas."
        ],
        correctAnswer: 3,
        explanation: "Todas as afirmações estão corretas e descrevem características e desafios associados ao web mining e à world wide web."
    },
    {
        question: "Luger (2013, p. 1) define a Inteligência Artificial (IA) “como o ramo da ciência da computação que se ocupa da automação do comportamento inteligente”. Veja, caro leitor, que essa definição busca enfatizar que a IA faz parte da ciência da computação e deve ser baseada em princípios teóricos dessa área, que incluem as estruturas de dados usadas na representação do conhecimento, os algoritmos para aplicar esse conhecimento e as linguagens e técnicas de programação usadas em sua implementação.\n\n" +
            "O aprendizado de máquina é formado pela aquisição e acúmulo de conhecimento por meio de extração de significado a partir de determinado conjunto de dados. De acordo com Lenz et al. (2020), esse processo pode ser dividido em sete etapas: coleta de dados, preparação dos dados, seleção do modelo, treinamento, avaliação, ajuste de parâmetros e aplicação.\n\n" +
            "Com relação ao processo geral de aprendizagem de máquina, avalie as assertivas a seguir:\n\n" +
            "I. Seleção: os dados devem ser reparados e adequados ao modelo utilizado no processo, onde são incluídas as transformações de unidade, conversão de escala, normalização e mudanças de representação dos dados.\n" +
            "II. Preparação: ocorre a seleção dos dados em quantidade e qualidade adequadas para extrair o conhecimento desejado. Quanto maior a quantidade de exemplos obtidos, melhor será o aprendizado. A qualidade tem relação direta com os atributos escolhidos.\n" +
            "III. Modelo: etapa em que os dados são tratados por meio de técnicas de regressão linear, regressão logística, classificação, agrupamento, aprendizado profundo, entre outros.\n" +
            "IV. Avaliação: etapa que utiliza os dados separados no início do processo para que testes sejam realizados e assim determinar se o modelo obtido após o treinamento tem a precisão esperada na predição do alvo a partir de conjuntos de dados até então desconhecidos.\n" +
            "V. Aplicação: utilização do modelo para a realização de previsões a partir da máquina já treinada.\n\n" +
            "Assinale a alternativa que contém todas as afirmativas corretas.",
        options: [
            "I e III, apenas.",
            "I, II e III.",
            "I, II, III, IV e V.",
            "III, IV e V, apenas.", // Resposta correta
            "I, II e V, apenas."
        ],
        correctAnswer: 3,
        explanation: "As afirmativas III, IV e V descrevem corretamente etapas do processo de aprendizado de máquina."
    },
    {
        question: "De acordo com Morais (2020, p. 101), um dos pilares da transformação digital é a IoT e relaciona-se a uma revolução na forma como as pessoas se conectam com as marcas, por meio de tudo que possa ser interconectado à Internet.\n\n" +
            "Considerando as características da Internet das Coisas, analise as afirmativas a seguir:\n\n" +
            "I. Como exemplos de dispositivos de IoT temos o smartphone, uma SmatTV, carro, bicicleta, geladeira, câmera de vídeo, alarme residencial, sensores de presença, uma caneta, uma roupa, ou mesmo os dispositivos que podem ser implantados no corpo humano, os chamados Wearables.\n" +
            "II. O volume de dispositivos conectados e que irão se conectar às redes e à Internet é grande e será maior ainda nos próximos anos.\n" +
            "III. Os motivos para esse crescimento exponencial são: o hardware ficou menor, mais barato e mais poderoso; disponibilidade de ferramentas de Business Intelligence; e aplicações novas e interessantes emergindo praticamente todos os dias.\n" +
            "IV. A IoT deverá trazer o conceito de computação ubíqua, aquele que considera o computador ou o dispositivo computacional presente em todos os lugares e de forma imperceptível e definitiva.\n\n" +
            "Considerando o contexto apresentado, é correto o que se afirma em:",
        options: [
            "I, II e III, apenas.",
            "I e IV, apenas.",
            "II, III e IV, apenas.",
            "I e II, apenas.",
            "I, II, III e IV." // Resposta correta
        ],
        correctAnswer: 4,
        explanation: "Todas as afirmativas são corretas e descrevem adequadamente as características e o potencial da IoT."
    },
    {
        question: "A Inteligência em Negócios, ou Business Intelligence (BI), e a Internet das Coisas, ou Internet of Things (IoT), possuem uma relação forte, considerando que um dos principais componentes ou representantes da IoT são os sensores de equipamentos diversos (automóveis, linhas de produção, eletrodomésticos ou mesmo de vestuário), que coletam rapidamente grandes quantidades de dados e alimentam os sistemas de informação integrados, principalmente aqueles com módulos de Business Intelligence.\n\n" +
            "I. Big data, Internet das Coisas e Business Intelligence possuem uma forte relação quanto ao cenário de geração e tratamento de dados.\n\n" +
            "PORQUE\n\n" +
            "II. No Big Data, volumes imensos de dados semiestruturados e não estruturados são tratados por sistemas computacionais para provisão de informações relevantes aos negócios de uma empresa. Esses dados são oriundos de diversas fontes, sendo a Internet das Coisas uma delas, e a tecnologia que mais cresce como fonte de dados.\n\n" +
            "A respeito dessas asserções, assinale a alternativa correta.",
        options: [
            "As asserções I e II são proposições verdadeiras, mas a II não tem relação com a I e não a complementa I.",
            "As asserções I e II são proposições falsas.",
            "A asserção I é uma proposição falsa, e a II, verdadeira.",
            "As asserções I e II são proposições verdadeiras, e a II complementa a I.", // Resposta correta
            "A asserção I é uma proposição verdadeira, e a II, falsa."
        ],
        correctAnswer: 3,
        explanation: "Ambas as asserções são verdadeiras, e a II complementa a I, destacando a relação entre Big Data, IoT e BI."
    },
    {
        question: "A busca, extração, transferência, tratamento e análise de dados de bancos de dados, sistemas de data warehouses e informações distribuídas em contextos da www (world wide web) utiliza-se de tecnologias para trazer dados que possam ser utilizados nas empresas para ganho de vantagem competitiva e sustentabilidade de negócios.\n\n" +
            "Assinale a alternativa que apresenta as características relacionadas ao text mining:",
        options: [
            "Relaciona-se a uma forma de desenvolver informações ou conhecimentos de caráter prático a partir de dados que uma organização coleta, organiza e armazena. É um termo usado para descrever a descoberta (mineração) de conhecimentos junto a grandes quantidades de dados.",
            "Relaciona-se especificamente ao processo não convencional de identificar padrões válidos e potencialmente úteis para a inteligência de negócios junto a bases de dados estruturados onde os dados são organizados em registros estruturados por variáveis categóricas, ordinais e contínuas.",
            "O algoritmo mais popular dessa técnica é o Hyperlink Induced Topic Search (HITS), que analisa links que qualificam páginas da internet usando informações de hiperlinks.",
            "Relaciona-se ao processo semiautomatizado de extração de padrões (informações e conhecimento úteis) junto a vastas quantidades de fontes de dados não estruturados. A entrada ao processo via coleção de arquivos de dados não estruturados (ou semiestruturados) como documentos .DOC, .PDF, trechos de textos, arquivos .XML, entre outros.", // Resposta correta
            "É o processo de descoberta de relações intrínsecas, ou seja, informações interessantes e úteis, a partir de dados da web, que são impressos da forma de informação textual, interligações (hiperlinks)."
        ],
        correctAnswer: 3,
        explanation: "A resposta correta descreve corretamente o processo de text mining, que lida com dados não estruturados."
    },
    {
        question: "A Inteligência Artificial vem sendo objeto de desenvolvimento de novos sistemas de informação nos últimos vinte anos, porém pode ser vista como um grande tema de ficção científica e fascínio da humanidade desde tempos mais remotos. Diversos filmes como Metrópolis ou 2001: uma odisseia no espaço já faziam abordagens sobre o tema, levando à reflexão de sua potencialidade e dos seus perigos.\n\n" +
            "Assinale a alternativa a seguir que apresenta uma definição correta sobre Inteligência Artificial:",
        options: [
            "Sistema integrado de gestão de relacionamento com cliente.",
            "Processo semiautomatizado de extração de padrões (informações e conhecimento úteis) junto a vastas quantidades de fontes de dados não estruturados.",
            "Ramo da ciência da computação que se ocupa da automação do comportamento inteligente.", // Resposta correta
            "Uma forma de programar os computadores para trabalharem com o objetivo de maximizar um determinado problema, por meio de experiências ou exemplos inseridos em um sistema como dados de entrada.",
            "Conjunto de componentes inter-relacionados que coletam, processam, armazenam e distribuem informações destinadas a apoiar a tomada de decisões, a coordenação e o controle de uma organização."
        ],
        correctAnswer: 2,
        explanation: "A Inteligência Artificial é um ramo da ciência da computação que lida com a automação de comportamentos inteligentes."
    },
    {
        question: "As principais tecnologias para análise de dados no contexto do Big data nos foram parcialmente apresentadas por Sharda, Delen e Turban (2019) no contexto de bancos de dados não relacionais, necessários para fazer uma reflexão sobre as ferramentas que compõem o contexto de gestão de dados para inteligência em negócios junto à tecnóloga NoSQL estudada. Relembremos então as três tecnologias que levam a computação atual a suportar os sistemas de inteligência de negócios (Business Intelligence) e o tratamento de grandes e heterogêneas bases de dados: o Hadoop, o Hadoop Map Reduce e o NoSQL, e outros frameworks que complementam esse ferramental de tecnologias, como o HDFS, GlusterFS, Ceph, Cassandra e XtreemFS.\n\n" +
            "Assinale a alternativa a seguir que apresenta as características do framework XtreemFS:",
        options: [
            "Plataforma de software livre que possibilita armazenamento de dados em um único cluster, com objeto, bloco e arquivo. É uma ferramenta gratuita e tolerante a falhas, escalável até o nível de armazenamento em Exabyte.",
            "Nesta tecnologia, o acesso aos dados estruturados e semiestruturados são realizados através de arquivos de registros, feeds de redes sociais e repositórios de dados. Utiliza-se um depósito de dados que permite que os dados processados estejam prontos para análise em sistemas de Analytics e Business Intelligence, para coleta e organização de dados oriundos de sistemas distribuídos no Big data.",
            "Plataforma de software em linguagem Java para desenvolvimento de aplicações distribuídas voltadas para clusters e processamento de grandes (vastos) volumes de dados com suporte a tolerância a falhas.",
            "Sistema de arquivos distribuídos baseado em objeto para redes de longa distância, tolerante a falhas e suporte a certificados SSL e X.509. Os dados armazenados são replicados em vários servidores de armazenamento, e, para cada arquivo replicado, há uma lista de réplicas, que fornece controle completo para onde elas estão contidas.", // Resposta correta
            "Banco de dados NoSQL (Not Only SQL), open source, que armazena dados na forma de pares de chave-valor. Atualmente faz o armazenamento a partir do princípio de agrupamento, diferente do HDFS, em que metadados e dados são separados."
        ],
        correctAnswer: 3,
        explanation: "A resposta correta descreve as características do framework XtreemFS como um sistema de arquivos distribuído baseado em objeto."
    },
    {
        question: "Conforme relatam Sharda, Delen e Turban (2019, p. 442), o Big data definido por seis Vs – Volume, Variedade, Velocidade, Veracidade, Variabilidade e Valor – gera informações nos mais diferentes formatos junto aos sistemas de informações e aplicações digitais. Nesse contexto, muitas informações são geradas, e cerca de 85% de todos os dados organizacionais encontram-se em algum formato não estruturado ou semiestruturado.\n\n" +
            "Assinale a alternativa a seguir que apresenta um termo, representado por um dos Vs que definem o Big data, relacionado aos novos dados da intensa e constante geração e processamento de dados para gerar informações relevantes.",
        options: [
            "Volume.",
            "Valor.",
            "Veracidade.",
            "Variedade.",
            "Velocidade." // Resposta correta
        ],
        correctAnswer: 4,
        explanation: "A velocidade refere-se à geração constante e rápida de grandes volumes de dados no contexto de Big Data."
    }
];
  
  let selectedQuestions = shuffleQuestions(questions).slice(0, 5); // Escolhe aleatoriamente 5 perguntas
  const timeLimit = 420; // Tempo limite por pergunta em segundos
  let timerInterval; // Variável para armazenar o intervalo do cronômetro
  let currentTime; // Variável para armazenar o tempo restante
  let totalTimeSpent = 0; // Variável para armazenar o tempo total em milissegundos
  
  // Função para embaralhar as perguntas
  function shuffleQuestions(questionsArray) {
    return questionsArray.sort(() => Math.random() - 0.5);
  }
  
  let currentQuestion = 0;
  let score = 0;
  let questionTimes = []; // Array para armazenar o tempo de cada pergunta
  
  function loadQuestion() {
    const timerElement = document.getElementById('timer');
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const resultContainer = document.getElementById('result');
    const nextButton = document.getElementById('next-button');
  
    startTimer(); // Inicia o cronômetro ao carregar uma nova pergunta
  
    questionContainer.textContent = selectedQuestions[currentQuestion].question;
  
    optionsContainer.innerHTML = "";
    selectedQuestions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
  
    resultContainer.textContent = "";
    nextButton.style.display = "none";
  }
  
  function startTimer() {
    const timerElement = document.getElementById('timer');
    currentTime = timeLimit * 1000; // Converte o tempo limite para milissegundos
    timerElement.textContent = `Tempo: ${calculateTime(currentTime)}`;
  
    timerInterval = setInterval(() => {
        currentTime -= 1000;
        timerElement.textContent = `Tempo: ${calculateTime(currentTime)}`;
  
        if (currentTime <= 0) {
            clearInterval(timerInterval);
            checkAnswer(-1); // Resposta incorreta (tempo esgotado)
        }
    }, 1000);
  }
  
  function calculateTime(time) {
    let totalSeconds = Math.floor(time / 1000);
    let totalMinutes = Math.floor(totalSeconds / 60);
  
    let displaySeconds = (totalSeconds % 60).toString().padStart(2, "0");
    let displayMinutes = totalMinutes.toString().padStart(2, "0");
  
    return `${displayMinutes}:${displaySeconds}`;
  }
  
  function checkAnswer(selectedOption) {
    const correctAnswer = selectedQuestions[currentQuestion].correctAnswer;
    const resultContainer = document.getElementById('result');
    const nextButton = document.getElementById('next-button');
    const options = document.querySelectorAll('.option');

    clearInterval(timerInterval); // Para o cronômetro ao verificar a resposta

    options.forEach((option, index) => {
        option.disabled = true;
        if (index === correctAnswer) {
            option.classList.add('correct');
            option.classList.add('correct-answer');
        } else {
            option.classList.add('incorrect');
            option.classList.add('incorrect-answer');
        }
        option.disabled = true; // Desabilita os botões após a resposta
    });

    const questionTime = timeLimit * 1000 - currentTime;
    questionTimes.push(questionTime); // Armazena o tempo da pergunta
    totalTimeSpent += questionTime; // Acumula o tempo total gasto

    if (selectedOption === correctAnswer) {
        resultContainer.style.color = '#4caf50';
        resultContainer.textContent = `Resposta correta! ${selectedQuestions[currentQuestion].explanation}`;
        score++;
        updateProgressPlanet(currentQuestion, true); // Atualiza o planeta para verde
    } else if (selectedOption === -1) {
        resultContainer.style.color = 'orange';
        resultContainer.textContent = `Tempo esgotado! A resposta correta seria a opção ${correctAnswer + 1}. ${selectedQuestions[currentQuestion].explanation}`;
        updateProgressPlanet(currentQuestion, false); // Atualiza o planeta para vermelho
    } else {
        resultContainer.style.color = '#e74c3c';
        resultContainer.textContent = `Resposta incorreta. A resposta correta seria a opção ${correctAnswer + 1}. ${selectedQuestions[currentQuestion].explanation}`;
        updateProgressPlanet(currentQuestion, false); // Atualiza o planeta para vermelho
    }

    nextButton.style.display = "flex";
}
  
  function nextQuestion() {
    const options = document.querySelectorAll('.option');
  
    options.forEach((option) => {
        option.classList.remove('correct', 'incorrect');
        option.disabled = false; // Habilita os botões para a próxima pergunta
    });
  
    currentQuestion++;
  
    if (currentQuestion < selectedQuestions.length) {
        loadQuestion();
    } else {
        clearInterval(timerInterval);
        showFinalResult();
    }
  }
  
  async function saveRecord(time, incorrects) {
      try {
        let res;
        const response = await fetch("http://localhost:3000/api/record/quiz", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({"tempo_record": time, "quantidade_erros": incorrects}),
          credentials: "include",
        });
    
        res = await response.json();
        console.log(res)
      } catch (error) {
        console.log(error);
      }
  }
  
  function showFinalResult() {
    const quizContainerQuestions = document.getElementById('quiz-container-questions');
    const quizContainerWrapper = document.getElementById('quiz-container')
    const resultContainer = document.getElementById('result-container');
    const headerQuizContainer = document.getElementById('header-quiz');
    const correctAnswersElement = document.getElementById('correct-answers');
    const incorrectAnswersElement = document.getElementById('incorrect-answers');
    const percentageElement = document.getElementById('percentage');
    const totalScoreElement = document.getElementById('total-score');
    const totalTimeElement = document.getElementById('total-time');
  
    quizContainerQuestions.style.display = 'none'; // Oculta o container de perguntas
    headerQuizContainer.style.display = 'none';
    quizContainerWrapper.style.display = 'none';
    resultContainer.style.display = 'flex';
    correctAnswersElement.textContent = score;
    incorrectAnswersElement.textContent = selectedQuestions.length - score;
    let incorrect = selectedQuestions.length - score;    
    percentageElement.textContent = ((score / selectedQuestions.length) * 100).toFixed(2) + '%';
    totalScoreElement.textContent = `${score} / ${selectedQuestions.length}`;
    totalTimeElement.textContent = calculateTime(totalTimeSpent); // Exibe o tempo total em MM:SS
    saveRecord(totalTimeSpent, incorrect); // Envia o tempo total em milissegundos para a API
  }
  
  function showHelp() {
    const blurOverlay = document.getElementById('blur-overlay');
    const helpDialog = document.getElementById('help-dialog');
  
    blurOverlay.style.display = 'block';
    helpDialog.style.display = 'flex';
  
  }
  
  function closeHelp() {
    const blurOverlay = document.getElementById('blur-overlay');
    const helpDialog = document.getElementById('help-dialog');
  
    blurOverlay.style.display = 'none';
    helpDialog.style.display = 'none';
  }
  
  function toggleFullScreen() {
      const fullscreenIcon = document.getElementById('fullscreen-icon');
      const fullscreenBtn = document.getElementById('fullscreen-btn');
    
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullscreenIcon.classList.remove('fa-expand');
        fullscreenIcon.classList.add('fa-compress');
        fullscreenBtn.classList.add('fullscreen');
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
          fullscreenIcon.classList.remove('fa-compress');
          fullscreenIcon.classList.add('fa-expand');
          fullscreenBtn.classList.remove('fullscreen');
        }
      }
  }
  
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  fullscreenBtn.addEventListener('click', toggleFullScreen);
  
  startGame();
  