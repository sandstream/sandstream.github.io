// App.jsx — composes the page. Tracks active section via IntersectionObserver
// for nav highlighting. Smooth-scroll on nav clicks.

const { useState, useEffect, useCallback, useRef } = React;

function App() {
  const [active, setActive] = useState("top");

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const openSchedule = useCallback(() => {
    window.open("https://cal.eu/sandstream/quick-chat", "_blank", "noopener,noreferrer");
  }, []);

  useEffect(() => {
    const sections = ["top", "about", "work", "roles", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top with majority visibility
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // Re-render Lucide icons after mount
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);

  return (
    <div className="page">
      <Header active={active === "top" ? "" : active} onNav={scrollTo} />
      <main className="main">
        <Hero onSchedule={openSchedule} />
        <About />
        <Cases />
        <Roles />
        <Contact onSchedule={openSchedule} />
      </main>
      <FloatingPill onClick={openSchedule} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
