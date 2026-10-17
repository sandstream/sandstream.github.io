// Cases.jsx — the "selected work" section. The 4 references the user asked for.

const CASES = [
  {
    num: "/01",
    name: ["Hunter", "Matcher"],
    italic: 1, // index of italicised word
    tagline: "AI-driven consultant matching · built by a team of two.",
    desc: "End-to-end backoffice for consulting firms — ingests inbound RFPs from email, parses each mission, embeds requirements against a multilingual consultant base, and ranks every match in real time. Founded the platform inside Frontwalker AIDA; built the AI pipeline, the integrations and the frontend.",
    meta: [
      { l: "ROLE", v: "Co-founder · AI lead" },
      { l: "STACK", v: "React 19 · Convex · Vertex AI" },
      { l: "SCALE", v: "180 consultants · 13 kr/mo each" },
      { l: "YEAR", v: "2025–26" },
    ],
    href: "https://huntermatcher.vercel.app/",
    hrefLabel: "huntermatcher.vercel.app",
  },
  {
    num: "/02",
    name: ["Kjorre"],
    italic: 0,
    tagline: "International QR-kiosk payment platform.",
    desc: "Cross-border self-service payment kiosks with QR-first UX. Multi-tenant SaaS architecture, payment provider integrations and an admin portal for venue operators. Built the technical strategy and the platform foundations end-to-end.",
    meta: [
      { l: "ROLE", v: "Founding tech · architecture" },
      { l: "STACK", v: "Next.js · Stripe · multi-tenant" },
      { l: "SECTOR", v: "Fintech · self-service retail" },
      { l: "YEAR", v: "2024–26" },
    ],
    href: "https://www.kjorre.com",
    hrefLabel: "kjorre.com",
  },
  {
    num: "/03",
    name: ["Game Day", "DJ"],
    italic: 1,
    tagline: "Real-time arena sound for amateur sports.",
    desc: "Mobile app that turns a coach or game-day volunteer into a stadium DJ — cue-based audio playback for moments in a basketball or hockey game, with offline-first audio packs and live event triggers. Built the iOS app, the curated sound library and the live-event sync.",
    meta: [
      { l: "ROLE", v: "Product · iOS · audio" },
      { l: "STACK", v: "iOS · Firebase · WebAudio" },
      { l: "SECTOR", v: "Sports tech · live audio" },
      { l: "YEAR", v: "2024–26" },
    ],
    href: "https://gamedaydj.app",
    hrefLabel: "gamedaydj.app",
  },
  {
    num: "/04",
    name: ["Ralph", "Inferno"],
    italic: 1,
    tagline: "AI-driven autonomous development workflow.",
    desc: "Open-source orchestration for an inner-loop agentic coding workflow — Ralph plans, edits, runs tests and reviews while you sleep. LLM-agnostic engine, designed for long-horizon autonomous code generation with explicit guardrails and verification gates.",
    meta: [
      { l: "ROLE", v: "Creator · open source" },
      { l: "STACK", v: "Node · LLM-agnostic · CLI" },
      { l: "SECTOR", v: "Developer tooling" },
      { l: "YEAR", v: "2025–26" },
    ],
    href: "https://github.com/sandstream/ralph-inferno",
    hrefLabel: "github.com/sandstream/ralph-inferno",
  },
];

function Case({ data }) {
  const renderName = () =>
    data.name.map((word, i) => (
      <span key={i}>
        {i > 0 && " "}
        {i === data.italic ? <em>{word}</em> : word}
      </span>
    ));

  return (
    <article className="case">
      <div className="case-num">{data.num}</div>
      <div className="case-title-block">
        <div className="case-name">{renderName()}</div>
        <div className="case-tagline">{data.tagline}</div>
      </div>
      <div className="case-body">
        <div className="case-desc">{data.desc}</div>
        <div className="case-meta">
          {data.meta.map((m, i) => (
            <span key={i}><b>{m.l}</b> {m.v}</span>
          ))}
        </div>
        <a className="case-link" href={data.href} target="_blank" rel="noreferrer">
          {data.hrefLabel} <span style={{ fontFamily: "var(--font-mono)" }}>↗</span>
        </a>
      </div>
    </article>
  );
}

function Cases() {
  return (
    <section id="work" className="section dark" data-screen-label="02 Selected Work">
      <div className="section-label">
        <span><span className="num">/ 02</span> &nbsp; selected work</span>
        <span className="bar"></span>
      </div>

      <div className="cases-head">
        <h2 className="cases-title">
          Four cases. <em>One method.</em>
        </h2>
        <p className="cases-intro">
          Recent work that captures the shape of how Peter operates: small teams, modern AI tooling, deep domain understanding, and a bias toward shipping something real in weeks — not roadmapping it for quarters.
        </p>
      </div>

      <div className="cases-grid">
        {CASES.map((c) => <Case key={c.num} data={c} />)}
      </div>
    </section>
  );
}

window.Cases = Cases;
