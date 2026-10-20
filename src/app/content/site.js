export const PHONE = "+507 6613-5652";
export const WHATSAPP = "https://wa.me/50766135652";
export const EMAIL = "be.languages.pa@gmail.com";
export const INSTAGRAM = "https://www.instagram.com/be.languages/";

export const ROUTES = {
  en: {
    home: "/",
    spanish: "/spanish-classes-in-isla-colon-bocas-del-toro",
    english: "/english-classes-in-isla-colon-bocas-del-toro",
    translation: "/certified-translation-services-in-isla-colon-bocas-del-toro",
    resources: "/learning-resources",
    onlineSpanish: "/online-spanish-classes-panama",
    onlineEnglish: "/online-english-classes-panama",
  },
  es: {
    home: "/es",
    spanish: "/es/clases-de-espanol-en-isla-colon-bocas-del-toro",
    english: "/es/clases-de-ingles-en-isla-colon-bocas-del-toro",
    translation: "/es/traducciones-certificadas-en-bocas-del-toro",
    onlineSpanish: "/es/clases-de-espanol-en-linea-panama",
    onlineEnglish: "/es/clases-de-ingles-en-linea-panama",
  },
};

// Equivalent page in the other language (the resources guides only exist in English)
export const ALT = { en: "es", es: "en" };
export const ALT_KEY = { home: "home", spanish: "spanish", english: "english", translation: "translation" };

export const UI = {
  en: {
    langLabel: "English",
    nav: {
      about: "About",
      spanish: "Spanish classes",
      english: "English classes",
      translation: "Translations",
      resources: "Resources",
      contact: "Contact",
    },
    bookCta: "Book on WhatsApp",
    menu: "Menu",
    close: "Close",
    plan: {
      popular: "Popular",
      mostPopular: "Most popular",
      instruction: "of instruction",
      choose: "Choose this plan",
      quote: "Get a quote",
      waPlan: (name) => `Hi! I'm interested in the "${name}" plan.`,
      waQuote: (name) => `Hi! I'd like a quote for: ${name}.`,
    },
    policy: {
      title: "Payment & policies",
      payTitle: "Payment",
      payItems: [
        "100% at start of the plan",
        "Transport fees may apply for in-person classes outside Bocas Town",
        "Cash, local bank transfer and Yappy (Banco General) accepted",
      ],
      cancelTitle: "Cancellation",
      cancelItems: [
        { ok: false, text: "Changes must be advised 12 hours before the scheduled session" },
        { ok: false, text: "Less than 12h notice or no-show: session is forfeited" },
        { ok: true, text: "Emergency cancellations evaluated case-by-case" },
      ],
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Ready to begin your",
      accent: "language journey?",
      body: "Contact me to schedule your first lesson or ask any questions about classes and translations.",
      whatsapp: "Message on WhatsApp",
      emailBtn: "Send an email",
      phone: "Phone / WhatsApp",
      location: "Location",
      locationValue: "Isla Colón, Bocas del Toro, Panama",
      email: "Email",
      availability: "Availability",
      availabilityValue: "Monday – Saturday, 9AM – 6PM",
    },
    footer: {
      blurb: "Personalized English and Spanish classes and certified translation services in Bocas del Toro, Panama.",
      services: "Services",
      contact: "Contact",
      explore: "Explore",
      resourcesLabel: "Useful resources for expats in Panama",
      panamaContact: "Panama Contact — Immigration assistance in Panama",
      madeBy: "Website made by",
    },
    testimonials: {
      eyebrow: "What clients are saying",
      title: "Language learning & translation that",
      accent: "makes a difference",
      prev: "Previous testimonial",
      next: "Next testimonial",
    },
    wa: {
      title: "Questions? Chat now!",
      body: "Classes or translations — I reply fast.",
      label: "Chat on WhatsApp",
      close: "Close",
    },
    fromWord: "from",
    perPage: "per page",
    seeDetails: "See details",
  },
  es: {
    langLabel: "Español",
    nav: {
      about: "Sobre mí",
      spanish: "Clases de español",
      english: "Clases de inglés",
      translation: "Traducciones",
      contact: "Contacto",
    },
    bookCta: "Reservar por WhatsApp",
    menu: "Menú",
    close: "Cerrar",
    plan: {
      popular: "Popular",
      mostPopular: "Más popular",
      instruction: "de instrucción",
      choose: "Elegir este plan",
      quote: "Pedir cotización",
      waPlan: (name) => `¡Hola! Me interesa el plan "${name}".`,
      waQuote: (name) => `¡Hola! Quisiera una cotización para: ${name}.`,
    },
    policy: {
      title: "Información de pago y políticas",
      payTitle: "Detalles de pago",
      payItems: [
        "100% al inicio del plan.",
        "Pueden haber gastos de transporte para clases presenciales fuera de Bocas Town (ejemplo: zona de Paunch, Bluff o Carenero).",
        "Se aceptan pagos en efectivo, transferencia bancaria local y Yappy (Banco General)",
      ],
      cancelTitle: "Política de cancelación",
      cancelItems: [
        { ok: false, text: "Los cambios deben notificarse 12 horas antes de la clase programada. Si notifica en el tiempo indicado, la clase se reprograma sin costo adicional." },
        { ok: false, text: "Si avisa en menos de 12h o no se presenta a la clase: la clase se pierde." },
        { ok: true, text: "Cancelaciones por emergencia son evaluadas caso por caso." },
      ],
    },
    contact: {
      eyebrow: "Contáctame",
      title: "¿Listo para comenzar tu",
      accent: "viaje lingüístico?",
      body: "Contáctame para programar tu primera clase o hacer cualquier pregunta sobre clases y traducciones.",
      whatsapp: "Enviar mensaje por WhatsApp",
      emailBtn: "Enviar un email",
      phone: "Teléfono / WhatsApp",
      location: "Ubicación",
      locationValue: "Isla Colón, Bocas del Toro, Panamá",
      email: "Email",
      availability: "Disponibilidad",
      availabilityValue: "Lunes – Sábado, 9AM – 6PM",
    },
    footer: {
      blurb: "Clases personalizadas de inglés y español y servicios de traducción certificada en Bocas del Toro, Panamá.",
      services: "Servicios",
      contact: "Contacto",
      explore: "Explorar",
      resourcesLabel: "Recursos útiles para expatriados en Panamá",
      panamaContact: "Panama Contact — Asistencia de inmigración en Panamá",
      madeBy: "Sitio web creado por",
    },
    testimonials: {
      eyebrow: "Lo que dicen mis clientes",
      title: "Clases de idiomas y traducciones que",
      accent: "marcan la diferencia",
      prev: "Testimonio anterior",
      next: "Siguiente testimonio",
    },
    wa: {
      title: "¿Preguntas? ¡Escríbeme!",
      body: "Clases o traducciones — respondo rápido.",
      label: "Chatear por WhatsApp",
      close: "Cerrar",
    },
    fromWord: "desde",
    perPage: "por página",
    seeDetails: "Ver detalles",
  },
};

export const PLAN_GROUPS_ES = [
  { label: "Individual", count: 3 },
  { label: "En pareja", count: 2 },
  { label: "En trío", count: 2 },
];
export const groupsFor = (plans, lang) => (lang === "es" && plans.length === 7 ? PLAN_GROUPS_ES : undefined);
