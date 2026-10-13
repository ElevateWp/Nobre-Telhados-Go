export interface DentistProfile {
  id: string;
  slug: string;
  name: string;
  title: string;
  qualifications: string;
  specialization: string;
  experienceYears: number;
  bio: string;
  philosophy: string;
  education: string[];
  memberships: string[];
  specialties: string[];
  image: string;
  warmImage: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  navLabel: string;
  tagline: string;
  shortDescription: string;
  clinicalExplanation: string;
  whoNeeds: string[];
  benefits: string[];
  indications: { condition: string; explanation: string }[];
  procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[];
  recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[];
  costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string };
  beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string };
  assignedDentistId: string;
  faqs: { question: string; answer: string; relatedSlug?: string }[];
}

export interface ClinicInformation {
  name: string;
  legalName: string;
  tagline: string;
  establishedYear?: number;
  primaryLocation: {
    street: string;
    suite: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    directions: string;
    landmarks: string;
    coordinates?: { lat: number; lng: number };
  };
  contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string };
  identityHighlights: string[];
  schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[];
  accreditations: string[];
}

export const CLINIC_INFO: ClinicInformation = {
  name: 'Nobre Telhados Go',
  legalName: 'Nobre Telhados Go',
  tagline: 'Reformas e cuidados para o seu telhado.',
  primaryLocation: {
    street: '',
    suite: '',
    city: '',
    state: 'Goiás',
    postalCode: '',
    country: 'BR',
    directions: 'Atendimento em Goiás. Consulte a equipe sobre a disponibilidade na sua região.',
    landmarks: '',
  },
  contact: {
    phone: '+55 62 99465-3540',
    emergencyPhone: '+55 62 99465-3540',
    whatsapp: '+55 62 99465-3540',
    email: '',
  },
  identityHighlights: ['Reformas de telhados', 'Limpeza de telhados e calhas', 'Reparos'],
  schedule: [
    { day: 'Atendimento', hours: 'A partir das 6h30 · confirme por telefone' },
  ],
  verifiedStats: [
    { value: 5, suffix: '.0', label: 'Nota no Google', description: 'Nota informada no perfil do Google.' },
    { value: 6, suffix: '', label: 'Avaliações no Google', description: 'Avaliações informadas no perfil do Google.' },
  ],
  accreditations: [],
};

export const DENTISTS: DentistProfile[] = [
  {
    id: 'roofing-team',
    slug: 'our-doctor',
    name: 'Equipe Nobre Telhados Go',
    title: 'Empresa de serviços para telhados',
    qualifications: 'Atendimento em Goiás',
    specialization: 'Reformas, reparos e limpeza de telhados',
    experienceYears: 0,
    bio: 'Serviços profissionais para telhados, incluindo reformas, reparos e limpeza de telhados e calhas.',
    philosophy: 'Atendimento ágil, cordial e pontual, com orçamento antes da execução do serviço.',
    education: [],
    memberships: [],
    specialties: ['Reforma de telhados', 'Limpeza de telhados', 'Limpeza de calhas', 'Reparos'],
    image: '/images/nobre-roof-06.jpg',
    warmImage: '/images/nobre-roof-06.jpg',
  },
];

export interface CustomerTestimonial {
  name: string;
  rating: number;
  quote: string;
  age: string;
  source: string;
}

// Keep this to the positive review text supplied by the business owner.
export const TESTIMONIALS: CustomerTestimonial[] = [
  {
    name: 'Evandro Stanger',
    rating: 5,
    quote: 'Excelente profissional. Serviço rápido, atencioso e muito pontual. Depois do orçamento, o serviço foi realizado rapidamente. Recomendo a todos.',
    age: 'há 2 meses',
    source: 'Avaliação no Google',
  },
  {
    name: 'Leonardo Costa Borges',
    rating: 5,
    quote: 'Liguei para fazer uma limpeza geral no telhado e nas calhas. Resolveram meu problema.',
    age: 'há 1 mês',
    source: 'Avaliação no Google',
  },
  {
    name: 'werk dresdean',
    rating: 5,
    quote: 'Excelente profissional, cumpriu o prazo. Recomendo.',
    age: 'há 1 mês',
    source: 'Avaliação no Google',
  },
];

const projectPhotos = [
  '/images/nobre-roof-01.jpg', '/images/nobre-roof-02.jpg', '/images/nobre-roof-03.jpg',
  '/images/nobre-roof-04.jpg', '/images/nobre-roof-05.jpg', '/images/nobre-roof-06.jpg',
  '/images/nobre-roof-07.jpg', '/images/nobre-roof-08.jpg', '/images/nobre-roof-09.jpg',
  '/images/nobre-roof-10.jpg', '/images/nobre-roof-11.png',
];

const makeService = (
  slug: string,
  name: string,
  navLabel: string,
  tagline: string,
  description: string,
  problems: string[],
  benefits: string[],
  faqs: { question: string; answer: string }[],
  photoIndex: number,
): ServiceDetail => ({
  slug,
  name,
  navLabel,
  tagline,
  shortDescription: description,
  clinicalExplanation: description,
  whoNeeds: problems,
  benefits,
  indications: problems.map((condition) => ({ condition, explanation: 'Esse sinal merece uma avaliação profissional para entender a origem, as condições do telhado e as opções adequadas para o imóvel.' })),
  procedureSteps: [
    { stepNumber: 1, title: 'Avaliação do telhado', duration: 'Com agendamento', description: 'A equipe avalia o telhado e identifica os pontos que precisam de atenção.', clinicalDetails: 'A avaliação ajuda a definir o serviço adequado para o imóvel.' },
    { stepNumber: 2, title: 'Orçamento claro', duration: 'Após a avaliação', description: 'O serviço recomendado e os custos são explicados antes do início.', clinicalDetails: 'Prazo e valor são confirmados de acordo com o trabalho necessário.' },
    { stepNumber: 3, title: 'Execução do serviço', duration: 'Conforme combinado', description: 'A equipe realiza o serviço combinado com cuidado pelo imóvel.', clinicalDetails: 'O acesso e os cuidados de segurança são acertados antes.' },
    { stepNumber: 4, title: 'Revisão final', duration: 'Ao concluir', description: 'A equipe revisa o trabalho e compartilha orientações de manutenção.', clinicalDetails: 'A conclusão segue o escopo combinado com você.' },
  ],
  recoveryTimeline: [
    { period: 'Antes do serviço', expectedSensations: 'A equipe avalia o telhado e combina o escopo com você.', careProtocol: 'Envie fotos e conte quando o problema acontece.' },
    { period: 'Durante o serviço', expectedSensations: 'O prazo depende do acesso, dos materiais e do trabalho necessário.', careProtocol: 'Mantenha pessoas e animais afastados da área de trabalho.' },
    { period: 'Após a conclusão', expectedSensations: 'A equipe explica o que foi realizado.', careProtocol: 'Siga as orientações de manutenção fornecidas pela equipe.' },
  ],
  costTransparency: {
    baseRange: 'Solicite um orçamento após a avaliação.',
    factors: ['Tipo e condição do telhado', 'Acesso e altura', 'Materiais e extensão do serviço'],
    whatIsIncluded: ['Escopo combinado', 'Descrição dos materiais previstos', 'Orientações sobre o serviço concluído'],
    note: 'Valores, prazos e disponibilidade são confirmados pela equipe após a avaliação.',
  },
  beforeAfterCase: {
    category: name,
    clinicalContext: 'Fotos de serviços de telhados realizados pela Nobre Telhados Go.',
    beforeLabel: 'Roofing project',
    afterLabel: 'Roofing project',
    beforeImage: projectPhotos[photoIndex % projectPhotos.length],
    afterImage: projectPhotos[(photoIndex + 1) % projectPhotos.length],
    timeframe: 'Project photos',
  },
  assignedDentistId: 'roofing-team',
  faqs: [
    ...faqs,
    {
      question: `Como é definido o serviço de ${name.toLowerCase()}?`,
      answer: 'A equipe considera os sinais observados, o tipo e as condições do telhado, o acesso e o escopo necessário. As opções são explicadas antes de iniciar o trabalho.',
    },
    {
      question: 'O orçamento pode ser informado antes da avaliação?',
      answer: 'O valor depende das condições do telhado, do acesso e da extensão do serviço. A equipe confirma o orçamento após entender o escopo necessário.',
    },
    {
      question: 'O que devo informar ao pedir uma avaliação?',
      answer: 'Conte quando o problema aparece, quais áreas parecem afetadas e se já houve algum reparo. Fotos feitas de um local seguro também podem ajudar.',
    },
    {
      question: 'Preciso subir no telhado para mostrar o problema?',
      answer: 'Não. Evite subir no telhado. Descreva o que consegue observar do chão ou de dentro do imóvel e combine com a equipe uma forma segura de avaliar o local.',
    },
  ],
});

export const SERVICES: ServiceDetail[] = [
  makeService(
    'roof-repairs', 'Reparos de telhados', 'Reparos de telhados',
    'Reparos para telhas danificadas, infiltrações e outros pontos do telhado.',
    'A equipe avalia telhas, junções e acabamentos para identificar pontos que precisam de reparo.',
    ['Infiltrações durante a chuva', 'Manchas de umidade no teto', 'Telhas soltas ou quebradas'],
    ['Avaliar a origem aparente da infiltração', 'Verificar telhas e junções', 'Combinar o escopo do reparo antes do início'],
    [{ question: 'Como encontrar a origem de uma infiltração?', answer: 'A origem pode não estar diretamente acima da mancha interna. Uma avaliação do telhado e das junções ajuda a identificar por onde a água pode estar entrando.' }], 0,
  ),
  makeService(
    'gutter-cleaning', 'Limpeza de calhas', 'Limpeza de calhas',
    'Limpeza de calhas para remover folhas, sujeira e resíduos acumulados.',
    'A limpeza ajuda a liberar o fluxo de água e a identificar danos visíveis nas calhas.',
    ['Calhas obstruídas ou transbordando', 'Resíduos acumulados', 'Água escorrendo perto de paredes e beirais'],
    ['Verificar o escoamento e danos visíveis', 'Identificar junções que precisam de atenção', 'Planejar a limpeza da linha do telhado'],
    [{ question: 'Com que frequência devo verificar as calhas?', answer: 'A frequência depende das árvores próximas, das chuvas e do imóvel. Verificações regulares ajudam a identificar obstruções e danos visíveis.' }], 3,
  ),
  makeService(
    'roof-renovation', 'Reforma de telhados', 'Reforma de telhados',
    'Reformas de telhados planejadas para as condições do imóvel.',
    'A avaliação considera as condições do telhado e ajuda a definir o serviço necessário.',
    ['Cobertura desgastada ou danificada', 'Problemas recorrentes em diferentes pontos', 'Planejamento de uma reforma completa'],
    ['Avaliar o telhado existente', 'Combinar materiais e escopo adequados', 'Planejar a execução do serviço'],
    [{ question: 'Quando um telhado pode precisar de reforma?', answer: 'A opção adequada depende das condições, dos materiais e do histórico do telhado. Uma avaliação ajuda a esclarecer se reparos ou uma reforma são indicados.' }], 10,
  ),
  makeService(
    'waterproofing', 'Impermeabilização e infiltrações', 'Infiltrações',
    'Avaliação de infiltrações e pontos de entrada de água.',
    'A equipe verifica a superfície, a drenagem e as junções para entender o que precisa de atenção.',
    ['Infiltrações em coberturas', 'Desgaste ou danos visíveis', 'Pontos de drenagem que precisam de atenção'],
    ['Avaliar a cobertura e a drenagem', 'Identificar junções que precisam de atenção', 'Combinar a preparação e o escopo do serviço'],
    [{ question: 'Uma infiltração no telhado pode ser reparada?', answer: 'A solução depende da superfície, das condições e da origem da infiltração. Uma avaliação ajuda a entender se um reparo é adequado.' }], 12,
  ),
  makeService(
    'roof-cleaning', 'Limpeza de telhados', 'Limpeza de telhados',
    'Limpeza profissional de telhados e remoção de resíduos.',
    'O tipo de limpeza é combinado após avaliar o telhado, o acesso e as condições do imóvel.',
    ['Resíduos acumulados no telhado', 'Desgaste visível ou componentes soltos', 'Manutenção preventiva do telhado'],
    ['Identificar áreas que precisam de atenção', 'Priorizar os serviços conforme as condições', 'Planejar a manutenção do telhado'],
    [{ question: 'A avaliação exige acesso ao telhado?', answer: 'A forma de avaliar depende do imóvel e das condições de segurança. A equipe combina uma abordagem adequada antes do serviço.' }], 1,
  ),
  makeService(
    'storm-damage', 'Reparo após tempestades', 'Reparo após tempestades',
    'Avaliação e reparos em telhados após ventos e chuvas fortes.',
    'A equipe verifica telhas deslocadas, infiltrações e acabamentos que precisam de atenção.',
    ['Telhas deslocadas pelo vento', 'Infiltrações após chuva forte', 'Calhas ou acabamentos soltos'],
    ['Identificar danos visíveis', 'Priorizar os pontos de entrada de água', 'Combinar opções de reparo adequadas'],
    [{ question: 'O que fazer se o telhado começar a vazar durante uma tempestade?', answer: 'Afaste pertences da água e recolha goteiras se for seguro. Não suba em um telhado molhado nem toque em instalações elétricas atingidas pela água.' }], 5,
  ),
];

export interface EmergencyCondition {
  id: string;
  title: string;
  urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)';
  symptoms: string[];
  immediateAction: string[];
  clinicTreatment: string;
}

export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  { id: 'active-leak', title: 'Active roof leak', urgency: 'Same-Day (2–6 hours)', symptoms: ['Water dripping through the ceiling', 'A damp patch growing during rain'], immediateAction: ['Move people and belongings away from the wet area.', 'If safe, collect dripping water. Keep away from electrical fittings affected by water.', 'Do not climb onto the roof during rain.'], clinicTreatment: 'Assessment of the leak and the repair options once the property can be accessed safely.' },
  { id: 'storm-damage', title: 'Roof tiles displaced by wind', urgency: 'Urgent (Within 24 hours)', symptoms: ['Tiles on the ground or out of place', 'Areas of the roof exposed'], immediateAction: ['Keep clear of loose materials.', 'Photograph visible damage from the ground if safe.', 'Do not climb onto the roof or try to replace tiles yourself.'], clinicTreatment: 'Inspection of the affected roof areas when access is safe.' },
  { id: 'ceiling-water', title: 'Water near electrical fittings', urgency: 'Immediate (0–2 hours)', symptoms: ['Dampness near lights or sockets', 'Ceiling sagging or changing shape'], immediateAction: ['Leave the affected area and do not touch wet electrical equipment.', 'If there may be electrical danger, contact a qualified professional to isolate the power.', 'Seek emergency assistance if anyone or the property is in immediate danger.'], clinicTreatment: 'Make the property safe first; the roof can be assessed once the area is secure.' },
];

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  lastUpdated: string;
  authorId: string;
  excerpt: string;
  leadImage: string;
  relatedServiceSlug: string;
  content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'roof-leak-signs', title: 'Como identificar sinais de infiltração no telhado', category: 'Cuidados com o telhado', readTime: '3 min de leitura', publishDate: '2026-10-13', lastUpdated: '2026-10-13', authorId: 'our-doctor',
    excerpt: 'Manchas no teto e goteiras podem indicar que a cobertura precisa de avaliação.', leadImage: '/images/nobre-roof-02.jpg', relatedServiceSlug: 'roof-repairs',
    content: { intro: 'Sinais de umidade dentro de casa podem ter diferentes origens. Uma avaliação do telhado ajuda a verificar telhas, junções e outros pontos por onde a água pode entrar.', sections: [
      { heading: 'Observe os sinais com segurança', body: 'Anote quando a mancha ou goteira aparece e fotografe apenas o que for possível ver do chão ou de dentro do imóvel. Não suba em um telhado molhado.' },
      { heading: 'Peça uma avaliação', body: 'Compartilhe as informações com a equipe para conversar sobre uma avaliação e os possíveis reparos.' },
    ], faqs: [{ question: 'A origem da infiltração fica sempre acima da mancha?', answer: 'Não necessariamente. A água pode percorrer a cobertura antes de aparecer no teto. Uma avaliação ajuda a investigar os pontos de entrada.' }] },
  },
  {
    slug: 'gutter-maintenance', title: 'Por que manter as calhas limpas', category: 'Manutenção preventiva', readTime: '3 min de leitura', publishDate: '2026-10-13', lastUpdated: '2026-10-13', authorId: 'our-doctor',
    excerpt: 'Folhas e resíduos podem bloquear o escoamento. Saiba quando pedir uma limpeza profissional.', leadImage: '/images/nobre-roof-01.jpg', relatedServiceSlug: 'gutter-cleaning',
    content: { intro: 'Calhas sem manutenção podem acumular folhas e resíduos. A condição das calhas e a necessidade de limpeza variam conforme o imóvel e o entorno.', sections: [
      { heading: 'Fique atento ao escoamento', body: 'Transbordamento e resíduos visíveis são sinais de que vale solicitar uma avaliação. Evite subir em escadas ou no telhado sem os equipamentos e o treinamento adequados.' },
      { heading: 'Combine o serviço com segurança', body: 'Converse com a equipe sobre o acesso ao imóvel e as condições das calhas antes de combinar a limpeza.' },
    ] },
  },
  {
    slug: 'when-to-renovate-a-roof', title: 'Quando considerar uma reforma no telhado', category: 'Reformas', readTime: '3 min de leitura', publishDate: '2026-10-13', lastUpdated: '2026-10-13', authorId: 'our-doctor',
    excerpt: 'Danos recorrentes ou desgaste visível podem justificar uma avaliação da cobertura.', leadImage: '/images/nobre-roof-07.jpg', relatedServiceSlug: 'roof-renovation',
    content: { intro: 'Telhas desgastadas, peças soltas ou problemas que voltam a aparecer podem indicar a necessidade de avaliar a cobertura. A solução adequada depende do estado e dos materiais do telhado.', sections: [
      { heading: 'Observe sem se expor a riscos', body: 'Registre danos que consiga ver do chão e evite caminhar sobre as telhas. O acesso seguro deve ser avaliado por profissionais.' },
      { heading: 'Entenda o escopo antes de começar', body: 'Peça uma avaliação e converse sobre o serviço recomendado, os materiais e o prazo antes de autorizar o trabalho.' },
    ] },
  },
  {
    slug: 'storm-damage-safety', title: 'O que fazer após danos causados por tempestade', category: 'Segurança', readTime: '3 min de leitura', publishDate: '2026-10-13', lastUpdated: '2026-10-13', authorId: 'our-doctor',
    excerpt: 'Cuidados práticos para manter pessoas e bens em segurança enquanto o telhado é avaliado.', leadImage: '/images/nobre-roof-05.jpg', relatedServiceSlug: 'storm-damage',
    content: { intro: 'Ventos fortes e chuva podem deslocar telhas e deixar partes da cobertura expostas. Priorize a segurança e peça orientação profissional antes de qualquer reparo.', sections: [
      { heading: 'Mantenha distância de partes soltas', body: 'Afaste pessoas e animais da área afetada. Se for seguro, fotografe os danos visíveis do chão para compartilhar com a equipe.' },
      { heading: 'Não suba no telhado', body: 'Não tente reparar a cobertura durante a chuva ou em condições inseguras. Combine uma avaliação profissional quando o acesso estiver seguro.' },
    ] },
  },
];
