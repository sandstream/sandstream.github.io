const { useState, useEffect, useCallback } = React;

function App() {
  const [lang, setLang] = useState("sv");
  const [active, setActive] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = useCallback((id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const mobileOffset = window.innerWidth <= 720 ? 64 : 0;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - mobileOffset, behavior: "smooth" });
  }, []);

  const openSchedule = useCallback(() => {
    setMenuOpen(false);
    window.open("https://cal.eu/sandstream/quick-chat", "_blank", "noopener,noreferrer");
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const ids = ["top", "about", "work", "music", "roles", "contact"];
    const onScroll = () => {
      const threshold = window.scrollY + window.innerHeight * 0.15;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= threshold) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="page">
      <Header lang={lang} setLang={setLang} active={active === "top" ? "" : active} onNav={scrollTo} />
      <MobileBar
        lang={lang} setLang={setLang}
        menuOpen={menuOpen} onToggle={() => setMenuOpen(o => !o)}
        onWordmark={() => scrollTo("top")}
      />
      <MobileNavOverlay lang={lang} active={active === "top" ? "" : active} onNav={scrollTo} menuOpen={menuOpen} />
      <main className="main">
        <Hero lang={lang} onSchedule={openSchedule} />
        <About lang={lang} />
        <Cases lang={lang} />
        <Music lang={lang} />
        <Roles lang={lang} />
        <Contact lang={lang} onSchedule={openSchedule} />
      </main>
      <FloatingPill lang={lang} onClick={openSchedule} active={active} menuOpen={menuOpen} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
