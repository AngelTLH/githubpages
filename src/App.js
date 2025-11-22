import React from "react";
import "./App.css";
import { hero, socialMedia, highlights, skills, projects, contact } from "./portfolio";

const SectionTitle = ({ label, id }) => (
  <div className="section-title" id={id}>
    <span className="eyebrow">{label}</span>
    <div className="underline" />
  </div>
);

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__content">
          <p className="eyebrow">Portafolio técnico</p>
          <h1>{hero.title}</h1>
          <p className="lead">{hero.subtitle}</p>
          <div className="actions">
            <a className="btn primary" href={hero.cta.primary.href}>
              {hero.cta.primary.label}
            </a>
            <a className="btn ghost" href={hero.cta.secondary.href}>
              {hero.cta.secondary.label}
            </a>
          </div>
          <div className="socials">
            {socialMedia.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hero__aside">
          <div className="tag">Java</div>
          <div className="tag">React</div>
          <div className="tag">Python</div>
          <div className="badge">GitHub Pages</div>
        </div>
      </header>

      <main className="content">
        <section className="card highlights">
          <SectionTitle label="Cómo trabajo" />
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="card skills">
          <SectionTitle label="Habilidades clave" />
          <div className="columns">
            {skills.map((group) => (
              <div className="pill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="pills">
                  {group.items.map((item) => (
                    <span className="pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card projects">
          <SectionTitle label="Proyectos" id="proyectos" />
          <div className="grid">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <div className="project__body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="muted">{project.tech}</p>
                </div>
                <a className="btn ghost" href={project.link} target="_blank" rel="noreferrer">
                  Ver detalle
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="card contact" id="contacto">
          <SectionTitle label="Contacto" />
          <p>{contact.description}</p>
          <a className="btn primary" href={`mailto:${contact.email}`}>
            Escribir a {contact.email}
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
