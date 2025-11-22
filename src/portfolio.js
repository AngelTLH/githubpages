/* Datos de contenido para la landing. Ajusta aquí los textos y los enlaces
   para personalizar la página sin tocar los componentes. */

const hero = {
  title: "Hola, soy Ángel TLH",
  subtitle:
    "Ingeniero de software especializado en Java, React y Python. Me dedico a crear experiencias web modernas y a montar sitios en GitHub Pages con despliegues automatizados.",
  cta: {
    primary: {
      label: "Ver proyectos",
      href: "#proyectos",
    },
    secondary: {
      label: "Agendar llamada",
      href: "mailto:contacto@angeltlh.dev",
    },
  },
};

const socialMedia = [
  {
    label: "GitHub",
    href: "https://github.com/angeltlh",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/angeltlh",
  },
  {
    label: "Correo",
    href: "mailto:contacto@angeltlh.dev",
  },
];

const highlights = [
  "Arquitectura de aplicaciones Java con APIs limpias y pruebas automatizadas.",
  "Frontends en React optimizados para rendimiento, accesibilidad y SEO.",
  "Automatización de despliegues en GitHub Pages y GitHub Actions.",
  "Dashboards y utilidades en Python para analizar datos y validar calidad de código.",
];

const skills = [
  {
    title: "Stack principal",
    items: ["Java 17", "React 18", "Python 3", "TypeScript", "Spring Boot"],
  },
  {
    title: "DevOps y productividad",
    items: ["GitHub Actions", "Docker", "CI/CD", "GitHub Pages", "SonarLint"],
  },
  {
    title: "Front-end",
    items: ["CSS modular", "Design Systems", "Testing con Jest", "Accesibilidad"],
  },
];

const projects = [
  {
    title: "Plantilla profesional para GitHub Pages",
    description:
      "Landing en React lista para desplegar con gh-pages, con secciones editables y modo claro/oscuro.",
    tech: "React · Styled Components · GitHub Actions",
    link: "https://angeltlh.github.io/githubpages",
  },
  {
    title: "API de tareas en Java",
    description:
      "Servicio REST con Spring Boot, validaciones y pruebas unitarias, preparado para contenedores Docker.",
    tech: "Java · Spring Boot · JUnit",
    link: "https://github.com/angeltlh/task-api",
  },
  {
    title: "Panel analítico en Python",
    description:
      "Dashboard ligero con FastAPI y Chart.js para visualizar métricas de calidad y despliegues continuos.",
    tech: "Python · FastAPI · Chart.js",
    link: "https://github.com/angeltlh/qa-dashboard",
  },
];

const contact = {
  title: "¿Hablamos?",
  description:
    "Cuéntame sobre tu idea o proyecto. Puedo ayudarte a diseñar la arquitectura, montar un flujo CI/CD y entregar un front-end rápido y mantenible.",
  email: "contacto@angeltlh.dev",
};

export { hero, socialMedia, highlights, skills, projects, contact };
