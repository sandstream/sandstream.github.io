// Intro timeline for sandstre-intro.html. A file, not an inline <script>, so the
// page's Content-Security-Policy needs no 'unsafe-inline' for scripts.

const VARIANTS = [
  { html: 'sandström' },
  { html: 'sandstroem' },
  { html: 'sandstream' },
  { html: 'săndstrēm' },
  { html: 'sandstre<span class="tld-dot">.</span><span class="tld">am</span>', final: true },
];

const HOLD_MS = 780;        // time a variant stays "in"
const CROSSFADE_MS = 240;   // overlap between out and in
const FINAL_HOLD_MS = 1100; // extra time for the final settle

const stage = document.getElementById('stage');
const stepEl = document.getElementById('step-indicator');
const enterEl = document.getElementById('enter');
const skipEl = document.getElementById('skip');
const phoneticEl = document.getElementById('phonetic');
const progressEl = document.getElementById('progress');

// Build all variant layers up front, so they share a stacking context
const layers = VARIANTS.map((v, i) => {
  const el = document.createElement('div');
  el.className = 'variant' + (v.final ? ' final' : '');
  el.innerHTML = v.html;
  el.setAttribute('data-i', i);
  stage.appendChild(el);
  return el;
});

let idx = -1;
let timer = null;
let done = false;

// Fit each variant's font-size so it fills the viewport width
function fitAll() {
  const target = window.innerWidth * 0.84; // 8% pad each side
  layers.forEach((layer) => {
    // Measure natural width at a known size, then scale
    const naturalSize = 100;
    const prev = layer.style.fontSize;
    layer.style.fontSize = naturalSize + 'px';
    // Temporarily make visible-but-transparent to measure
    const wasOpaque = layer.style.opacity;
    const wasTransform = layer.style.transform;
    layer.style.opacity = '0';
    layer.style.transform = 'translate(-50%, -50%) scale(1)';
    layer.style.filter = 'none';
    const w = layer.getBoundingClientRect().width;
    layer.style.fontSize = (naturalSize * (target / w)) + 'px';
    // restore — actual class-driven state will override on next frame
    layer.style.opacity = wasOpaque;
    layer.style.transform = wasTransform;
    layer.style.filter = '';
  });
}

function showNext() {
  // mark the current one .out, the next .in
  if (idx >= 0) {
    const cur = layers[idx];
    cur.classList.remove('in');
    cur.classList.add('out');
  }
  idx++;
  if (idx >= layers.length) return; // shouldn't happen

  const next = layers[idx];
  next.classList.remove('out');
  next.classList.add('in');

  stepEl.textContent = String(idx + 1).padStart(2, '0') + ' / ' + String(layers.length).padStart(2, '0');
  progressEl.style.width = (((idx + 1) / layers.length) * 100) + '%';

  // Reveal phonetic hint on the second-to-last variant
  if (idx === layers.length - 2) phoneticEl.classList.add('show');

  const isFinal = idx === layers.length - 1;
  if (isFinal) {
    done = true;
    skipEl.classList.remove('show');
    setTimeout(() => { enterEl.classList.add('show'); }, 600);
    return;
  }

  timer = setTimeout(showNext, HOLD_MS);
}

function skipToEnd() {
  if (done) return;
  if (timer) clearTimeout(timer);
  // mark every non-final as out, the final as in
  layers.forEach((l, i) => {
    l.classList.remove('in', 'out');
    l.classList.add(i === layers.length - 1 ? 'in' : 'out');
  });
  idx = layers.length - 1;
  stepEl.textContent = String(idx + 1).padStart(2, '0') + ' / ' + String(layers.length).padStart(2, '0');
  progressEl.style.width = '100%';
  phoneticEl.classList.add('show');
  done = true;
  skipEl.classList.remove('show');
  setTimeout(() => { enterEl.classList.add('show'); }, 700);
}

// Boot
function boot() {
  fitAll();
  showNext();
  setTimeout(() => skipEl.classList.add('show'), 600);
}
// wait for fonts so measurements are accurate
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(boot);
} else {
  setTimeout(boot, 200);
}

// Interactions
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') skipToEnd();
  if (e.key === 'Enter' && done) window.location.href = '../ui_kits/portfolio/index.html';
});
document.addEventListener('click', (e) => {
  if (e.target.closest('a')) return;
  if (!done) skipToEnd();
  else window.location.href = '../ui_kits/portfolio/index.html';
});
window.addEventListener('resize', () => requestAnimationFrame(fitAll));
