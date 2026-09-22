// MetaStrip.jsx — recurring mono-metadata strip used in hero and contact

function MetaStrip({ items, dark }) {
  return (
    <div className="hero-meta" style={dark ? { color: "var(--ink-300)" } : null}>
      {items.map((group, i) => (
        <div key={i} className={"grp" + (group.align === "right" ? " right" : "")}>
          {group.lines.map((line, j) => (
            <span key={j}>
              {line.label && <b>{line.label}</b>}
              {line.label && " "}
              {line.value}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

window.MetaStrip = MetaStrip;
