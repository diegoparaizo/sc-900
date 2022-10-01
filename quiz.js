var quiz = {
  // (A) PROPERTIES
  // (A1) QUESTIONS & ANSWERS
  // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
  data: [
  {
    q : "A que tipo de recurso o Azure Bastion pode fornecer acesso seguro?",
    o : [
      "Azure Files",
      "Azure SQL Managed Instances",
      "Azure virtual machines",
      "Azure App Service"
    ],
    a : 2
  },
  {
    q : "Você tem uma assinatura do Microsoft 365 E3. Você planeja auditar a atividade do usuário usando o log de auditoria unificado e a Auditoria Básica. Por quanto tempo os registros de auditoria serão retidos?",
    o : [
      "15 dias",
      "30 dias",
      "90 dias",
      "180 dias"
    ],
    a : 2
  },
  {
    q : "Quais são as três tarefas que podem ser executadas usando a Proteção de Identidade do Azure Active Directory (Azure AD)? Cada resposta correta apresenta uma solução completa. NOTA: Cada seleção correta vale um ponto.",
    o : [
      "Configure o acesso externo para organizações parceiras. / Crie e atribua automaticamente rótulos de confidencialidade aos dados. / Investigue os riscos relacionados à autenticação do usuário.",
      "Exporte a detecção de risco para utilitários de terceiros. / Configure o acesso externo para organizações parceiras. / Crie e atribua automaticamente rótulos de confidencialidade aos dados.",
      "Automatize a detecção e a correção de riscos baseados em identidade. / Exporte a detecção de risco para utilitários de terceiros. / Configure o acesso externo para organizações parceiras.",
      "Investigue os riscos relacionados à autenticação do usuário. / Automatize a detecção e a correção de riscos baseados em identidade. / Crie e atribua automaticamente rótulos de confidencialidade aos dados.",
	  "Crie e atribua automaticamente rótulos de confidencialidade aos dados. / Investigue os riscos relacionados à autenticação do usuário. / Exporte a detecção de risco para utilitários de terceiros."
    ],
    a : 3
  },
  {
    q : "Que tipo de identidade é criada quando você registra um aplicativo no Active Directory (Azure AD)?",
    o : [
      "a user account",
      "a user-assigned managed identity",
      "a system-assigned managed identity",
      "a service principal"
    ],
    a : 3
  },
  {
    q : "Quando os padrões de segurança são habilitados para um locatário do Azure Active Directory (Azure AD), quais dois requisitos são impostos? Cada resposta correta apresenta uma solução completa. NOTA: Cada seleção correta vale um ponto.",
    o : [
      "Todos os usuários devem se autenticar de um dispositivo registrado. / Todos os usuários devem se autenticar usando o Windows Hello.",
      "Os administradores devem sempre usar a autenticação multifator do Azure (MFA). / Todos os usuários devem se autenticar de um dispositivo registrado.",
      "O registro de autenticação multifator do Azure (MFA) é necessário para todos os usuários. / Os administradores devem sempre usar a autenticação multifator do Azure (MFA).",
      "Todos os usuários devem se autenticar usando o login sem senha. / O registro de autenticação multifator do Azure (MFA) é necessário para todos os usuários.",
	  "Todos os usuários devem se autenticar usando o Windows Hello. / Todos os usuários devem se autenticar usando o login sem senha."
    ],
    a : 2
  },
  {
    q : "Você tem uma assinatura do Azure. Você precisa implementar a ativação de função com base em aprovação e com limite de tempo. O que você deve usar?",
    o : [
      "Windows Hello for Business",
      "Azure Active Directory (Azure AD) Identity Protection",
      "access reviews in Azure Active Directory (Azure AD)",
      "Azure Active Directory (Azure AD) Privileged Identity Management (PIM)"
    ],
    a : 3
  },
  {
    q : "Quais são as três declarações que descrevem com precisão os princípios orientadores da Zero Trust? Cada resposta correta apresenta uma solução completa. NOTA: Cada seleção correta vale um ponto.[B,C,D]",
    o : [
      "Defina o perímetro por localizações físicas. / Use a rede como o principal limite de segurança. / Sempre assuma que o sistema do usuário pode ser violado.",
      "Use a identidade como o limite de segurança principal. / Sempre verifique explicitamente as permissões de um usuário. / Defina o perímetro por localizações físicas.",
      "Sempre verifique explicitamente as permissões de um usuário. / Use a rede como o principal limite de segurança./ Defina o perímetro por localizações físicas.",
      "Sempre assuma que o sistema do usuário pode ser violado. / Use a identidade como o limite de segurança principal. / Sempre verifique explicitamente as permissões de um usuário.",
	  "Use a rede como o principal limite de segurança. / Sempre assuma que o sistema do usuário pode ser violado. / Use a identidade como o limite de segurança principal."
    ],
    a : 3
  },
  {
    q : "O que você pode especificar nos labels de sensibilidade do Microsoft 365?",
    o : [
      "por quanto tempo os arquivos devem ser preservados",
      "quando arquivar uma mensagem de e-mail",
      "qual marca d'água adicionar aos arquivos",
      "onde armazenar arquivos"
    ],
    a : 2
  },
  {
    q : "Quais são os três usos do Microsoft Cloud App Security? Cada resposta correta apresenta uma solução completa. NOTA: Cada seleção correta vale um ponto.",
    o : [
      "para descobrir e controlar o uso de shadow IT / para evitar vazamentos de dados para aplicativos não compatíveis e limitar o acesso a dados regulamentados / para fornecer autenticação de passagem para aplicativos locais",
      "para fornecer conexões seguras às máquinas virtuais do Azure / para evitar vazamentos de dados para aplicativos não compatíveis e limitar o acesso a dados regulamentados / para proteger informações confidenciais hospedadas em qualquer lugar na nuvem",
      "para proteger informações confidenciais hospedadas em qualquer lugar na nuvem / para descobrir e controlar o uso de shadow IT / para evitar vazamentos de dados para aplicativos não compatíveis e limitar o acesso a dados regulamentados ",
      "para fornecer autenticação de passagem para aplicativos locais / para proteger informações confidenciais hospedadas em qualquer lugar na nuvem / para fornecer conexões seguras às máquinas virtuais do Azure",
	  "para evitar vazamentos de dados para aplicativos não compatíveis e limitar o acesso a dados regulamentados / para descobrir e controlar o uso de shadow IT / para fornecer conexões seguras às máquinas virtuais do Azure"
    ],
    a : 2
  },
  {
    q : "O que você pode proteger usando a solução de proteção de informações no centro de conformidade do Microsoft 365?",
    o : [
      "computers from zero-day exploits",
      "users from phishing attempts",
      "files from malware and viruses",
      "sensitive data from being exposed to unauthorized users"
    ],
    a : 3
  },
  {
    q : "Em um fluxo de trabalho de descoberta eletrônica principal, o que você deve fazer antes de pesquisar conteúdo?",
    o : [
      "Create an eDiscovery hold.",
      "Run Express Analysis.",
      "Configure attorney-client privilege detection.",
      "Export and download results."
    ],
    a : 0
  },
  {
    q : "Qual recurso do Microsoft 365 você pode usar para impedir que os usuários enviem mensagens de email que contenham listas de clientes e seus números de cartão de crédito associados?",
    o : [
      "retention policies",
      "data loss prevention (DLP) policies",
      "conditional access policies",
      "information barriers"
    ],
    a : 1
  },
  {
    q : "Qual recurso do Azure Active Directory (Azure AD) você pode usar para impedir que dispositivos gerenciados pelo Microsoft Intune acessem recursos corporativos?",
    o : [
      "network security groups (NSGs)",
      "Azure AD Privileged Identity Management (PIM)",
      "conditional access policies",
      "resource locks"
    ],
    a : 2
  },
  {
    q : "O que você pode usar para fornecer detecção de ameaças para a Instância Gerenciada de SQL do Azure?",
    o : [
      "Microsoft Secure Score",
      "application security groups",
      "Azure Defender",
      "Azure Bastion"
    ],
    a : 2
  },
  {
    q : "Qual recurso fornece o recurso de detecção e resposta estendida (XDR) do Azure Sentinel?",
    o : [
      "integration with the Microsoft 365 compliance center",
      "support for threat hunting",
      "integration with Microsoft 365 Defender",
      "support for Azure Monitor Workbooks"
    ],
    a : 2
  },
  {
    q : "O que você pode usar para verificar anexos de e-mail e encaminhá-los aos destinatários somente se os anexos estiverem livres de malware?",
    o : [
      "Microsoft Defender for Office 365",
      "Microsoft Defender Antivirus",
      "Microsoft Defender for Identity",
      "Microsoft Defender for Endpoint"
    ],
    a : 0
  },
  {
    q : "Você planeja implementar uma estratégia de segurança e colocar várias camadas de defesa em uma infraestrutura de rede. Qual metodologia de segurança isso representa?",
    o : [
      "threat modeling",
      "identity as the security perimeter",
      "defense in depth",
      "the shared responsibility model"
    ],
    a : 2
  },
  {
    q : "Quais são os dois tipos de recursos que podem ser protegidos usando o Firewall do Azure? Cada resposta correta apresenta uma solução completa. NOTA: Cada seleção correta vale um ponto.",
    o : [
      "Azure virtual machines / Microsoft SharePoint Online sites",
      "Azure Active Directory (Azure AD) users / Microsoft Exchange Online inboxes",
      "Microsoft Exchange Online inboxes / Azure Active Directory (Azure AD) users",
      "Azure virtual networks / Azure virtual machines",
	  "Microsoft SharePoint Online sites / Microsoft Exchange Online inboxes"
    ],
    a : 3
  },
  {
    q : "Qual portal da Microsoft fornece informações sobre como a Microsoft gerencia privacidade, conformidade e segurança?",
    o : [
      "Microsoft Service Trust Portal",
      "Compliance Manager",
      "Microsoft 365 compliance center",
      "Microsoft Support"
    ],
    a : 0
  },
  {
    q : "Qual recurso do Microsoft Defender for Endpoint fornece a primeira linha de defesa contra ameaças cibernéticas, reduzindo a superfície de ataque?",
    o : [
      "automated remediation",
      "automated investigation",
      "advanced hunting",
      "network protection"
    ],
    a : 3
  },
  {
    q : "Qual serviço inclui o recurso de treinamento de simulação de ataque?",
    o : [
      "Microsoft Defender for Cloud Apps",
      "Microsoft Defender for Office 365",
      "Microsoft Defender for Identity",
      "Microsoft Defender for SQL"
    ],
    a : 1
  },
  {
    q : "Quais são os dois cartões disponíveis no portal do Microsoft 365 Defender? Cada resposta correta apresenta uma solução completa. NOTA: Cada seleção correta vale um ponto.",
    o : [
      "Users at risk / User Management",
      "Compliance Score / Devices at risk",
      "Devices at risk / Service Health",
      "Service Health / User Management",
	  "User Management / Users at risk"
    ],
    a : 1
  },
  {
    q : "A prevenção contra perda de dados do Microsoft 365 Endpoint (Endpoint DLP) pode ser usada em quais sistemas operacionais?",
    o : [
      "Windows 10 and iOS only",
      "Windows 10 and Android only",
      "Windows 10, Android, and iOS",
      "Windows 10 only"
    ],
    a : 0
  },
  {
    q : "O que você deve usar para garantir que os membros de um grupo do Azure Active Directory usem a autenticação multifator (MFA) ao entrar?",
    o : [
      "Azure Active Directory (Azure AD) Identity Protection",
      "a conditional access policy",
      "Azure role-based access control (Azure RBAC)",
      "Azure Active Directory (Azure AD) Privileged Identity Management (PIM)"
    ],
    a : 1
  },
  {
    q : "Quais são os três métodos de autenticação que podem ser usados pela autenticação multifator do Azure (MFA)? Cada resposta correta apresenta uma solução completa. NOTA: Cada seleção correta vale um ponto.[A,B,D]",
    o : [
      "phone call / email verification / security question",
      "text message (SMS) / phone call / Microsoft Authenticator app",
      "email verification / Microsoft Authenticator app / text message (SMS)",
      "Microsoft Authenticator app / security question / phone call",
	  "security question / text message (SMS) / email verification"
    ],
    a : 1
  },
  {
    q : "Quais são os clientes responsáveis ao avaliar a segurança em um modelo de serviços em nuvem de software como serviço (SaaS)?",
    o : [
      " applications",
      " network controls",
      " operating systems",
      " accounts and identities"
    ],
    a : 3
  },
  {
    q : "Você precisa criar uma política de prevenção contra perda de dados (DLP). O que você deve usar?",
    o : [
      " the Microsoft 365 admin center",
      " the Microsoft Endpoint Manager admin center",
      " the Microsoft 365 Defender portal",
      " the Microsoft 365 Compliance center"
    ],
    a : 0
  },
  {
    q : "O que é uma avaliação no Compliance Manager?",
    o : [
      " A grouping of controls from a specific regulation, standard or policy.",
      " Recommended guidance to help organizations align with their corporate standards.",
      " A dictionary of words that are not allowed in company documents.",
      " A policy initiative that includes multiple policies."
    ],
    a : 1
  },
  {
    q : "Você precisa manter uma cópia de todos os arquivos em um site do Microsoft SharePoint por um ano, mesmo que os usuários excluam os arquivos do site. O que você deve aplicar no site?",
    o : [
      " a data loss prevention (DLP) policy",
      " a retention policy",
      " an insider risk policy",
      " a sensitivity label policy"
    ],
    a : 1
  },
  {
    q : "O que você pode usar para provisionar recursos do Azure em várias assinaturas de maneira consistente?",
    o : [
      " Microsoft Defender for Cloud",
      " Azure Blueprints",
      " Microsoft Sentinel",
      " Azure Policy"
    ],
    a : 1
  },
  {
    q : "A quais dois recursos do Azure um grupo de segurança de rede (NSG) pode ser associado? Cada resposta correta apresenta uma solução completa. NOTA: Cada seleção correta vale um ponto.",
    o : [
      " a network interface / a resource group",
      " an Azure App Service web app / a virtual network subnet",
      " a virtual network / an Azure App Service web app",
      " a virtual network subnet / a network interface",
	  " a resource group / a virtual network"
    ],
    a : 4
  },
  {
    q : "O que você pode usar para exibir a pontuação segura da Microsoft para dispositivos?",
    o : [
      " Microsoft Defender for Cloud Apps",
      " Microsoft Defender for Endpoint",
      " Microsoft Defender for Identity",
      " Microsoft Defender for Office 365"
    ],
    a : 1
  },
  {
    q : "Qual recurso de conformidade você deve usar para identificar documentos que são currículos de funcionários?",
    o : [
      " pre-trained classifiers",
      " Content explorer",
      " Activity explorer",
      " eDiscovery"
    ],
    a : 2
  },
  {
    q : "Quais são os três métodos de autenticação suportados pelo Windows Hello para Empresas? Cada resposta correta apresenta uma solução completa.",
    o : [
      " fingerprint / facial recognition / PIN",
      " facial recognition / security question / email verification",
      " PIN / fingerprint / email verification",
	  " email verification / facial recognition / PIN",
      " security question / PIN / email verification"
    ],
    a : 2
  },
  {
    q : "O que você deve usar na central de segurança do Microsoft 365 para exibir as tendências de segurança e rastrear o status de proteção das identidades?",
    o : [
      " Attack simulator",
      " Reports",
      " Hunting",
      " Incidents"
    ],
    a : 1
  },
  {
    q : "Qual recurso do Azure Active Directory (Azure AD) você pode usar para fornecer acesso just-in-time (JIT) para gerenciar recursos do Azure?",
    o : [
      " conditional access policies",
      " Azure AD Identity Protection",
      " Azure AD Privileged Identity Management (PIM)",
      " authentication method policies"
    ],
    a : 2
  },
  {
    q : "Qual recurso do Azure Active Directory (Azure AD) você pode usar para avaliar a associação ao grupo e remover automaticamente os usuários que não exigem mais associação a um grupo?",
    o : [
      " access reviews",
      " managed identities",
      " conditional access policies",
      " Azure AD Identity Protection"
    ],
    a : 0
  },
  {
    q : "Algumas contas do Microsoft 365 (com assinatura do Enterprise E3) em sua organização estão comprometidas. Você precisa entender se o invasor acessou alguma informação confidencial na caixa de e-mail do usuário. É possível?",
    o : [
      "Sim",
      "Não"
    ],
    a : 1
  },
  {
    q : "Para proteger sua máquina virtual do Azure de ser excluída acidentalmente, você aplica um bloqueio de exclusão à VM. Mais tarde, seu gerente aplica um bloqueio somente leitura ao grupo de recursos pai da VM. Dado esse estado dos recursos do Azure, você pode anexar um novo disco à VM?",
    o : [
      "Sim",
      "Não"
    ],
    a : 1
  },
  {
    q : "Para proteger sua máquina virtual do Azure de ser excluída/modificada acidentalmente, você aplica um bloqueio somente leitura na VM. Você pode fazer login na VM por meio do Remote Desktop Protocol (RDP)? ",
    o : [
      "Sim",
      "Não"
    ],
    a : 0
  },
  {
    q : "É possível excluir um grupo de recursos que possui recursos com bloqueios de recursos somente leitura?",
    o : [
      "Sim",
      "Não"
    ],
    a : 1
  },
  {
    q : "Quais dos seguintes tipos de ações de melhoria fornecem os pontos mais altos para a pontuação de conformidade?",	
    o : [
      "Ações obrigatórias e preventivas",
      "Ações discricionárias e corretivas",
      "Ações discricionárias e de detetive",
      "Ações obrigatórias e de detetive"
    ],
    a : 0
  },
  {
    q : "Como os incidentes são definidos no Microsoft 365 Defender?",
    o : [
      "Como uma coleção de ataques correlacionados",
      "Como uma coleção de eventos correlacionados",
      "Como uma coleção de atividades correlacionadas",
      "Como uma coleção de alertas correlacionados"
    ],
    a : 3
  },
  {
    q : "Como administrador líder, é importante convencer sua equipe a começar a usar o Microsoft Sentinel. Você preparou uma apresentação. Quais são as quatro áreas de operação de segurança do Microsoft Sentinel que abrangem esse escopo?",
    o : [
      "Coletar, detectar, investigar e reparar",
      "Coletar, detectar, investigar e redirecionar",
      "Coletar, decifrar, investigar, realinhar",
      "Coletar, detectar, investigar e responder"
    ],
    a : 3
  }
  ],

  // (A2) HTML ELEMENTS
  hWrap: null, // HTML quiz container
  hQn: null, // HTML question wrapper
  hAns: null, // HTML answers wrapper

  // (A3) GAME FLAGS
  now: 0, // current question
  score: 0, // current score

  // (B) INIT QUIZ HTML
  init: () => {
    // (B1) WRAPPER
    quiz.hWrap = document.getElementById("quizWrap");

    // (B2) QUESTIONS SECTION
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    // (B3) ANSWERS SECTION
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

    // (B4) GO!
    quiz.draw();
  },

  // (C) DRAW QUESTION
  draw: () => {
    // (C1) QUESTION
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;

    // (C2) OPTIONS
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", () => { quiz.select(label); });
      quiz.hAns.appendChild(label);
    }
  },

  // (D) OPTION SELECTED
  select: (option) => {
    // (D1) DETACH ALL ONCLICK
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    // (D2) CHECK IF CORRECT
    let correct = option.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
      quiz.score++;
      option.classList.add("correct");
    } else {
      option.classList.add("wrong");
    }

    // (D3) NEXT QUESTION OR END GAME
    quiz.now++;
    setTimeout(() => {
      if (quiz.now < quiz.data.length) { quiz.draw(); }
      else {
        quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
        quiz.hAns.innerHTML = "";
      }
    }, 1000);
  },

  // (E) RESTART QUIZ
  reset : () => {
    quiz.now = 0;
    quiz.score = 0;
    quiz.draw();
  }
};
window.addEventListener("load", quiz.init);
