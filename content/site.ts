// Todos os textos do site ficam aqui. Edite à vontade.

// Troque pelo número com DDI + DDD, só dígitos (ex.: 5593999999999)
export const WHATSAPP_NUMBER = "5593999999999";
const WA_MSG = "Olá! Quero agendar uma demonstração do Ponto Flow.";
export const whatsappLink = (msg: string = WA_MSG) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const site = {
  name: "Ponto Flow",
  url: "https://pontoflow.com.br", // troque pelo domínio final
  title: "Ponto Flow — controle de ponto simples e auditável",
  description:
    "Ponto pelo celular com QR Code da loja, foto e localização. Banco de horas, escalas e resumo diário no Telegram do gestor. Andres Technologies, Santarém-PA.",
  contact: {
    whatsappLabel: "(93) 99999-9999", // [confirmar]
    email: "contato@andrestech.com.br", // [confirmar]
    instagram: "@andrestech", // [confirmar]
    instagramUrl: "https://instagram.com/andrestech", // [confirmar]
    city: "Santarém - PA",
  },
};

export const nav = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Planos", href: "#planos" },
  { label: "Dúvidas", href: "#faq" },
];

export const hero = {
  eyebrow: "Gestão de jornada e controle interno",
  title: "O ponto da sua equipe,",
  highlight: "simples e auditável.",
  subtitle:
    "Batida por QR Code do local, com foto e localização. E todo fim de dia, um resumo no Telegram do gestor.",
  primary: "Agendar demonstração",
  secondary: "Ver planos",
  badges: ["Sem relógio físico", "No celular do funcionário", "Suporte local"],
};

export const pains = {
  title: "Ainda controlando ponto do jeito antigo?",
  subtitle: "Os problemas de sempre custam tempo, dinheiro e dor de cabeça.",
  items: [
    { icon: "paper", title: "Papel e planilha", text: "Folha rasurada, horário “redondo” e planilha que ninguém confia." },
    { icon: "clock", title: "Horas perdidas conferindo", text: "Fechar o mês vira um mutirão de conferência manual." },
    { icon: "alert", title: "Risco trabalhista", text: "Sem registro confiável, sua empresa fica exposta em uma reclamação." },
    { icon: "store", title: "Sem visão das lojas", text: "Com várias unidades, você não sabe quem chegou, onde e quando." },
  ],
};

export const steps = {
  title: "Como funciona",
  subtitle: "Três passos. Nenhum equipamento novo.",
  items: [
    { icon: "qr", title: "Lê o QR Code da loja", text: "O funcionário abre o app no próprio celular e escaneia o QR Code fixado no local." },
    { icon: "camera", title: "Foto e localização", text: "O app registra uma foto de verificação e a geolocalização no momento da batida." },
    { icon: "telegram", title: "Resumo no Telegram", text: "O gestor recebe o resumo diário da equipe direto no Telegram, sem precisar abrir nada." },
  ],
};

export const features = {
  title: "Tudo o que você precisa para gerir a jornada",
  subtitle: "Registro por foto, localização e auditoria — do balcão ao financeiro.",
  items: [
    { icon: "qr", title: "QR Code por loja", text: "Cada unidade tem seu código. A batida só vale no lugar certo." },
    { icon: "camera", title: "Foto de verificação", text: "Selfie no registro para evitar batida por outra pessoa." },
    { icon: "pin", title: "Geolocalização na batida", text: "Saiba exatamente de onde cada registro foi feito." },
    { icon: "wallet", title: "Banco de horas com extrato", text: "Saldo atualizado e extrato claro para gestor e funcionário." },
    { icon: "check", title: "Ajustes com aprovação", text: "Correções passam por aprovação e ficam no histórico." },
    { icon: "telegram", title: "Resumo diário no Telegram", text: "Cada gestor recebe o resumo das suas lojas." },
    { icon: "users", title: "Várias lojas e perfis", text: "Perfis de acesso para dono, gerente e funcionário." },
    { icon: "calendar", title: "Escalas, feriados e férias", text: "Monte escalas e acompanhe ausências programadas." },
    { icon: "chart", title: "Custo da folha", text: "Visão do custo de horas por loja e por período." },
    { icon: "shield", title: "Controle de EPI por IA", text: "A foto da batida ajuda a verificar o uso de equipamentos de proteção." },
  ],
};

export const audience = {
  title: "Feito para quem tem equipe na rua, no balcão ou no chão de fábrica",
  items: ["Lojas", "Redes de varejo", "Oficinas", "Indústrias", "Empresas com vários locais"],
};

export const differentials = {
  title: "Por que o Ponto Flow",
  items: [
    { icon: "rocket", title: "Implantação rápida", text: "Sua equipe batendo ponto em poucos dias." },
    { icon: "heart", title: "Suporte local", text: "Atendimento de gente de Santarém, que conhece sua realidade." },
    { icon: "clock", title: "Sem relógio físico", text: "Nada de equipamento caro, bobina ou manutenção." },
    { icon: "phone", title: "No celular do funcionário", text: "Usa o aparelho que a equipe já tem no bolso." },
  ],
};

export const pricing = {
  title: "Planos e preços",
  subtitle: "Sem fidelidade. Comece pequeno e cresça com a gente.",
  plans: [
    {
      name: "Essencial",
      limit: "Até 10 funcionários e 1 loja",
      price: "R$ 100",
      period: "/mês",
      highlight: false,
      features: ["QR Code da loja", "Foto de verificação", "Banco de horas", "Resumo diário no Telegram"],
    },
    {
      name: "Profissional",
      limit: "Até 30 funcionários e até 3 lojas",
      price: "R$ 200",
      period: "/mês",
      highlight: true,
      features: ["Tudo do Essencial", "Escalas", "Férias e feriados", "Ajustes com aprovação"],
    },
    {
      name: "Rede",
      limit: "Acima de 30 funcionários ou mais de 3 lojas",
      price: "R$ 7",
      period: "/funcionário/mês",
      note: "Mínimo de R$ 300/mês",
      highlight: false,
      features: ["Tudo do Profissional", "Custo da folha", "Controle de EPI por IA"],
    },
  ],
  extras: [
    "Implantação: R$ 300 por loja — isenta no plano anual.",
    "Plano anual: 2 meses grátis.",
  ],
  quote: "Uma única reclamação trabalhista por ponto mal registrado custa mais que anos de mensalidade.",
  cta: "Falar no WhatsApp",
};

export const faq = {
  title: "Perguntas frequentes",
  items: [
    { q: "Preciso comprar relógio de ponto?", a: "Não. O Ponto Flow funciona no celular do funcionário, lendo o QR Code fixado na loja." },
    { q: "Funciona sem internet?", a: "[confirmar] Descreva aqui como o app se comporta sem conexão." },
    { q: "Os dados ficam seguros?", a: "Sim. Os dados são armazenados com segurança e tratados conforme a LGPD, com acesso controlado por perfil." },
    { q: "Posso ter várias lojas?", a: "Sim. Cada loja tem seu QR Code e você define quais gestores acompanham cada uma." },
    { q: "O Ponto Flow substitui o registro oficial?", a: "O Ponto Flow é uma ferramenta de gestão de jornada e controle interno, com registro por foto, localização e auditoria. Converse com seu contador sobre as exigências do seu caso." },
  ],
};

export const finalCta = {
  title: "Pronto para organizar o ponto da sua equipe?",
  subtitle: "Agende uma demonstração de 15 minutos e veja o Ponto Flow funcionando.",
  button: "Agendar demonstração",
};
