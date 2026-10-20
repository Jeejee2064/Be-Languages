import data from './data.json'

const SITE = 'https://www.be-languages.com'

// Online classes pages: aimed at the whole of Panama, not only Bocas del Toro.
// Pricing plans come from the existing in-person pages (same packages, taught live by video call).
export const ONLINE_PAGES = {
  enSpanish: {
    lang: 'en', subject: 'spanish', alt: 'onlineSpanish',
    path: '/online-spanish-classes-panama',
    pairPath: '/es/clases-de-espanol-en-linea-panama',
    metaTitle: 'Online Spanish Classes in Panama | Live 1-on-1 | Be Languages',
    metaDescription: 'Live 1-on-1 online Spanish classes anywhere in Panama, from Panama City to Boquete. Real Panamanian Spanish, all levels, flexible schedule. From $125.',
    keywords: [
      'online Spanish classes Panama',
      'Spanish lessons online Panama',
      'learn Spanish online Panama',
      'online Spanish tutor Panama',
      'Spanish classes Panama City',
      'Spanish lessons Boquete',
      'Spanish for expats Panama online',
      'Spanish classes for digital nomads Panama',
      'Panamanian Spanish online',
    ],
    serviceName: 'Online Spanish Classes in Panama',
    serviceDescription: 'Live one-on-one online Spanish classes with a certified local instructor, for expats, digital nomads and travelers anywhere in Panama.',
    inLanguage: 'en',
    data: {
      pricingPlans: data.enSpanish.pricingPlans,
      classTopics: [
        { title: 'Settling In Panama', items: ['Banks, utilities and phone plans', 'Talking to your landlord', 'Residency and paperwork vocabulary', 'Pharmacy and doctor visits', 'Dealing with contractors'] },
        { title: 'Everyday Panamanian Spanish', items: ['How Panamanians really greet', 'Local slang and expressions', 'Understanding fast speech', 'Tú vs. usted in practice', 'Words that differ from other countries'] },
        { title: 'Out and About', items: ['Taxis, buses and the metro', 'Ordering food and drinks', 'Shopping and bargaining', 'Asking for directions', 'Emergencies'] },
        { title: 'Work and Remote Life', items: ['Calls and emails in Spanish', 'Introducing yourself professionally', 'Clients and colleagues', 'Phone conversations', 'Business basics'] },
        { title: 'Grammar That Matters', items: ['Present, past and future essentials', 'Ser vs. estar', 'Verb conjugation made simple', 'Pronunciation practice', 'Fixing your common mistakes'] },
        { title: 'Connecting With People', items: ['Small talk and making friends', 'Dating and relationships', 'Talking about your story and family', 'Neighbors and community', 'Humor and culture'] },
      ],
    },
    crumb: 'Online Spanish classes',
    title: 'Online Spanish Classes in Panama',
    lead: "Learn Spanish live, one-on-one, from wherever you are in Panama. Whether you just moved to Panama City, bought a place in Chiriquí, or work remotely from the coast, you get a certified local instructor and Spanish you can use the same day: at the pharmacy, with your landlord, in the taxi.",
    primary: 'Book a Class', secondary: 'What You\'ll Learn',
    facts: ['Live 1-on-1 video lessons', 'Flexible schedule, Panama time (UTC−5)', 'All levels, personalized to your goals'],
    factPrice: 'Starting at',
    topics: { eyebrow: "What You'll Learn", title: 'Spanish for', accent: 'Life in Panama', intro: 'Every lesson is built around your goals and your daily life in Panama, from the first greeting to confident conversations.' },
    pricing: { eyebrow: 'Classes & Packages', title: 'Simple,', accent: 'Transparent Pricing', intro: 'The same flexible packages as in-person classes, taught live over video call.' },
    faq: {
      eyebrow: 'Questions', title: 'Online Spanish Classes,', accent: 'Answered',
      items: [
        ['Can I take Spanish classes online from anywhere in Panama?', 'Yes. Lessons are live, one-on-one video calls, so you can join from Panama City, David, Boquete, Coronado, Santa Catalina, Pedasí, Bocas del Toro or anywhere else with a stable internet connection. You can also join from abroad.'],
        ['How much do online Spanish classes cost?', 'Online lessons use the same packages as in-person classes: $125 for the 1-week crash course (5 hours), $150 for the 3-week Island Flow Plan (6 hours), $180 for the monthly Steady Surf Plan (8 hours) and $320 per month for two people (Buddy Boost).'],
        ['Is it Panamanian Spanish or textbook Spanish?', "Both. You get solid grammar foundations, but lessons center on how Spanish is actually spoken in Panama, including the expressions and vocabulary you will hear every day."],
        ['What do I need to take a class online?', 'A computer, tablet or phone with a camera and a stable internet connection. Headphones help. We agree on the video platform that works best for you.'],
        ["I'm a complete beginner. Is that okay?", 'Absolutely. Every program is personalized to your level and goals, from your first words to advanced conversation.'],
        ['Can I schedule lessons around my work?', 'Yes. Lesson times are flexible and arranged with you during class hours, Monday to Saturday. Panama is on a single time zone (UTC−5) all year, with no daylight saving changes.'],
      ],
    },
  },

  esSpanish: {
    lang: 'es', subject: 'spanish', alt: 'onlineSpanish',
    path: '/es/clases-de-espanol-en-linea-panama',
    pairPath: '/online-spanish-classes-panama',
    metaTitle: 'Clases de Español en Línea en Panamá | 1 a 1 | Be Languages',
    metaDescription: 'Clases de español en línea, en vivo y 1 a 1, en todo Panamá: Ciudad de Panamá, Boquete, Chiriquí. Español panameño, todos los niveles. Desde $125.',
    keywords: [
      'clases de español en línea Panamá',
      'clases de español online Panamá',
      'aprender español online Panamá',
      'profesora de español online Panamá',
      'clases de español Ciudad de Panamá',
      'clases de español Boquete',
      'español para extranjeros Panamá',
      'español para expatriados Panamá online',
      'clases de español por videollamada',
    ],
    serviceName: 'Clases de Español en Línea en Panamá',
    serviceDescription: 'Clases de español en línea, en vivo y personalizadas, con instructora local certificada, para expatriados, nómadas digitales y viajeros en todo Panamá.',
    inLanguage: 'es',
    data: {
      pricingPlans: data.esSpanish.pricingPlans,
      classTopics: [
        { title: 'Instalarte en Panamá', items: ['Bancos, servicios y planes de teléfono', 'Hablar con tu arrendador', 'Vocabulario de residencia y trámites', 'Farmacia y visitas al médico', 'Trato con contratistas'] },
        { title: 'Español panameño del día a día', items: ['Cómo saludan realmente los panameños', 'Jerga y expresiones locales', 'Entender el habla rápida', 'Tú y usted en la práctica', 'Palabras distintas a las de otros países'] },
        { title: 'En la calle', items: ['Taxis, buses y metro', 'Pedir comida y bebidas', 'Compras y regateo', 'Preguntar direcciones', 'Emergencias'] },
        { title: 'Trabajo y vida remota', items: ['Llamadas y correos en español', 'Presentarte profesionalmente', 'Clientes y colegas', 'Conversaciones por teléfono', 'Conceptos básicos de negocios'] },
        { title: 'Gramática que importa', items: ['Presente, pasado y futuro esenciales', 'Ser y estar', 'Conjugación de verbos explicada fácil', 'Práctica de pronunciación', 'Corregir tus errores comunes'] },
        { title: 'Conectar con la gente', items: ['Conversación casual y hacer amigos', 'Citas y relaciones', 'Contar tu historia y tu familia', 'Vecinos y comunidad', 'Humor y cultura'] },
      ],
    },
    crumb: 'Clases de español en línea',
    title: 'Clases de Español en Línea en Panamá',
    lead: 'Aprende español en vivo y uno a uno, desde donde estés en Panamá. Si acabas de mudarte a la Ciudad de Panamá, compraste una casa en Chiriquí o trabajas de forma remota desde la costa, tendrás una instructora local certificada y un español que puedes usar ese mismo día: en la farmacia, con tu arrendador, en el taxi.',
    primary: 'Reserva una Clase', secondary: 'Lo que aprenderás',
    facts: ['Clases por videollamada 1 a 1', 'Horario flexible, hora de Panamá (UTC−5)', 'Todos los niveles, a tu medida'],
    factPrice: 'Desde',
    topics: { eyebrow: 'Lo que aprenderás', title: 'Español para', accent: 'vivir en Panamá', intro: 'Cada clase se construye alrededor de tus objetivos y tu vida diaria en Panamá, desde el primer saludo hasta conversaciones con confianza.' },
    pricing: { eyebrow: 'Clases y paquetes', title: 'Precios', accent: 'sencillos y transparentes', intro: 'Los mismos paquetes flexibles de las clases presenciales, impartidos en vivo por videollamada.' },
    faq: {
      eyebrow: 'Preguntas', title: 'Clases de español en línea,', accent: 'tus dudas resueltas',
      items: [
        ['¿Puedo tomar clases de español en línea desde cualquier lugar de Panamá?', 'Sí. Las clases son videollamadas en vivo, uno a uno, así que puedes conectarte desde la Ciudad de Panamá, David, Boquete, Coronado, Santa Catalina, Pedasí, Bocas del Toro o cualquier lugar con buena conexión a internet. También puedes conectarte desde otro país.'],
        ['¿Cuánto cuestan las clases de español en línea?', 'Las clases en línea usan los mismos paquetes que las presenciales: $125 el curso intensivo de 1 semana (5 horas), $150 el Plan Island Flow de 3 semanas (6 horas), $180 el Plan Steady Surf mensual (8 horas) y $320 al mes para dos personas (Buddy Boost).'],
        ['¿Es español panameño o español de libro de texto?', 'Ambos. Tendrás bases sólidas de gramática, pero las clases se centran en cómo se habla realmente el español en Panamá, con las expresiones y el vocabulario que escucharás todos los días.'],
        ['¿Qué necesito para tomar clase en línea?', 'Una computadora, tablet o teléfono con cámara y una conexión estable a internet. Unos audífonos ayudan. Acordamos la plataforma de video que mejor te funcione.'],
        ['Soy principiante total. ¿Está bien?', 'Por supuesto. Cada programa se personaliza a tu nivel y tus objetivos, desde tus primeras palabras hasta conversación avanzada.'],
        ['¿Puedo programar las clases según mi trabajo?', 'Sí. Los horarios son flexibles y se acuerdan contigo dentro del horario de clases, de lunes a sábado. Panamá tiene una sola zona horaria (UTC−5) todo el año, sin cambio de horario.'],
      ],
    },
  },

  enEnglish: {
    lang: 'en', subject: 'english', alt: 'onlineEnglish',
    path: '/online-english-classes-panama',
    pairPath: '/es/clases-de-ingles-en-linea-panama',
    metaTitle: 'Online English Classes in Panama | Live 1-on-1 | Be Languages',
    metaDescription: 'Live 1-on-1 online English classes anywhere in Panama. Business English, job interviews and conversation with a certified instructor. From $125.',
    keywords: [
      'online English classes Panama',
      'English lessons online Panama',
      'learn English online Panama',
      'business English Panama',
      'English tutor Panama City',
      'English for job interviews Panama',
      'private English classes Panama',
    ],
    serviceName: 'Online English Classes in Panama',
    serviceDescription: 'Live one-on-one online English classes with a certified instructor for professionals, students and expats anywhere in Panama.',
    inLanguage: 'en',
    data: {
      pricingPlans: data.enEnglish.pricingPlans,
      classTopics: [
        { title: 'English for Work', items: ['Business English', 'Emails and reports', 'Meetings and presentations', 'Phone and video calls', 'Business etiquette'] },
        { title: 'Job Interviews', items: ['Introducing yourself with confidence', 'Talking about your experience', 'Answering tough questions', 'Mock interviews', 'Following up'] },
        { title: 'Everyday Conversation', items: ['Fluent small talk', 'Common idioms and phrases', 'Understanding fast speech', 'Regional accents', 'Making friends in English'] },
        { title: 'Grammar Fundamentals', items: ['English verb tenses', 'Asking questions', 'Articles and plurals', 'Key irregular verbs', 'Pronouns and prepositions'] },
        { title: 'Travel and Tourism English', items: ['Welcoming guests', 'Giving directions and recommendations', 'Restaurants and hotels', 'Handling complaints politely', 'Phone and message replies'] },
        { title: 'Specialized Topics', items: ['Healthcare vocabulary', 'Academic writing', 'American vs. British differences', 'Dating and relationships', 'Pronunciation coaching'] },
      ],
    },
    crumb: 'Online English classes',
    title: 'Online English Classes in Panama',
    lead: 'Learn English live, one-on-one, from anywhere in Panama. Built for professionals, students and expats who want English they can use at work, in interviews and with customers, with a certified instructor who knows the Panamanian context.',
    primary: 'Book a Class', secondary: "What You'll Learn",
    facts: ['Live 1-on-1 video lessons', 'Flexible schedule, Panama time (UTC−5)', 'All levels, personalized to your goals'],
    factPrice: 'Starting at',
    topics: { eyebrow: "What You'll Learn", title: 'English for', accent: 'Your Goals', intro: 'Lessons are tailored to why you need English: a promotion, a new job, a growing business or simply speaking with confidence.' },
    pricing: { eyebrow: 'Classes & Packages', title: 'Simple,', accent: 'Transparent Pricing', intro: 'Flexible packages for different goals and budgets, taught live over video call.' },
    faq: {
      eyebrow: 'Questions', title: 'Online English Classes,', accent: 'Answered',
      items: [
        ['Can I take English classes online from anywhere in Panama?', 'Yes. Lessons are live, one-on-one video calls, so you can join from Panama City, Colón, David, Chitré, Santiago, Bocas del Toro or anywhere else with a stable internet connection.'],
        ['How much do online English classes cost?', 'Packages start at $125 for a 1-week crash course (5 hours). The 3-week Island Flow Plan is $150 (6 hours), the monthly Steady Surf Plan is $180 (8 hours) and two people can learn together for $320 per month.'],
        ['Can you help me prepare for a job interview in English?', 'Yes. Job interviews and business English are core topics: we practice introducing yourself, describing your experience and answering difficult questions with mock interviews.'],
        ['What do I need to take a class online?', 'A computer, tablet or phone with a camera and a stable internet connection. Headphones help. We agree on the video platform that works best for you.'],
        ["I'm a complete beginner. Is that okay?", 'Absolutely. Every program is personalized to your level and goals, from your first words to advanced fluency.'],
        ['Can I schedule lessons around my work or studies?', 'Yes. Lesson times are flexible and arranged with you during class hours, Monday to Saturday.'],
      ],
    },
  },

  esEnglish: {
    lang: 'es', subject: 'english', alt: 'onlineEnglish',
    path: '/es/clases-de-ingles-en-linea-panama',
    pairPath: '/online-english-classes-panama',
    metaTitle: 'Clases de Inglés en Línea en Panamá | 1 a 1 | Be Languages',
    metaDescription: 'Clases de inglés en línea, en vivo y 1 a 1, en todo Panamá. Inglés de negocios, entrevistas de trabajo y conversación con instructora certificada. Desde $125.',
    keywords: [
      'clases de inglés en línea Panamá',
      'clases de inglés online Panamá',
      'aprender inglés online Panamá',
      'inglés de negocios Panamá',
      'clases de inglés Ciudad de Panamá',
      'clases particulares de inglés Panamá',
      'inglés para entrevistas de trabajo',
      'profesora de inglés online Panamá',
    ],
    serviceName: 'Clases de Inglés en Línea en Panamá',
    serviceDescription: 'Clases de inglés en línea, en vivo y personalizadas, con instructora certificada, para profesionales, estudiantes y expatriados en todo Panamá.',
    inLanguage: 'es',
    data: {
      pricingPlans: data.esEnglish.pricingPlans,
      classTopics: [
        { title: 'Inglés para el trabajo', items: ['Inglés de negocios', 'Correos e informes', 'Reuniones y presentaciones', 'Llamadas y videollamadas', 'Etiqueta de negocios'] },
        { title: 'Entrevistas de trabajo', items: ['Presentarte con confianza', 'Hablar de tu experiencia', 'Responder preguntas difíciles', 'Entrevistas simuladas', 'Dar seguimiento'] },
        { title: 'Conversación diaria', items: ['Conversación fluida', 'Expresiones e idiomas comunes', 'Entender el habla rápida', 'Acentos regionales', 'Hacer amigos en inglés'] },
        { title: 'Fundamentos de gramática', items: ['Tiempos verbales en inglés', 'Hacer preguntas', 'Artículos y plurales', 'Verbos irregulares clave', 'Pronombres y preposiciones'] },
        { title: 'Inglés para turismo y viajes', items: ['Recibir a los huéspedes', 'Dar direcciones y recomendaciones', 'Restaurantes y hoteles', 'Manejar quejas con cortesía', 'Responder llamadas y mensajes'] },
        { title: 'Temas especializados', items: ['Vocabulario médico', 'Escritura académica', 'Diferencias americano/británico', 'Citas y relaciones', 'Entrenamiento de pronunciación'] },
      ],
    },
    crumb: 'Clases de inglés en línea',
    title: 'Clases de Inglés en Línea en Panamá',
    lead: 'Aprende inglés en vivo y uno a uno, desde cualquier lugar de Panamá. Pensado para profesionales, estudiantes y expatriados que quieren un inglés útil en el trabajo, en entrevistas y con clientes, con una instructora certificada que conoce el contexto panameño.',
    primary: 'Reservar una Clase', secondary: 'Lo que aprenderás',
    facts: ['Clases por videollamada 1 a 1', 'Horario flexible, hora de Panamá (UTC−5)', 'Todos los niveles, a tu medida'],
    factPrice: 'Desde',
    topics: { eyebrow: 'Lo que aprenderás', title: 'Inglés para', accent: 'tus objetivos', intro: 'Las clases se adaptan al motivo por el que necesitas inglés: un ascenso, un nuevo empleo, un negocio en crecimiento o simplemente hablar con seguridad.' },
    pricing: { eyebrow: 'Clases y paquetes', title: 'Precios', accent: 'simples y transparentes', intro: 'Paquetes flexibles para distintos objetivos y presupuestos, impartidos en vivo por videollamada.' },
    faq: {
      eyebrow: 'Preguntas', title: 'Clases de inglés en línea,', accent: 'tus dudas resueltas',
      items: [
        ['¿Puedo tomar clases de inglés en línea desde cualquier lugar de Panamá?', 'Sí. Las clases son videollamadas en vivo, uno a uno, así que puedes conectarte desde la Ciudad de Panamá, Colón, David, Chitré, Santiago, Bocas del Toro o cualquier lugar con buena conexión a internet.'],
        ['¿Cuánto cuestan las clases de inglés en línea?', 'Los paquetes comienzan en $125 con el English Express de 1 semana. Los planes mensuales cuestan $160 (2 clases por semana) o $240 (3 clases por semana), y hay opciones para 2 o 3 personas. Los detalles están en la sección de precios.'],
        ['¿Pueden ayudarme a prepararme para una entrevista de trabajo en inglés?', 'Sí. Las entrevistas de trabajo y el inglés de negocios son temas centrales: practicamos cómo presentarte, describir tu experiencia y responder preguntas difíciles con entrevistas simuladas.'],
        ['¿Qué necesito para tomar clase en línea?', 'Una computadora, tablet o teléfono con cámara y una conexión estable a internet. Unos audífonos ayudan. Acordamos la plataforma de video que mejor te funcione.'],
        ['Soy principiante total. ¿Está bien?', 'Por supuesto. Cada programa se personaliza a tu nivel y tus objetivos, desde tus primeras palabras hasta fluidez avanzada.'],
        ['¿Puedo programar las clases según mi trabajo o estudios?', 'Sí. Los horarios son flexibles y se acuerdan contigo dentro del horario de clases, de lunes a sábado.'],
      ],
    },
  },
}

export function onlineMetadata(page) {
  const en = page.lang === 'en' ? page.path : page.pairPath
  const es = page.lang === 'es' ? page.path : page.pairPath
  const image = { url: '/logoNoir.png', width: 1200, height: 1200, alt: page.serviceName }
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    authors: [{ name: 'Be Languages' }],
    creator: 'Be Languages',
    publisher: 'Be Languages',
    metadataBase: new URL(SITE),
    alternates: {
      canonical: page.path,
      languages: { en, es, 'x-default': en },
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: page.path,
      siteName: 'Be Languages',
      images: [image],
      locale: page.lang === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
      images: ['/logoNoir.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  }
}

export function onlineSchemas(page) {
  const url = SITE + page.path
  const home = page.lang === 'es' ? SITE + '/es' : SITE
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: page.lang === 'es' ? 'Inicio' : 'Home', item: home },
        { '@type': 'ListItem', position: 2, name: page.serviceName, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.serviceName,
      description: page.serviceDescription,
      url,
      inLanguage: page.lang,
      provider: { '@id': `${SITE}/#school` },
      areaServed: { '@type': 'Country', name: 'Panama' },
      serviceType: page.serviceName,
      availableChannel: { '@type': 'ServiceChannel', name: page.lang === 'es' ? 'Videollamada en vivo' : 'Live video call' },
      offers: page.data.pricingPlans.map((p) => ({
        '@type': 'Offer',
        name: p.name,
        description: p.description,
        price: p.price.replace(/[^0-9.]/g, ''),
        priceCurrency: 'USD',
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: page.lang,
      mainEntity: page.faq.items.map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ]
}
