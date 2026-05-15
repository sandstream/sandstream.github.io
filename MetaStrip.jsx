function MetaStrip({ left, right }) {
  return (
    <div className="hero-meta">
      <div className="grp">
        {left.map((item, i) => (
          <span key={i}>{item.label && <b>{item.label} </b>}{item.value}</span>
        ))}
      </div>
      <div className="grp right">
        {right.map((item, i) => (
          <span key={i}>{item.label && <b>{item.label} </b>}{item.value}</span>
        ))}
      </div>
    </div>
  );
}
