// Behaviour for /kit. Kept out of the HTML so the page's Content-Security-Policy
// needs no 'unsafe-inline' for scripts (and no inline onclick handlers).
function copyCmd(btn) {
  const cmd = btn.previousElementSibling.textContent;
  navigator.clipboard.writeText(cmd).then(() => {
    btn.classList.add('copied');
    btn.textContent = 'copied';
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.textContent = 'copy';
    }, 1500);
  });
}

// Keep the version pill in sync with the published npm release (no drift).
// Fails open: the hardcoded fallback above stays if the fetch is blocked.
fetch('https://registry.npmjs.org/sandstream-kit/latest')
  .then((r) => (r.ok ? r.json() : null))
  .then((d) => {
    if (d && d.version) {
      const el = document.getElementById('version-pill');
      if (el) el.textContent = 'v' + d.version;
    }
  })
  .catch(() => { /* offline / blocked — keep fallback */ });

document.querySelectorAll('.install-block button[data-copy]').forEach((btn) => {
  btn.addEventListener('click', () => copyCmd(btn));
});
