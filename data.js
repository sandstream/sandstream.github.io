/* ── Translations ── */
const T = {
  sv: {
    heroHeadline: ["Idéer och kod, ", "varje dag."],
    heroSub: "Peter Sandström, hands-on tech lead och konsult. Tar engagemang där djup teknisk kompetens, snabb idégenerering och förmågan att faktiskt leverera kod krävs. Interim, projekt och rådgivning.",
    heroCta: "Boka möte",
    heroEmail: "Skicka mail",
    heroMetaLeft: [
      { label: "STOCKHOLM", value: "· 59.33°N · 18.07°E" },
      { label: "SANDSTREAM AB", value: "· ORG.NR 559399-3099" },
    ],
    heroMetaRight: [
      { label: "ÖPPEN FÖR", value: "ENGAGEMANG" },
      { value: "SVAR < 24H" },
    ],
    heroMetaBottomLeft: [
      { label: "NU", value: "AI & Innovation Lead · Frontwalker" },
      { label: "GRUNDAT", value: "Sandstream AB · 2023" },
    ],
    heroMetaBottomRight: [
      { label: "SPRÅK", value: "Svenska · Engelska" },
      { label: "BASERAT", value: "Stockholm · remote-first" },
    ],
    navLabels: ["Bio", "Byggen", "Musik", "Roller", "Kontakt"],
    s01: "om peter",
    aboutHeadline: ["Bygger snabbt. Tänker djupt. ", "Levererar.", ""],
    aboutP1: "Peter förstår affären, inte bara tekniken. Han tar ägarskap från kravsamling och produktstrategi till arkitektur, bygge och lansering. Med 20+ års erfarenhet vet han var teknik skapar värde och var den bara kostar pengar.",
    aboutP2: "Idag bygger Peter med agentisk AI som primärt verktyg: snabba prototyper, produkter som skalas och automatiseringar som faktiskt går i produktion. Han täcker hela kedjan: från affärskrav och säkerhet till marknadsföring och produktlansering.",
    stat1l: "År av teknikbyggande",
    stat2l: "Största teamet · Devoteam",
    stat3l: "Idéer → prod, varje gång",
    s02: "byggen",
    casesHeadline: ["Åtta byggen. ", "En metod."],
    casesIntro: "Projekt som visar hur Peter jobbar: tätt team, snabba beslut, idéer varje dag och stark dragning mot att leverera något verkligt på veckor, inte planera det i kvartal.",
    s03: "musikprojekt",
    musicHeadline: ["Vid sidan av: ", "musik."],
    musicSub: "Två projekt, två register. Båda skrivna, producerade och framförda självständigt.",
    s04: "valda roller · 20 år",
    rolesHeadline: ["Tjugo år av ", "uppdrag."],
    rolesP: "En kortfattad timeline över formella roller. Fullständigt CV och case-beskrivningar på begäran.",
    s05: "kontakt",
    contactHeadline: ["Söker ni en ", "tech lead", " som bygger?"],
    contactCta: "Boka möte",
    col1label: "Email", col1sub: "Svar inom 24 timmar, vardagar.",
    col2label: "LinkedIn", col2sub: "Kontakta direkt.",
    col3label: "Kalender", col3sub: "30 min · ingen kostnad · inga presentationer.",
    pillLabel: "Boka möte",
  },
  en: {
    heroHeadline: ["Ideas and code, ", "every day."],
    heroSub: "Peter Sandström, hands-on tech lead and consultant. Takes engagements requiring deep technical expertise, rapid idea generation and the ability to ship real code. Interim, project and advisory.",
    heroCta: "Book a meeting",
    heroEmail: "Send email",
    heroMetaLeft: [
      { label: "STOCKHOLM", value: "· 59.33°N · 18.07°E" },
      { label: "SANDSTREAM AB", value: "· ORG.NR 559399-3099" },
    ],
    heroMetaRight: [
      { label: "OPEN TO", value: "ENGAGEMENTS" },
      { value: "RESPONSE < 24H" },
    ],
    heroMetaBottomLeft: [
      { label: "NOW", value: "AI & Innovation Lead · Frontwalker" },
      { label: "FOUNDED", value: "Sandstream AB · 2023" },
    ],
    heroMetaBottomRight: [
      { label: "LANG", value: "Swedish · English" },
      { label: "BASED", value: "Stockholm · remote-first" },
    ],
    navLabels: ["Bio", "Builds", "Music", "Roles", "Contact"],
    s01: "about peter",
    aboutHeadline: ["Builds fast. Thinks deep. ", "Ships.", ""],
    aboutP1: "Peter understands the business, not just the technology. He takes ownership from requirements and product strategy through to architecture, build and launch. 20+ years of knowing where technology creates value and where it just costs money.",
    aboutP2: "Today Peter builds with agentic AI as his primary tool: fast prototypes, products that scale, and automations that actually ship to production. He covers the full chain: from business requirements and security to marketing and go-to-market.",
    stat1l: "Years building tech",
    stat2l: "Largest team led · Devoteam",
    stat3l: "Ideas → prod, every time",
    s02: "builds",
    casesHeadline: ["Eight builds. ", "One method."],
    casesIntro: "Projects showing how Peter works: tight team, fast decisions, daily ideas and a strong bias toward shipping something real in weeks, not planning it in quarters.",
    s03: "music projects",
    musicHeadline: ["On the side: ", "music."],
    musicSub: "Two projects, two different registers. Both written, produced and performed independently.",
    s04: "selected roles · 20 years",
    rolesHeadline: ["Twenty years of ", "engagements."],
    rolesP: "A concise timeline of formal roles. Full CV and case descriptions available on request.",
    s05: "let's talk",
    contactHeadline: ["Looking for a ", "tech lead", " who builds?"],
    contactCta: "Book a meeting",
    col1label: "Email", col1sub: "Reply within 24 hours on weekdays.",
    col2label: "LinkedIn", col2sub: "Connect and message directly.",
    col3label: "Calendar", col3sub: "30 min · no cost · no slides.",
    pillLabel: "Book a meeting",
  },
};

/* ── Cases ── */
const CASES = [
  {
    num: "/01",
    name: ["Hunter", "Matcher"], italic: 1,
    tagline: { sv: "AI-driven konsultmatchning · från idé till produktion på tre månader.", en: "AI-driven consultant matching · from idea to production in three months." },
    desc: {
      sv: "Frontwalkers interna matchningsprocess körde på mejl, Excel och magkänsla. Varje matchning tog timmar och ledde till missar. Peter designade och byggde hela kedjan: mejlintag, AI-tolkning av uppdragskrav, vektorrepresentationer av konsultprofiler och realtidsrankning med Vertex AI. Satte ihop hela stacken: frontend, backend, integrationer och AI-lager. Resultat: 180 konsulter matchas automatiskt. Driftkostnad 13 kr/konsult/månad. Manuell hantering borta.",
      en: "Frontwalker's internal matching process ran on email, spreadsheets and gut feel. Every match took hours and caused misses. Peter designed and built the entire pipeline: email ingress, LLM parsing of assignment requirements, vector embeddings of consultant profiles and real-time ranking with Vertex AI. Assembled the full stack: frontend, backend, integrations and AI layer. Result: 180 consultants matched automatically. Operating cost 13 SEK/consultant/month. Manual handling eliminated.",
    },
    meta: [
      { l: "ROLE", v: "Tech lead · AI architect" },
      { l: "STACK", v: "React 19 · Convex · Vertex AI" },
      { l: "RESULT", v: "180 consultants · 13 kr/mo" },
      { l: "YEAR", v: "2025–26" },
    ],
    href: "https://huntermatcher.vercel.app/", hrefLabel: "huntermatcher.vercel.app",
  },
  {
    num: "/02",
    name: ["Kjorre"], italic: 0,
    tagline: { sv: "Kassasystem för föreningskiosker · Swish och kort, en kodbas.", en: "Point-of-sale for club kiosks · Swish and card payments, one codebase." },
    desc: {
      sv: "Idrottsföreningar driver kiosker på ideell kraft — kassahantering, Swish-betalningar och bokföringsunderlag sköts manuellt. Peter byggde Kjorre från noll: QR-baserad självbetjäning, Swish- och Stripe-integration, kassaregister med journalkrav och en adminportal per förening. Multi-tenant från dag ett. Resultat: Föreningar tar betalt digitalt utan kassapersonal, med bokföringsunderlag genererat automatiskt.",
      en: "Sports clubs run kiosks on volunteer effort — cash handling, Swish payments and bookkeeping are all manual. Peter built Kjorre from scratch: QR-based self-service, Swish and Stripe integration, a compliant cash-register journal and a per-club admin portal. Multi-tenant from day one. Result: Clubs take digital payments without staffing a till, with bookkeeping records generated automatically.",
    },
    meta: [
      { l: "ROLE", v: "Founding tech · architecture" },
      { l: "STACK", v: "Next.js · Swish · Stripe" },
      { l: "SECTOR", v: "Payments · self-service" },
      { l: "YEAR", v: "2025–26" },
    ],
    href: "https://www.kjorre.com", hrefLabel: "kjorre.com",
  },
  {
    num: "/03",
    name: ["Game Day", "DJ"], italic: 1,
    tagline: { sv: "Realtidsljud för amatörsport · stadionkänsla utan stadionbudget.", en: "Real-time arena sound for amateur sports · stadium energy, zero budget." },
    desc: {
      sv: "Tränare och funktionärer vid amatörsportmatcher saknade enkel tillgång till stämningsskapande ljud: det som skiljer en riktig match från ett träningspass. Peter byggde en iOS-app med signalbaserad uppspelning och nedladdningsbara ljudpaket utan streamingberoenden under match. Satte ihop hela ljudbiblioteket och byggde systemet för livehändelser. Resultat: App live i App Store. Aktiv användarbas. Fungerar utan uppkoppling. Tränare använder den från dag ett.",
      en: "Coaches and volunteers at amateur sports events had no easy access to crowd-energising audio: the thing that separates a real game from a training session. Peter built an iOS app with cue-based playback and offline-first audio packs with no streaming dependency during the game. Curated the entire sound library and built the live event trigger system. Result: App live on the App Store. Active user base. Works without connectivity. Coaches use it from day one.",
    },
    meta: [
      { l: "ROLE", v: "Product · iOS · audio" },
      { l: "STACK", v: "iOS · Firebase · WebAudio" },
      { l: "SECTOR", v: "Sports tech · live audio" },
      { l: "YEAR", v: "2024–26" },
    ],
    href: "https://gamedaydj.app", hrefLabel: "gamedaydj.app",
  },
  {
    num: "/04",
    name: ["Ralph", "Inferno"], italic: 1,
    tagline: { sv: "Autonom kodningsworkflow · bygger medan du sover.", en: "Autonomous coding workflow · builds while you sleep." },
    desc: {
      sv: "Agentiska kodningsverktyg saknade tydliga kontrollpunkter och kollapsade på långa uppgifter. Ingen visste vad agenten egentligen gjort. Peter designade och byggde en AI-agnostisk orkestreringsmotor för autonom kodgenerering med explicita verifikationspunkter och full spårbarhet. Kommandoradsverktyg utan beroende av specifik AI-leverantör. Gjort reproducerbart och granskningsbart. Resultat: Öppen källkod med aktiv community. Byggd för långsiktiga autonoma kodningsflöden med kontroll inbyggd från dag ett.",
      en: "Agentic coding tools lacked transparent safety gates and collapsed on long-horizon tasks. Nobody knew what the agent had actually done. Peter designed and built an LLM-agnostic orchestration engine for autonomous code generation with explicit verification gates and full traceability. CLI-first, no provider lock-in. Made it reproducible and auditable. Result: Open source with active community. Designed for long-horizon autonomous coding workflows with control and traceability built in from day one.",
    },
    meta: [
      { l: "ROLE", v: "Creator · open source" },
      { l: "STACK", v: "Node · LLM-agnostic · CLI" },
      { l: "SECTOR", v: "Developer tooling" },
      { l: "YEAR", v: "2025–26" },
    ],
    href: "https://github.com/sandstream/ralph-inferno", hrefLabel: "github.com/sandstream/ralph-inferno",
  },
  {
    num: "/05",
    name: ["Iris", "Rapporter"], italic: 1,
    tagline: { sv: "Automatiserad stiftelserapportering · lagstadgade rapporter utan manuellt arbete.", en: "Automated foundation reporting · statutory reports without manual effort." },
    desc: {
      sv: "Stiftelseförvaltare lägger hundratals timmar per år på att producera lagstadgade rapporter: kapitalförvaltning, avkastning, kontoprickning och kursuppdateringar, allt manuellt i kalkylark. Peter designade och byggde hela plattformen från noll: FastAPI-backend, React-frontend och integrationer mot Visma.NET ERP och Google Document AI för automatisk datainläsning och dokumenthantering. Kollegan ansvarade för det juridiska och finansiella regelverket. Resultat: Produktionsklar plattform i drift. Lagstadgade rapporter genereras automatiskt. Manuellt arbete ersatt av ett klick.",
      en: "Foundation managers spend hundreds of hours per year producing statutory reports: capital management, yield analysis, account reconciliation and price updates, all manually in spreadsheets. Peter designed and built the entire platform from scratch: FastAPI backend, React frontend and integrations with Visma.NET ERP and Google Document AI for automated data ingestion and document processing. His colleague owned the legal and financial regulatory domain. Result: Production-ready platform in operation. Statutory reports generated automatically. Manual work replaced by a click.",
    },
    meta: [
      { l: "ROLE", v: "Tech lead · full-stack" },
      { l: "STACK", v: "FastAPI · React 19 · Firebase · Visma.NET · GCP" },
      { l: "SECTOR", v: "Fintech · foundation mgmt" },
      { l: "YEAR", v: "2025–26" },
    ],
    href: null, hrefLabel: null,
  },
  {
    num: "/06",
    name: ["Sordin", "Brand Brain"], italic: 1,
    tagline: { sv: "AI-driven kreativ pipeline · från kampanjhypotes till 20 brandade annonsvarianter.", en: "AI-driven creative pipeline · from campaign hypothesis to 20 on-brand ad variants." },
    desc: {
      sv: "Sordins marknadsteam (tre personer) saknade kapacitet att skala innehållsproduktionen till 10–20 nya annonsvarianter i veckan. AI-verktyg användes fragmenterat i privata konton, utan gemensam ton, claim-bibliotek eller bildbank. Peter byggde Sordin Brand Brain: en RAG-baserad AI-assistent som bär Sordins tonalitet, tillåtna claims och visuella regler, kopplad till en kreativ pipeline som automatiskt genererar brandkonsekventa annonsvarianter i flera format. Stack: Python-orkestrator, Imagen 4, Claude och DeepL. Pågående. Prototypfas levererad, fas 1 under planering.",
      en: "Sordin's marketing team (three people) lacked capacity to scale content production to 10–20 new ad variants per week. AI tools were used in fragments across private accounts, with no shared tone of voice, claim library or asset bank. Peter built Sordin Brand Brain: a RAG-based AI assistant carrying Sordin's tone, approved claims and visual rules, connected to a creative pipeline that automatically generates on-brand ad variants in multiple formats. Stack: Python orchestrator, Imagen 4, Claude and DeepL. Ongoing. Prototype phase delivered, phase 1 in planning.",
    },
    meta: [
      { l: "ROLE", v: "AI architect · tech lead" },
      { l: "STACK", v: "Python · RAG · Imagen 4 · Claude · DeepL" },
      { l: "SECTOR", v: "Martech · brand AI" },
      { l: "YEAR", v: "2025–26" },
    ],
    href: null, hrefLabel: null,
  },
  {
    num: "/07",
    name: ["kit"], italic: 0,
    tagline: { sv: "Säkerhets-CLI för AI-agenter och människor · noll LLM-anrop.", en: "Security-first developer CLI for AI agents and humans · zero LLM calls." },
    desc: {
      sv: "Varje gång ett projekt startas, av människa eller AI-agent, saknas verktyg, inloggningar och secrets — och API-nycklar läcker. Peter byggde kit: en CLI som tar ett projekt från git clone till körbar miljö med ett kommando. Secrets-hantering över 11 vault-backends, supply-chain-scanning, multi-repo-säkerhetsbaselines och TOTP-gated elevation för destruktiva operationer. Noll LLM-anrop, lokal-först, noll telemetri. Open source under MIT.",
      en: "Every time a project starts, by a human or an AI agent, tools are missing, logins are expired, secrets leak. Peter built kit: a CLI taking a project from git clone to a working environment in one command. Secrets management across 11 vault backends, supply-chain scanning, multi-repo security baselines and TOTP-gated elevation for destructive operations. Zero LLM calls, local-first, zero telemetry. Open source under MIT.",
    },
    meta: [
      { l: "ROLE", v: "Creator · open source" },
      { l: "STACK", v: "Node.js · TypeScript · npm" },
      { l: "SECTOR", v: "DevSecOps · AI tooling" },
      { l: "YEAR", v: "2025–26" },
    ],
    href: "/kit", hrefLabel: "sandstre.am/kit",
  },
  {
    num: "/08",
    name: ["sandstre", ".am"], italic: 1,
    tagline: { sv: "Den här sidan · designsystem, plain static och Claude Code som primärt verktyg.", en: "This site · design system, plain static and Claude Code as the primary tool." },
    desc: {
      sv: "Portfoliositen behövde reflektera hur Peter faktiskt bygger, inte hur en Jekyll-mall ser ut. Startpunkten var ett eget designsystem med kodade tokens, typografi och ett komponentbibliotek i kod. Därifrån byggdes sidan med Claude Code: migration från Jekyll till plain static, komponentstruktur i React via CDN och nya sektioner. Inget build-steg, inga beroenden. Deployad direkt via GitHub Pages. Resultat: En sida som är snabb, enkel att underhålla och som faktiskt demonstrerar det arbetsflöde den beskriver.",
      en: "The portfolio site needed to reflect how Peter actually builds, not what a Jekyll template looks like. Starting point was a custom design system with coded tokens, typography and a component library in code. From there the site was built with Claude Code: migration from Jekyll to plain static, component structure in React via CDN and new sections. No build step, no dependencies. Deployed directly via GitHub Pages. Result: A site that is fast, easy to maintain and actually demonstrates the workflow it describes.",
    },
    meta: [
      { l: "ROLE", v: "Builder · designer" },
      { l: "TOOL", v: "Claude Code" },
      { l: "STACK", v: "React 18 · Babel · CSS design system · GitHub Pages" },
      { l: "YEAR", v: "2026" },
    ],
    href: null, hrefLabel: null,
  },
];

/* ── Roles ── */
const ROLES = [
  {
    when: "2026 → NU", org: "Frontwalker",
    title: { sv: "AI & Innovation Lead", en: "AI & Innovation Lead" },
    tag: { sv: "Pågående", en: "Current" },
    desc: {
      sv: "Frontwalker ställer om. AI ska inte vara ett lager ovanpå befintliga tjänster utan ett nytt sätt att arbeta. Peter leder den tekniska AI-omställningen för hela koncernen: strategi, arkitektur, kundleveranser och intern kompetensutveckling. Bygger parallellt med att leverera.",
      en: "Frontwalker is transforming. AI is not a layer on top of existing services but a new way of working. Peter leads the technical AI transformation across the entire group: strategy, architecture, client deliveries and internal capability building. Building while delivering.",
    },
  },
  {
    when: "2025–2026", org: "Frontwalker AIDA",
    title: { sv: "AI-konsult & medgrundare", en: "AI Consultant & Co-founder" },
    tag: { sv: "Grundade HunterMatcher", en: "Co-founded HunterMatcher" },
    desc: {
      sv: "Peter grundade Frontwalker AIDA AB tillsammans med moderbolaget, ett dedikerat erbjudande för att bygga AI-produkter och AI-tjänster. Byggde HunterMatcher och Iris Rapporter som de första leveranserna: ett internt matchningssystem och en plattform för automatiserad stiftelserapportering. Rollen la grunden för den bredare AI-omställningen av hela Frontwalker-koncernen.",
      en: "Peter co-founded Frontwalker AIDA AB with the parent company, a dedicated offering to build AI products and services. Built HunterMatcher and Iris Rapporter as the first deliveries: an internal matching system and a platform for automated foundation reporting. The role laid the foundation for the broader AI transformation across the entire Frontwalker group.",
    },
  },
  {
    when: "2023–2024", org: "Sandstream AB",
    title: { sv: "Grundare & konsult", en: "Founder & Consultant" },
    tag: { sv: "Interim · rådgivning", en: "Interim · advisory" },
    desc: {
      sv: "Startade Sandstream AB för att ta uppdrag på egna villkor och testa om djup teknisk kompetens räcker som affärsmodell. Byggde Kjorre och Game Day DJ från noll och tog rollen som grundande tekniker i båda projekten. Det räckte.",
      en: "Founded Sandstream AB to take engagements on his own terms and test whether deep technical expertise is enough as a business model. Built Kjorre and Game Day DJ from scratch, taking the founding technical role in both. It was.",
    },
  },
  {
    when: "2021–2023", org: "Devoteam Creative Tech",
    title: { sv: "Managing Director", en: "Managing Director" },
    tag: { sv: "Team 13 → 35", en: "Team 13 → 35" },
    desc: {
      sv: "Devoteam Creative Tech hade potential att bli ett av de ledande digitala byråerna i Norden, men teamet och affären behövde struktur. Peter tog teamet från 13 till 35 personer, byggde en kommersiell pipeline och höjde den tekniska ribban. Utan att tappa det som gjort bolaget bra.",
      en: "Devoteam Creative Tech had the potential to become one of the leading digital agencies in the Nordics, but the team and business needed structure. Peter grew the team from 13 to 35 people, built a commercial pipeline and raised the technical bar. Without losing what made the company good.",
    },
  },
  {
    when: "2019–2021", org: "Deloitte AB",
    title: { sv: "CTO Mobiento · Senior Manager", en: "CTO Mobiento · Senior Manager" },
    tag: { sv: "M&A · Conversational AI", en: "M&A · Conversational AI" },
    desc: {
      sv: "Deloitte förvärvade Mobiento och behövde integrera en produktdriven mobilstudio i en stor konsultstruktur utan att förlora kompetensen. Peter höll CTO-rollen under hela övergången, drev Conversational AI-initiativ och hanterade den tekniska integrationen av förvärvet.",
      en: "Deloitte acquired Mobiento and needed to integrate a product-driven mobile studio into a large consulting structure without losing the talent. Peter held the CTO role throughout the transition, drove Conversational AI initiatives and managed the technical integration of the acquisition.",
    },
  },
  {
    when: "2017–2018", org: "SATS ELIXIA",
    title: { sv: "Nordic Engineering Manager", en: "Nordic Engineering Manager" },
    tag: { sv: "Online ↑ 5% → 13%", en: "Online ↑ 5% → 13%" },
    desc: {
      sv: "SATS/ELIXIA hade en digital närvaro som halkat efter: online stod för 5 % av försäljningen. Peter tog ansvaret för hela den nordiska teknikorganisationen och drev en omläggning som tog online-andelen till 13 % inom ett år.",
      en: "SATS/ELIXIA had a digital presence that had fallen behind: online represented just 5% of sales. Peter took responsibility for the entire Nordic tech organisation and drove a transformation that took the online share to 13% within a year.",
    },
  },
  {
    when: "2012–2017", org: "SATS ELIXIA",
    title: { sv: "Nordic IT Ops / Infra / CRM", en: "Nordic IT Ops / Infra / CRM" },
    tag: { sv: "Cloud-First · Azure", en: "Cloud-First · Azure" },
    desc: {
      sv: "Ansvarade för IT-drift, infrastruktur och CRM-plattformen för hela Norden under en period av snabb tillväxt. Drev övergången till molnbaserade lösningar och standardiserade teknisk arkitektur över marknaderna. Grunden för den digitala omläggning som kom senare.",
      en: "Responsible for IT operations, infrastructure and CRM platform across the Nordics during a period of rapid growth. Drove the transition to cloud-based solutions and standardised technical architecture across markets. The foundation for the digital transformation that followed.",
    },
  },
  {
    when: "2011–2012", org: "Boots Apotek",
    title: { sv: "IT Manager", en: "IT Manager" },
    tag: { sv: "0 → 9 apotek", en: "0 → 9 pharmacies" },
    desc: {
      sv: "Boots Apotek expanderade snabbt i Sverige och behövde IT-stöd som höll i skalningen. Peter etablerade infrastruktur och processer för noll till nio apotek. Ingenting föll sönder.",
      en: "Boots Apotek was expanding rapidly in Sweden and needed IT support that held up under scaling. Peter established infrastructure and processes for the zero-to-nine-pharmacy expansion. Nothing broke.",
    },
  },
  {
    when: "2005–2011", org: "SwedSec Licensiering",
    title: { sv: "IT-chef & Webbansvarig", en: "IT Director & Web Manager" },
    tag: { sv: "MVC · REST · DevOps", en: "MVC · REST · DevOps" },
    desc: {
      sv: "SwedSec saknade en teknisk ledare och hela IT-miljön behövde byggas från noll. Under sex år byggde Peter hela plattformen: webbutveckling, infrastruktur och processer. Introducerade MVC-arkitektur, REST-gränssnitt och DevOps-principer i en organisation som aldrig haft en teknisk chef.",
      en: "SwedSec had no technical leader and the entire IT environment needed to be built from scratch. Over six years, Peter built the entire platform: web development, infrastructure and processes. Introduced MVC architecture, REST APIs and DevOps principles to an organisation that had never had a technical leader.",
    },
  },
];
