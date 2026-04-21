import { useState, useEffect, useRef } from "react";

const data = {
  name: "Oussama Abakarim",
  title: "Développeur Full-Stack",
  location: "Bordeaux, France",
  email: "abakarimoussama@gmail.com",
  phone: "+33 7 45 60 32 89",
  github: "github.com/oussama-abk",
  summary:
    "Développeur Full-Stack de 25 ans, passionné par la conception d'applications web et logicielles modernes. Rigoureux et autonome, j'interviens sur l'ensemble du cycle de développement — de l'architecture back-end à l'interface utilisateur — en m'appuyant sur des technologies actuelles et des méthodes agiles.",
  skills: [
    { category: "Back-End", items: ["Node.js", "Express.js", "REST API", "GraphQL", "WebSocket", "PHP", "Symfony", "Java", "Python"] },
    { category: "Front-End", items: ["Vue.js", "Nuxt.js", "React.js", "Angular", "Electron.js", "TypeScript"] },
    { category: "Bases de données", items: ["MySQL", "MongoDB", "Firebase", "SQL"] },
    { category: "DevOps", items: ["Docker", "Git", "GitHub Actions", "CI/CD", "OVH"] },
    { category: "Méthodes", items: ["Scrum/Agile", "TDD", "Code Review", "Jira", "Notion"] },
    { category: "Design", items: ["Figma", "Canva", "Balsamiq"] },
  ],
  experiences: [
    {
      role: "Développeur Full-Stack",
      company: "CheetahSoftware",
      period: "09/2026 — Aujourd'hui",
      location: "Bordeaux, France",
      type: "CDI",
      tasks: [
        "Développement et maintenance de la suite logicielle ILOVEPROJECT",
        "Conception de nouvelles fonctionnalités et revues de code",
        "Intégration continue via GitHub Actions (CI/CD)",
      ],
      tech: ["Electron.js", "Vue.js", "React.js", "Node.js", "Docker"],
    },
    {
      role: "Développeur Full-Stack",
      company: "CheetahSoftware",
      period: "09/2025 — 09/2026",
      location: "Bordeaux, France",
      type: "Alternance",
      tasks: [
        "Développement de la suite ILOVEPROJECT : applications desktop cross-platform",
        "Services back-end Node.js/Express.js et déploiement Docker",
      ],
      tech: ["Electron.js", "Vue.js", "React.js", "Node.js", "Docker"],
    },
    {
      role: "Développeur Full-Stack",
      company: "FGFconsultant",
      period: "09/2023 — 09/2025",
      location: "Bordeaux, France",
      type: "Alternance",
      tasks: [
        "Refonte et développement du site officiel FGFconsultant",
        "Développement du projet ABC Réunion et gestion de serveurs VPS",
        "Participation au développement de logiciels internes en Agile",
      ],
      tech: ["Vue.js", "Node.js", "Docker", "OVH"],
    },
    {
      role: "Développeur Web",
      company: "Bility",
      period: "04/2023 — 08/2023",
      location: "Calais, France",
      type: "Stage",
      tasks: [
        "Développement de BiliVote : app de vote web (auth, votes temps réel, stats)",
        "Stack : Vue.js, Nuxt.js, Node.js, Express.js, Docker",
      ],
      tech: ["Vue.js", "Nuxt.js", "Node.js", "Express.js", "Docker"],
    },
    {
      role: "Développeur Web",
      company: "Univers High Tech",
      period: "04/2022 — 06/2022",
      location: "Agadir, Maroc",
      type: "Stage",
      tasks: [
        "Application web de gestion des stocks (CRUD, suivi, alertes)",
      ],
      tech: ["PHP", "MySQL", "JavaScript"],
    },
    {
      role: "Développeur Web",
      company: "RTD",
      period: "07/2021 — 08/2021",
      location: "Agadir, Maroc",
      type: "Stage",
      tasks: [
        "Site e-commerce vitrine pour les produits technologiques de l'entreprise",
      ],
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ],
  projects: [
    {
      name: "ILOVEPROJECT",
      period: "2023 — Aujourd'hui",
      description: "Suite logicielle desktop cross-platform de gestion de projets, développée pour CheetahSoftware.",
      tech: ["Electron.js", "Vue.js", "React.js", "Node.js", "Docker"],
      color: "#00d4aa",
    },
    {
      name: "BiliVote",
      period: "2023",
      description: "Application web de vote en temps réel pour une association : authentification, votes, tableau de bord statistique.",
      tech: ["Vue.js", "Node.js", "Express.js", "Docker"],
      color: "#7c6fff",
    },
  ],
  education: [
    {
      degree: "Master — Management du Développement Web",
      school: "EFFICOM",
      period: "2023 — 2025",
      location: "Lille, France",
    },
    {
      degree: "Licence Pro — Développement Internet et Mobile",
      school: "IUT du Littoral Côte d'Opale",
      period: "2022 — 2023",
      location: "Calais, France",
    },
    {
      degree: "DUT — Informatique",
      school: "École Supérieure de Technologie",
      period: "2020 — 2022",
      location: "Safi, Maroc",
    },
  ],
  languages: [
    { lang: "Arabe", level: "Natif", pct: 100 },
    { lang: "Français", level: "B2", pct: 80 },
    { lang: "Anglais", level: "B2", pct: 80 },
  ],
  interests: ["🏄 Surf", "🏋️ Musculation", "✈️ Voyage"],
};

const NAV = ["Profil", "Compétences", "Expériences", "Projets", "Formation"];

function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const visible = useInView(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Tag({ text, color }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "2px 10px",
      borderRadius: 4,
      fontSize: 11,
      fontFamily: "'JetBrains Mono', monospace",
      fontWeight: 600,
      letterSpacing: "0.04em",
      background: color ? `${color}20` : "#ffffff12",
      color: color || "#8899aa",
      border: `1px solid ${color ? `${color}40` : "#ffffff18"}`,
    }}>
      {text}
    </span>
  );
}

function TypeBadge({ type }) {
  const colors = { CDI: "#00d4aa", Alternance: "#7c6fff", Stage: "#f59e0b" };
  return <Tag text={type} color={colors[type] || "#aaa"} />;
}

export default function Portfolio() {
  const [active, setActive] = useState("Profil");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <div style={{ background: "#0a0d14", color: "#e2e8f0", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0d14; }
        ::-webkit-scrollbar-thumb { background: #00d4aa55; border-radius: 2px; }
        html { scroll-behavior: smooth; }
        a { color: inherit; text-decoration: none; }

        .nav-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: #8899aa;
          cursor: pointer;
          padding: 6px 0;
          transition: color 0.2s;
          background: none; border: none;
        }
        .nav-link:hover, .nav-link.active { color: #00d4aa; }

        .exp-card {
          border: 1px solid #ffffff0f;
          border-radius: 12px;
          padding: 24px;
          background: #0f1420;
          transition: border-color 0.25s, transform 0.25s;
          cursor: default;
        }
        .exp-card:hover { border-color: #00d4aa33; transform: translateY(-2px); }

        .skill-chip {
          display: inline-block;
          padding: 5px 12px;
          border-radius: 6px;
          font-size: 12.5px;
          font-family: 'JetBrains Mono', monospace;
          background: #ffffff08;
          border: 1px solid #ffffff12;
          color: #c0cfe0;
          margin: 3px;
          transition: background 0.2s, color 0.2s;
        }
        .skill-chip:hover { background: #00d4aa18; color: #00d4aa; border-color: #00d4aa44; }

        .proj-card {
          border-radius: 14px;
          padding: 28px;
          background: #0f1420;
          border: 1px solid #ffffff0f;
          transition: border-color 0.25s, transform 0.25s;
          position: relative; overflow: hidden;
        }
        .proj-card:hover { border-color: #00d4aa33; transform: translateY(-3px); }

        .lang-bar-bg { background: #ffffff0e; border-radius: 4px; height: 5px; }
        .lang-bar-fill { height: 5px; border-radius: 4px; background: linear-gradient(90deg, #00d4aa, #7c6fff); transition: width 1.2s ease; }

        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: #00d4aa;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 5vw, 44px);
          font-weight: 800;
          color: #f0f4fa;
          line-height: 1.1;
        }

        .hero-line {
          width: 48px; height: 3px;
          background: linear-gradient(90deg, #00d4aa, #7c6fff);
          border-radius: 2px;
        }
        .dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #ffffff08 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }
        .glow { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; }

        @media (max-width: 700px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 701px) {
          .mobile-nav { display: none !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 clamp(20px,5vw,60px)",
        height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "#0a0d14ee" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #ffffff0a" : "none",
        transition: "all 0.3s",
      }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, color: "#f0f4fa", letterSpacing: "0.02em" }}>
          OA<span style={{ color: "#00d4aa" }}>.</span>
        </span>
        <div className="desktop-nav" style={{ display: "flex", gap: 32 }}>
          {NAV.map(n => (
            <button key={n} className={`nav-link ${active === n ? "active" : ""}`} onClick={() => scrollTo(n)}>{n}</button>
          ))}
        </div>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{
          background: "none", border: "none", cursor: "pointer", display: "none",
          flexDirection: "column", gap: 5, padding: 4,
        }}>
          {[0,1,2].map(i => <span key={i} style={{ width: 22, height: 2, background: "#e2e8f0", display: "block", borderRadius: 2 }} />)}
        </button>
      </nav>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="mobile-nav" style={{
          position: "fixed", top: 60, left: 0, right: 0, zIndex: 99,
          background: "#0f1420ee", backdropFilter: "blur(12px)",
          padding: "16px 24px", display: "flex", flexDirection: "column", gap: 8,
          borderBottom: "1px solid #ffffff10",
        }}>
          {NAV.map(n => (
            <button key={n} className={`nav-link ${active === n ? "active" : ""}`} onClick={() => scrollTo(n)} style={{ textAlign: "left", padding: "10px 0" }}>{n}</button>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section id="Profil" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px clamp(20px,8vw,100px) 60px", overflow: "hidden" }}>
        <div className="dot-grid" />
        <div className="glow" style={{ width: 500, height: 500, background: "#00d4aa", opacity: 0.06, top: -100, right: -100 }} />
        <div className="glow" style={{ width: 400, height: 400, background: "#7c6fff", opacity: 0.07, bottom: -50, left: "30%" }} />

        <div style={{ maxWidth: 900, position: "relative", zIndex: 1 }}>
          <FadeIn delay={0}>
            <div className="section-label">Développeur Full-Stack</div>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(42px,9vw,88px)", lineHeight: 1.0, color: "#f0f4fa", marginBottom: 24 }}>
              Oussama<br />
              <span style={{ WebkitTextStroke: "2px #00d4aa", color: "transparent" }}>Abakarim</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="hero-line" style={{ marginBottom: 28 }} />
          </FadeIn>
          <FadeIn delay={280}>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#8899aa", maxWidth: 600, marginBottom: 40 }}>
              {data.summary}
            </p>
          </FadeIn>
          <FadeIn delay={360}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 40 }}>
              <a href={`mailto:${data.email}`} style={{ padding: "10px 22px", borderRadius: 8, background: "#00d4aa", color: "#0a0d14", fontWeight: 600, fontSize: 13, fontFamily: "'JetBrains Mono', monospace", transition: "opacity 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                Me contacter
              </a>
              <a href={`https://${data.github}`} target="_blank" rel="noreferrer" style={{ padding: "10px 22px", borderRadius: 8, background: "transparent", color: "#c0cfe0", fontWeight: 600, fontSize: 13, fontFamily: "'JetBrains Mono', monospace", border: "1px solid #ffffff20", transition: "border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#00d4aa66"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#ffffff20"}>
                GitHub ↗
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={440}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
              {[
                ["📍", data.location],
                ["📞", data.phone],
                ["✉", data.email],
              ].map(([icon, val]) => (
                <span key={val} style={{ fontSize: 13, color: "#8899aa", fontFamily: "'JetBrains Mono', monospace" }}>
                  {icon} {val}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── COMPÉTENCES ── */}
      <section id="Compétences" style={{ padding: "80px clamp(20px,8vw,100px)", position: "relative" }}>
        <FadeIn>
          <div className="section-label">Stack technique</div>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Compétences</h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {data.skills.map((cat, i) => (
            <FadeIn key={cat.category} delay={i * 60}>
              <div style={{ background: "#0f1420", border: "1px solid #ffffff0f", borderRadius: 12, padding: "20px 22px" }}>
                <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.15em", color: "#00d4aa", textTransform: "uppercase", marginBottom: 14 }}>
                  {cat.category}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {cat.items.map(item => (
                    <span key={item} className="skill-chip">{item}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── EXPÉRIENCES ── */}
      <section id="Expériences" style={{ padding: "80px clamp(20px,8vw,100px)" }}>
        <FadeIn>
          <div className="section-label">Parcours professionnel</div>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Expériences</h2>
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {data.experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="exp-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
                  <div>
                    <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 17, color: "#f0f4fa" }}>{exp.role}</span>
                    <span style={{ color: "#00d4aa", fontWeight: 600, marginLeft: 10, fontSize: 15 }}>@ {exp.company}</span>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                    <TypeBadge type={exp.type} />
                    <span style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "#8899aa" }}>{exp.period}</span>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "#8899aa", marginBottom: 14, fontFamily: "'JetBrains Mono', monospace" }}>
                  📍 {exp.location}
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
                  {exp.tasks.map((t, j) => (
                    <li key={j} style={{ display: "flex", gap: 10, fontSize: 13.5, color: "#a0b0c0", lineHeight: 1.6 }}>
                      <span style={{ color: "#00d4aa", flexShrink: 0, marginTop: 2 }}>▸</span>
                      {t}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {exp.tech.map(t => <Tag key={t} text={t} />)}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── PROJETS ── */}
      <section id="Projets" style={{ padding: "80px clamp(20px,8vw,100px)" }}>
        <FadeIn>
          <div className="section-label">Réalisations</div>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Projets</h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
          {data.projects.map((proj, i) => (
            <FadeIn key={proj.name} delay={i * 100}>
              <div className="proj-card">
                <div className="glow" style={{ width: 200, height: 200, background: proj.color, opacity: 0.08, top: -60, right: -60 }} />
                <div style={{ position: "relative" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: proj.color }}>{proj.name}</h3>
                    <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "#8899aa" }}>{proj.period}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#8899aa", lineHeight: 1.7, marginBottom: 18 }}>{proj.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {proj.tech.map(t => <Tag key={t} text={t} color={proj.color} />)}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── FORMATION ── */}
      <section id="Formation" style={{ padding: "80px clamp(20px,8vw,100px)" }}>
        <FadeIn>
          <div className="section-label">Parcours académique</div>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Formation</h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 60 }}>
          {data.education.map((edu, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div style={{ background: "#0f1420", border: "1px solid #ffffff0f", borderRadius: 12, padding: "22px 24px", borderTop: `3px solid #00d4aa` }}>
                <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "#00d4aa", letterSpacing: "0.1em", marginBottom: 10 }}>{edu.period}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: "#f0f4fa", marginBottom: 8, lineHeight: 1.4 }}>{edu.degree}</h3>
                <div style={{ fontSize: 13, color: "#8899aa" }}>{edu.school}</div>
                <div style={{ fontSize: 12, color: "#8899aa55", marginTop: 4, fontFamily: "'JetBrains Mono', monospace" }}>📍 {edu.location}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Langues + Intérêts */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
          <FadeIn>
            <div style={{ background: "#0f1420", border: "1px solid #ffffff0f", borderRadius: 12, padding: "22px 24px" }}>
              <div className="section-label" style={{ marginBottom: 16 }}>Langues</div>
              {data.languages.map((l, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 13.5, color: "#c0cfe0", fontWeight: 500 }}>{l.lang}</span>
                    <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "#8899aa" }}>{l.level}</span>
                  </div>
                  <div className="lang-bar-bg">
                    <LangBar pct={l.pct} />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div style={{ background: "#0f1420", border: "1px solid #ffffff0f", borderRadius: 12, padding: "22px 24px" }}>
              <div className="section-label" style={{ marginBottom: 16 }}>Centres d'intérêt</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {data.interests.map((it, i) => (
                  <div key={i} style={{ fontSize: 14, color: "#c0cfe0", padding: "10px 14px", background: "#ffffff06", borderRadius: 8, border: "1px solid #ffffff0a" }}>
                    {it}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "40px clamp(20px,8vw,100px)", borderTop: "1px solid #ffffff0a", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, color: "#f0f4fa" }}>
          OA<span style={{ color: "#00d4aa" }}>.</span>
        </span>
        <span style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "#8899aa55" }}>
          Développeur Full-Stack — Bordeaux, France
        </span>
        <a href={`mailto:${data.email}`} style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "#00d4aa" }}>
          {data.email}
        </a>
      </footer>
    </div>
  );
}

function LangBar({ pct }) {
  const ref = useRef(null);
  const visible = useInView(ref);
  return (
    <div ref={ref} className="lang-bar-bg">
      <div className="lang-bar-fill" style={{ width: visible ? `${pct}%` : "0%" }} />
    </div>
  );
}
