/* Tabletki.ua — логіка застосунку. Компоненти й токени — з дизайн-системи ЛР3. */

/* ========== 1. Іконки (лінійні, 24 px, stroke 2) ========== */
const IC = {
  home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9v12h14V9"/><path d="M10 21v-6h4v6"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  pill:'<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
  bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/>',
  back:'<path d="m15 18-6-6 6-6"/>',
  chev:'<path d="m9 18 6-6-6-6"/>',
  down:'<path d="m6 9 6 6 6-6"/>',
  pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  close:'<path d="M18 6 6 18M6 6l12 12"/>',
  alert:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',
  rx:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M9 13h6M9 17h6"/>',
  sparkle:'<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  minus:'<path d="M5 12h14"/>',
  bag:'<path d="M6 7h12l-1 14H7L6 7Z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',
  truck:'<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
  refresh:'<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/>',
  loader:'<path d="M21 12a9 9 0 1 1-6.2-8.6"/>',
  trash:'<path d="M4 7h16M10 11v6M14 11v6"/><path d="M6 7l1 13h10l1-13"/><path d="M9 7V4h6v3"/>',
  wifioff:'<path d="M3 3l18 18"/><path d="M5 12.5a11 11 0 0 1 4-2.6M2 8.8a16 16 0 0 1 5-3.1M12 20h.01"/><path d="M8.5 16a5 5 0 0 1 3.5-1.5c.6 0 1.2.1 1.7.3"/><path d="M22 8.8a16 16 0 0 0-8-4.3"/>',
  thermometer:'<path d="M12 14V4a2 2 0 1 1 4 0v10a4 4 0 1 1-4 0Z"/>',
  snow:'<path d="M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9"/>',
  flower:'<circle cx="12" cy="12" r="2.5"/><path d="M12 9.5V5M12 14.5V19M9.5 12H5M14.5 12H19"/>',
  stomach:'<path d="M8 4v5a5 5 0 0 0 5 5 4 4 0 0 1 0 8c-4 0-7-3-7-7V8"/>',
  heart:'<path d="M12 20s-7-4.5-7-9.5A4 4 0 0 1 12 8a4 4 0 0 1 7 2.5C19 15.5 12 20 12 20Z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/>',
  bandage:'<rect x="2.5" y="8.5" width="19" height="7" rx="3.5" transform="rotate(-45 12 12)"/><path d="M10 10l4 4M14 10l-4 4"/>',
  baby:'<circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01"/><path d="M9.5 15a4 4 0 0 0 5 0"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  star:'<path d="m12 3 2.6 5.6 6.1.8-4.5 4.2 1.2 6L12 16.8 6.6 19.6l1.2-6L3.3 9.4l6.1-.8Z"/>',
  edit:'<path d="M4 20h4l10-10-4-4L4 16v4Z"/><path d="m13.5 6.5 4 4"/>',
};
const ic = (n, c = '') => `<svg class="i ${c}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n] || ''}</svg>`;

/* ========== 2. Стан ========== */
const KEY = 'tabletki-v1';
function initState() {
  return {
    stack: [{ s: 'home' }], tab: 'home',
    q: '', filt: { open: false, near: false, norx: false }, focusSearch: false, loadingRes: false,
    qty: {}, rxOk: {}, ai: {}, aiChat: [], aiFail: true,
    cart: [], draft: null, orders: [], orderSeq: 48213,
    kit: [
      { id: 'ibu400', left: 4, per: 2, unit: 'таб.', note: '1 таб. × 2 рази на день' },
      { id: 'd3', left: 24, per: 1, unit: 'капс.', note: '1 капс. щодня, зранку' },
      { id: 'lorat', left: 7, per: 1, unit: 'таб.', note: '1 таб. увечері' },
    ],
    doneToday: [], snooze: {}, remindOn: true,
    profile: { name: 'Юрій', phone: '', addr: 'вул. Пасічна, 42, кв. 17' },
    phSort: 'near', kitAdd: null,
  };
}
let S = load() || initState();
if (!S.snooze) S.snooze = {};
function load() { try { const r = localStorage.getItem(KEY); return r ? JSON.parse(r) : null; } catch (e) { return null; } }
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
const cur = () => S.stack[S.stack.length - 1];

/* ========== 3. Дрібні помічники ========== */
const money = (n) => `${n} грн`;
const plural = (n, a, b, c) => { const m10 = n % 10, m100 = n % 100; return m10 === 1 && m100 !== 11 ? a : (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20) ? b : c); };
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const cartCount = () => S.cart.reduce((a, i) => a + i.qty, 0);
const daysLeft = (k) => Math.floor(k.left / Math.max(k.per, 1));
const kitItem = (id) => S.kit.find(k => k.id === id);

const hhmmOf = (ms) => { const d = new Date(ms); return `${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`; };
const hhmm = () => { const d = new Date(); return `${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`; };
const sb = () => `<div class="sb"><span id="clock">${hhmm()}</span><span><i></i><i></i><i></i></span></div>`;

/* слоти доставки рахуються від поточного часу */
function slots() {
  const h = new Date().getHours(), out = [];
  if (h >= 8 && h < 19) out.push({ id: 'now', label: 'Найближчі 2 години', price: 69, note: 'кур’єр забере в аптеці' });
  if (h < 18) out.push({ id: 'eve', label: `Сьогодні, ${Math.max(h + 2, 12)}:00-21:00`, price: 49, note: '' });
  out.push({ id: 'tmr', label: 'Завтра, 10:00-14:00', price: 39, note: out.length ? 'найдешевше' : 'найближча доставка' });
  return out;
}
const slotById = (id) => { const l = slots(); return l.find(s => s.id === id) || l[l.length - 1]; };
const cartBtn = () => `<button class="ib" data-act="go:cart" aria-label="Кошик">${ic('bag')}${cartCount() ? `<span class="dot">${cartCount()}</span>` : ''}</button>`;
const tbLarge = (t, extra = '') => `<div class="tb-large"><h1 class="h1">${t}</h1><div class="row">${extra}${cartBtn()}</div></div>`;
const tbBack = (t, extra = '') => `<div class="tb-back">${S.stack.length > 1 ? `<button class="ib" data-act="back" aria-label="Назад">${ic('back')}</button>` : '<span style="width:8px"></span>'}<h2 class="h3">${t}</h2>${extra}</div>`;
const tabbar = (on) => `<nav class="tabbar">${[['home', 'home', 'Головна'], ['search', 'search', 'Пошук'], ['kit', 'pill', 'Аптечка'], ['reminders', 'bell', 'Нагадування']]
  .map(([k, i, l]) => `<button class="tab ${on === k ? 'on' : ''}" data-act="tab:${k}" aria-current="${on === k}"><span class="pill">${ic(i)}</span><span class="cap">${l}</span></button>`).join('')}</nav>`;
const badge = (cls, icon, t) => `<span class="badge ${cls}">${icon ? ic(icon, 'i14') : ''}${t}</span>`;
const stockBadge = (n, need) => n === 0 ? badge('b-out', 'close', 'Немає')
  : (n < need ? badge('b-low', 'alert', `Мало: ${n} уп.`) : badge('b-ok', 'check', `Є ${need} уп.`));

const MONTHS = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
const dateIn = (days) => { const d = new Date(Date.now() + days * 864e5); return `${d.getDate()} ${MONTHS[d.getMonth()]}`; };

const nearestKm = (d) => Math.min(...PHARMACIES.filter(p => stockOf(d.id, p.id) > 0).map(p => p.km), 99);

function drugCard(id, opts = {}) {
  const d = drugById(id), n = countPh(d), p = minPriceOf(d);
  return `<button class="card card-btn" data-act="drug:${id}">
    <div class="row wrap">${d.rx ? badge('b-rx', 'rx', 'За рецептом') : ''}${n ? badge('b-ok', 'check', `Є у ${n} ${plural(n, 'аптеці', 'аптеках', 'аптеках')}`) : badge('b-out', 'close', 'Немає поруч')}</div>
    <div class="h3">${d.name}</div>
    <div class="bs sec">${d.form} · ${d.pack} · ${d.use}</div>
    <div class="row between"><span class="strong">від ${money(p)}</span><span class="row bs sec">${opts.sub || d.maker} ${ic('chev', 'i16')}</span></div>
  </button>`;
}

/* пропозиції аптек для набору позицій */
function phOffers(items) {
  return PHARMACIES.map(p => {
    let total = 0, have = 0, miss = [];
    items.forEach(it => {
      const st = stockOf(it.id, p.id), d = drugById(it.id);
      if (st >= it.qty) { have++; total += priceOf(d, p.id) * it.qty; }
      else if (st > 0) { have += 0.5; total += priceOf(d, p.id) * st; miss.push({ id: it.id, st }); }
      else miss.push({ id: it.id, st: 0 });
    });
    return { ph: p, total, have, miss, full: miss.length === 0 };
  });
}
function sortOffers(list) {
  const s = S.phSort;
  return list.slice().sort((a, b) => {
    if (a.full !== b.full) return a.full ? -1 : 1;
    if (s === 'cheap') return a.total - b.total;
    return a.ph.km - b.ph.km;
  });
}

/* ========== 4. Екрани ========== */
const SCREENS = {

home() {
  const act = S.orders.find(o => o.step < 3);
  const rem = todayReminders();
  return { bottom: 'tab', tab: 'home', html: `${sb()}${tbLarge(`Добрий день, ${esc(S.profile.name)}`, `<button class="ib" data-act="go:profile" aria-label="Профіль">${ic('user')}</button>`)}
  <div class="content">
    <button class="search" data-act="open-search">${ic('search', 'muted')}<span class="body muted">Назва ліків або симптом</span></button>
    ${rem.length ? remCard(rem[0], true) : ''}
    ${act ? `<div class="sect"><h2 class="h3">Активне замовлення</h2><button class="btn text m" data-act="order:${act.num}">Деталі</button></div>${orderCard(act, true)}` : ''}
    <div class="sect"><h2 class="h3">Категорії</h2><button class="btn text m" data-act="go:catalog">Усі</button></div>
    <div class="grid">${CATEGORIES.slice(0, 4).map(catTile).join('')}</div>
    <div class="sect"><h2 class="h3">Часто купують</h2></div>
    ${['ibu400', 'lorat', 'd3'].map(id => drugCard(id)).join('')}
  </div>${tabbar('home')}` };
},

catalog() {
  return { bottom: 'tab', tab: 'search', html: `${sb()}${tbBack('Каталог', cartBtn())}
  <div class="content">
    <button class="search" data-act="open-search">${ic('search', 'muted')}<span class="body muted">Назва ліків або симптом</span></button>
    <div class="grid">${CATEGORIES.map(catTile).join('')}</div>
  </div>${tabbar('search')}` };
},

category(p) {
  const c = CATEGORIES.find(x => x.id === p.cat), list = DRUGS.filter(d => d.cat === c.id);
  return { bottom: 'tab', tab: 'search', html: `${sb()}${tbBack(c.name, cartBtn())}
  <div class="content">
    <div class="bs sec">${list.length} ${plural(list.length, 'препарат', 'препарати', 'препаратів')} · ${c.hint}</div>
    ${list.map(d => drugCard(d.id)).join('')}
  </div>${tabbar('search')}` };
},

search() {
  const c = (k, l) => `<button class="chip ${S.filt[k] ? 'on' : ''}" data-act="filt:${k}">${S.filt[k] ? ic('check', 'i16') : ''}${l}</button>`;
  return { bottom: 'tab', tab: 'search', html: `${sb()}${tbBack('Пошук ліків', cartBtn())}
  <div class="content">
    <label class="search">${ic('search', 'muted')}<input id="q" type="text" enterkeyhint="search" autocomplete="off" placeholder="Назва ліків або симптом" value="${esc(S.q)}" aria-label="Пошук ліків">
    <button class="ib" data-act="clear" id="clearBtn" aria-label="Очистити" style="width:32px;height:32px;${S.q ? '' : 'display:none'}">${ic('close', 'i16')}</button></label>
    <div class="chips">${c('open', 'Цілодобово')}${c('near', 'Є поруч')}${c('norx', 'Без рецепта')}</div>
    <div id="results" style="display:flex;flex-direction:column;gap:12px">${resultsHTML()}</div>
  </div>${tabbar('search')}` };
},

drug(p) {
  const d = drugById(p.id), a = S.ai[d.id] || {}, an = analogsOf(d), q = S.qty[d.id] || 1;
  const cheaper = an.map(x => minPriceOf(x)).filter(x => x < minPriceOf(d));
  let ans = '';
  if (a.err) ans = `<div class="ai-ans"><div class="row bs err">${ic('alert', 'i16')} Не вдалося отримати відповідь</div><div class="cap sec">ШІ-помічник тимчасово недоступний. Це не блокує бронювання.</div><div><button class="btn text m" data-act="ai-retry">${ic('refresh', 'i16')} Спробувати ще</button></div></div>`;
  else if (a.loading) ans = `<div class="ai-ans"><div class="row bs sec">${ic('loader', 'i16 spin')} ШІ шукає відповідь в інструкції…</div></div>`;
  else if (a.i !== undefined) ans = `<div class="ai-ans"><div class="bs">${AI_QA[a.i].a(d)}</div><div class="cap ai">${AI_QA[a.i].ref} · Це не медична порада</div></div>`;
  return { bottom: 'double', html: `${sb()}${tbBack('Препарат', cartBtn())}
  <div class="content">
    <div class="row wrap">${d.rx ? badge('b-rx', 'rx', 'За рецептом') : ''}${badge('b-ok', 'check', `Є у ${countPh(d)} ${plural(countPh(d), 'аптеці', 'аптеках', 'аптеках')}`)}</div>
    <div><h1 class="h1">${d.name}</h1><div class="body sec" style="margin-top:8px">${d.form} · ${d.pack} · ${d.use}</div></div>
    <div class="row between"><span class="h3">від ${money(minPriceOf(d))}</span><span class="bs sec">${d.maker}</span></div>
    ${an.length ? `<button class="card card-btn" data-act="analogs:${d.id}" style="gap:4px">
      <div class="row between"><span class="bss">Аналоги — ${an.length} ${plural(an.length, 'препарат', 'препарати', 'препаратів')}</span>${ic('chev', 'i16')}</div>
      <div class="bs sec">Та сама діюча речовина: ${d.sub}${cheaper.length ? `. Є дешевші, від ${money(Math.min(...cheaper))}` : ''}</div></button>` : ''}
    <div class="aibox">
      <div class="row ai" style="font:600 16px/24px Inter">${ic('sparkle', 'i16')} Запитати ШІ про інструкцію</div>
      <div class="bs sec">Відповідь із посиланням на розділ інструкції. Це не медична порада.</div>
      <div class="chips">${AI_QA.map((x, i) => `<button class="chip aic ${a.i === i && !a.err ? 'on' : ''}" data-act="ai:${i}">${x.q}</button>`).join('')}</div>
      ${ans}
    </div>
    <div class="card" style="gap:4px"><div class="bss">Склад і застосування</div>
      <div class="bs sec">Діюча речовина: ${d.sub}</div>
      <div class="bs sec">Дозування: ${d.dose}</div>
      <div class="bs sec">Прийом: ${d.food}</div></div>
    <div><div class="strong" style="margin-bottom:8px">Кількість упаковок</div>
      <div class="stepper"><button class="stp" data-act="qty:-1" ${q <= 1 ? 'disabled' : ''} aria-label="Менше">${ic('minus')}</button><span class="qty" id="qty">${q} уп.</span><button class="stp" data-act="qty:1" ${q >= 5 ? 'disabled' : ''} aria-label="Більше">${ic('plus')}</button></div>
      ${q >= 5 ? '<div class="helper">Більше 5 упаковок за раз забронювати не можна</div>' : ''}</div>
  </div>
  <div class="actionbar">
    <button class="btn primary full" data-act="buy:${d.id}">Де купити</button>
    <button class="btn text full" data-act="tocart:${d.id}">Додати в кошик</button>
  </div>` };
},

analogs(p) {
  const d = drugById(p.id), list = [d, ...analogsOf(d)].sort((a, b) => minPriceOf(a) - minPriceOf(b)), best = minPriceOf(list[0]);
  return { bottom: 'none', html: `${sb()}${tbBack('Аналоги', cartBtn())}
  <div class="content">
    <div class="bs sec">Діюча речовина: <b>${d.sub}</b>. Препарати з однаковою речовиною діють так само, але коштують по-різному.</div>
    ${list.map(x => { const pr = minPriceOf(x), diff = pr - best;
      return `<button class="card card-btn" data-act="drug:${x.id}">
        <div class="row between top"><div class="grow"><div class="h4">${x.name}</div><div class="bs sec">${x.maker} · ${x.form} · ${x.pack}</div></div>
        <div style="text-align:right"><div class="strong">${money(pr)}</div>${diff === 0 ? badge('b-ok', 'check', 'Найдешевший') : `<div class="cap sec">+${diff} грн</div>`}</div></div>
        <div class="row wrap">${x.id === d.id ? badge('b-n', '', 'Ви дивились') : ''}${x.rx ? badge('b-rx', 'rx', 'За рецептом') : ''}${badge('b-ok', 'check', `${countPh(x)} аптек`)}</div>
      </button>`; }).join('')}
    <div class="card"><div class="row top" style="gap:12px">${ic('info', 'i20')}<div class="bs sec">Перед заміною препарату на аналог порадьтеся з лікарем або фармацевтом: однакова речовина не завжди означає однакове дозування.</div></div></div>
  </div>` };
},

pharm() {
  const items = S.draft.items, offers = sortOffers(phOffers(items));
  const sortChip = (k, l) => `<button class="chip ${S.phSort === k ? 'on' : ''}" data-act="sort:${k}">${S.phSort === k ? ic('check', 'i16') : ''}${l}</button>`;
  const names = items.map(i => `${drugById(i.id).name} × ${i.qty}`).join(', ');
  return { bottom: 'none', html: `${sb()}${tbBack('Де забрати')}
  <div class="content">
    <div class="bs sec">${names}</div>
    <div class="chips">${sortChip('near', 'Ближче')}${sortChip('cheap', 'Дешевше')}</div>
    ${offers.map(o => {
      const miss = o.miss.length;
      return `<div class="card" style="gap:12px">
        <div><div class="row between top"><span class="bss grow">${o.ph.name}</span><span class="cap sec">${o.ph.km} км</span></div><div class="cap sec">${o.ph.addr}</div></div>
        <div class="row wrap">${badge('b-ok', 'clock', o.ph.close === '24:00' ? 'Цілодобово' : `Відчинено до ${o.ph.close}`)}${o.full ? badge('b-ok', 'check', 'Є все') : (o.total > 0 ? badge('b-low', 'alert', `Немає ${miss} з ${items.length}`) : badge('b-out', 'close', 'Немає'))}${o.ph.delivery ? badge('b-n', 'truck', 'Доставка') : ''}</div>
        ${!o.full && o.total > 0 ? `<div class="bs warn">${o.miss.map(m => `${drugById(m.id).name}: ${m.st ? `лише ${m.st} уп.` : 'немає'}`).join('; ')}</div>` : ''}
        ${o.total > 0 ? `<div class="row between"><span class="h3">${money(o.total)}</span><button class="btn primary m" data-act="pick:${o.ph.id}">Обрати</button></div>`
          : `<div class="bs sec">Повідомимо, коли препарат зʼявиться.</div>`}
      </div>`; }).join('')}
  </div>` };
},

cart() {
  const total = S.cart.reduce((a, i) => a + minPriceOf(drugById(i.id)) * i.qty, 0);
  const rx = S.cart.some(i => drugById(i.id).rx);
  return { bottom: S.cart.length ? 'single' : 'none', html: `${sb()}${tbBack('Кошик')}
  <div class="content">
    ${S.cart.length ? S.cart.map(i => { const d = drugById(i.id);
      return `<div class="card" style="gap:12px">
        <div class="row between top"><div class="grow"><div class="h4">${d.name}</div><div class="bs sec">${d.form} · ${d.pack}</div></div>
        <button class="ib" data-act="del:${i.id}" aria-label="Прибрати">${ic('trash', 'i20')}</button></div>
        ${d.rx ? `<div class="row">${badge('b-rx', 'rx', 'За рецептом')}</div>` : ''}
        <div class="row between"><div class="stepper"><button class="stp" data-act="cq:${i.id}:-1" ${i.qty <= 1 ? 'disabled' : ''}>${ic('minus')}</button><span class="qty">${i.qty} уп.</span><button class="stp" data-act="cq:${i.id}:1" ${i.qty >= 5 ? 'disabled' : ''}>${ic('plus')}</button></div>
        <span class="strong">${money(minPriceOf(d) * i.qty)}</span></div>
      </div>`; }).join('') + `
      ${rx ? `<div class="card" style="background:var(--in100)"><div class="row top" style="gap:12px;color:var(--in600)">${ic('rx', 'i20')}<div class="bs">У кошику є препарат за рецептом. Візьміть рецепт із собою — паперовий або електронний.</div></div></div>` : ''}
      <div class="card"><div class="row between"><span class="body sec">Орієнтовна сума</span><span class="h3">${money(total)}</span></div><div class="cap sec">Остаточна ціна залежить від аптеки</div></div>`
    : `<div class="empty"><div class="circle">${ic('bag')}</div><div class="h3">Кошик порожній</div><div class="bs sec">Додайте ліки, щоб забронювати їх в одній аптеці за один раз.</div><button class="btn secondary m" data-act="go:catalog">Перейти до каталогу</button></div>`}
  </div>
  ${S.cart.length ? `<div class="actionbar"><button class="btn primary full" data-act="cart-go">Обрати аптеку</button></div>` : ''}` };
},

checkout() {
  const dr = S.draft, ph = phById(dr.ph), items = dr.items;
  const hasRx = items.some(i => drugById(i.id).rx);
  const goods = items.reduce((a, i) => a + priceOf(drugById(i.id), ph.id) * i.qty, 0);
  const slot = slotById(dr.slot);
  const ship = dr.mode === 'delivery' ? slot.price : 0;
  return { bottom: 'single', html: `${sb()}${tbBack('Оформлення')}
  <div class="content">
    <div class="card">
      <div class="row top" style="gap:12px">${ic('pin', '')}<div class="grow"><div class="bss">${ph.name}</div><div class="cap sec">${ph.addr} · ${ph.km} км</div></div></div>
      <div class="hr"></div>
      ${items.map(i => { const d = drugById(i.id);
        return `<div class="row between top"><span class="body grow">${d.name} × ${i.qty}</span><span class="strong" style="white-space:nowrap">${money(priceOf(d, ph.id) * i.qty)}</span></div>`; }).join('')}
      ${ship ? `<div class="row between"><span class="body sec">Доставка</span><span class="body">${money(ship)}</span></div>` : ''}
      <div class="hr"></div>
      <div class="row between"><span class="strong">До сплати</span><span class="h3">${money(goods + ship)}</span></div>
    </div>

    ${dr.cut && dr.cut.length ? `<div class="card" style="background:var(--wa100)"><div class="row top" style="gap:12px;color:var(--wa700)">${ic('alert', 'i20')}<div class="bs">${dr.cut.map(c => `${drugById(c.id).name}: у цій аптеці є ${c.to} уп. замість ${c.from}`).join('; ')}. Кількість зменшено. Решту можна забронювати в іншій аптеці.</div></div></div>` : ''}

    <h2 class="h3">Як отримати</h2>
    <button class="radio ${dr.mode === 'pickup' ? 'on' : ''}" data-act="mode:pickup"><span class="rdot"></span><div class="grow"><div class="bss">Забрати в аптеці</div><div class="bs sec">Безкоштовно · до ${ph.close === '24:00' ? '24:00' : ph.close} сьогодні${hasRx ? ' · рецепт покажете на місці' : ''}</div></div></button>
    <button class="radio ${dr.mode === 'delivery' ? 'on' : ''}" data-act="mode:delivery" ${ph.delivery ? '' : 'disabled style="opacity:.5"'}><span class="rdot"></span><div class="grow"><div class="bss">Доставка кур’єром</div><div class="bs sec">${ph.delivery ? `від ${money(39)} · ліки привезуть додому` : 'ця аптека не доставляє'}</div></div></button>

    ${dr.mode === 'delivery' ? `
      <div><label class="field-label" for="addr">Адреса доставки</label>
      <div class="field"><input id="addr" type="text" value="${esc(dr.addr || S.profile.addr)}" placeholder="вулиця, будинок, квартира"></div></div>
      <h2 class="h3">Коли привезти</h2>
      ${slots().map(s => `<button class="radio ${slot.id === s.id ? 'on' : ''}" data-act="slot:${s.id}"><span class="rdot"></span><div class="grow"><div class="bss">${s.label}</div><div class="bs sec">${money(s.price)}${s.note ? ' · ' + s.note : ''}</div></div></button>`).join('')}
      ${hasRx ? `
        <h2 class="h3">Рецепт</h2>
        <div class="card" style="background:var(--in100)"><div class="row top" style="gap:12px;color:var(--in600)">${ic('rx', 'i20')}<div class="bs">Кур’єр не може перевірити паперовий рецепт. Для доставки ${items.filter(i => drugById(i.id).rx).map(i => `«${drugById(i.id).name}»`).join(', ')} потрібен номер електронного рецепта — він приходить у SMS від лікаря.</div></div></div>
        <div><label class="field-label" for="erx">Номер е-рецепта</label>
          <div class="field ${S.erxErr ? 'bad' : ''}" id="erxField"><input id="erx" type="text" inputmode="numeric" maxlength="7" placeholder="000 000" value="${esc(S.erx || '')}" aria-describedby="erxHelp"><span class="erri">${ic('alert')}</span></div>
          <div class="helper ${S.erxErr ? 'bad' : ''}" id="erxHelp">${S.erxErr ? 'Номер е-рецепта - це 6 цифр з SMS від лікаря' : 'Аптека погасить рецепт перед тим, як передати ліки кур’єру'}</div></div>
        <div class="bs sec">Немає е-рецепта? Оберіть «Забрати в аптеці» - там приймуть і паперовий.</div>
      ` : ''}
    ` : ''}

    <h2 class="h3">Контакти</h2>
    <div><label class="field-label" for="phone">Телефон</label>
      <div class="field ${S.phoneErr ? 'bad' : ''}" id="phoneField"><input id="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="+380 XX XXX XX XX" value="${esc(S.profile.phone)}" aria-describedby="phoneHelp"><span class="erri">${ic('alert')}</span></div>
      <div class="helper ${S.phoneErr ? 'bad' : ''}" id="phoneHelp">${S.phoneErr ? 'Номер має містити 12 цифр: +380 XX XXX XX XX' : 'На цей номер прийде SMS з номером замовлення'}</div></div>
    <button class="check ${S.addKit !== false ? 'on' : ''}" data-act="addkit" role="checkbox" aria-checked="${S.addKit !== false}"><span class="box">${ic('check', 'i16')}</span><span class="body">Додати ліки в «Мою аптечку»</span></button>
    <div class="bs sec">Оплата в аптеці або кур’єру під час отримання.</div>
  </div>
  <div class="actionbar"><button class="btn primary full" id="okBtn" data-act="submit">${dr.mode === 'delivery' ? 'Замовити доставку' : 'Забронювати'}</button></div>` };
},

success(p) {
  const o = S.orders.find(x => x.num === p.num);
  return { bottom: 'double', html: `${sb()}
  <div class="content" style="padding-top:40px">
    <div class="empty" style="padding:0 0 8px"><div class="circle big">${ic('check', 'i32')}</div>
      <h1 class="h1 center">${o.mode === 'delivery' ? 'Замовлення прийнято' : 'Бронь створена'}</h1>
      <div class="body sec center">№ ${o.num} · SMS надіслано на ${esc(o.phone)}</div></div>
    ${orderCard(o)}
  </div>
  <div class="actionbar"><button class="btn primary full" data-act="done">Готово</button><button class="btn text full" data-act="cancel:${o.num}">Скасувати замовлення</button></div>` };
},

orders() {
  return { bottom: 'none', html: `${sb()}${tbBack('Мої замовлення')}
  <div class="content">
    ${S.orders.length ? S.orders.slice().reverse().map(o => `<button class="card card-btn" data-act="order:${o.num}">
      <div class="row between"><span class="bss">№ ${o.num}</span><span class="cap sec">${o.date}</span></div>
      <div class="row wrap">${statusBadge(o)}${o.mode === 'delivery' ? badge('b-n', 'truck', 'Доставка') : badge('b-n', 'pin', 'Самовивіз')}</div>
      <div class="bs sec">${o.items.map(i => drugById(i.id).name).join(', ')}</div>
      <div class="row between"><span class="strong">${money(o.total)}</span><span class="row bs sec">Деталі ${ic('chev', 'i16')}</span></div>
    </button>`).join('')
    : `<div class="empty"><div class="circle">${ic('bag')}</div><div class="h3">Замовлень ще немає</div><div class="bs sec">Тут зʼявиться історія бронювань і доставок.</div><button class="btn secondary m" data-act="go:catalog">Знайти ліки</button></div>`}
  </div>` };
},

order(p) {
  const o = S.orders.find(x => x.num === p.num), ph = phById(o.ph);
  const steps = o.mode === 'delivery' ? ['Готується', 'У дорозі', 'Доставлено'] : ['Готується', 'Готово до видачі', 'Видано'];
  return { bottom: o.step === 2 ? 'double' : 'single', html: `${sb()}${tbBack(`Замовлення № ${o.num}`)}
  <div class="content">
    <div class="card">
      <div class="row wrap">${statusBadge(o)}</div>
      <div class="steps">${steps.map((_, i) => `<span class="st ${i < o.step ? 'on' : ''}"></span>`).join('')}</div>
      <div class="row between cap sec">${steps.map(s => `<span>${s}</span>`).join('')}</div>
    </div>
    ${orderCard(o)}
    <div class="card" style="gap:4px"><div class="bss">${o.mode === 'delivery' ? 'Доставка' : 'Самовивіз'}</div>
      <div class="bs sec">${o.mode === 'delivery' ? `${esc(o.addr)}<br>${o.slotLabel}` : `${ph.name}<br>${ph.addr}`}</div>
      <div class="bs sec">Телефон: ${esc(o.phone)}</div>
      ${o.erx ? `<div class="bs sec">Е-рецепт № ${esc(o.erx)}</div>` : ''}</div>
    ${o.step < 3 ? `<button class="btn text full" data-act="cancel:${o.num}">Скасувати замовлення</button>` : ''}
  </div>
  <div class="actionbar">
    ${o.step === 2 ? `<button class="btn primary full" data-act="got:${o.num}">${o.mode === 'delivery' ? 'Кур\u2019єр привіз' : 'Я забрав в аптеці'}</button>` : ''}
    <button class="btn ${o.step >= 3 ? 'primary' : 'secondary'} full" data-act="again:${o.num}">Замовити знову</button></div>` };
},

kit() {
  return { bottom: 'tab', tab: 'kit', html: `${sb()}${tbLarge('Моя аптечка', `<button class="ib" data-act="go:kitadd" aria-label="Додати ліки">${ic('plus')}</button>`)}
  <div class="content">
    <button class="toggle ${S.remindOn ? 'on' : ''}" data-act="remind" role="switch" aria-checked="${S.remindOn}"><span class="body">Нагадувати, коли закінчуються</span><span class="track"></span></button>
    ${S.kit.length ? S.kit.map(k => { const d = drugById(k.id), dl = daysLeft(k), low = dl <= 3;
      const booked = S.orders.some(o => o.step < 3 && o.items.some(i => i.id === k.id));
      return `<div class="card" style="gap:12px">
        <div class="row top" style="gap:12px"><span class="rem-ic" style="${low ? 'background:var(--wa100);color:var(--wa700)' : ''}">${ic('pill', 'i16')}</span>
          <div class="grow"><div class="h4">${d.name}</div><div class="cap sec">${esc(k.note)}</div></div>
          <button class="ib" data-act="kitdel:${k.id}" aria-label="Прибрати">${ic('trash', 'i20')}</button></div>
        <div class="prog"><div style="width:${Math.min(100, dl * 4)}%;background:${low ? 'var(--wa500)' : 'var(--su600)'}"></div></div>
        <div class="bs ${low ? 'warn' : 'sec'}">Залишилось ${k.left} ${k.unit} · на ${dl} ${plural(dl, 'день', 'дні', 'днів')}</div>
        ${booked ? `<div class="row wrap">${badge('b-ok', 'check', 'Замовлено')}</div>`
          : low ? `<div class="row wrap"><button class="btn primary m" data-act="rebuy:${k.id}">Купити знову</button><button class="btn text m" data-act="bought:${k.id}">Вже купив</button></div>`
          : `<div class="row cap sec">${ic('clock', 'i16')} Наступний прийом сьогодні</div>`}
      </div>`; }).join('')
    : `<div class="empty"><div class="circle">${ic('pill')}</div><div class="h3">Аптечка порожня</div><div class="bs sec">Додайте ліки, які приймаєте — нагадаємо, коли вони закінчуватимуться.</div><button class="btn secondary m" data-act="go:kitadd">Додати ліки</button></div>`}
  </div>${tabbar('kit')}` };
},

kitadd() {
  const sel = S.kitAdd;
  if (!sel) {
    const q = (S.kq || '').trim().toLowerCase();
    const list = q.length < 2 ? DRUGS.slice(0, 6) : DRUGS.filter(d => d.keys.some(k => k.startsWith(q)) || d.name.toLowerCase().includes(q)).slice(0, 12);
    return { bottom: 'none', html: `${sb()}${tbBack('Додати ліки')}
    <div class="content">
      <label class="search">${ic('search', 'muted')}<input id="kq" type="text" autocomplete="off" placeholder="Назва препарату" value="${esc(S.kq || '')}"></label>
      <div class="bs sec">${q.length < 2 ? 'Популярні препарати' : `Знайдено ${list.length}`}</div>
      ${list.map(d => `<button class="card card-btn" data-act="kitpick:${d.id}" style="gap:4px"><div class="h4">${d.name}</div><div class="bs sec">${d.form} · ${d.pack}</div></button>`).join('')
        || `<div class="empty"><div class="circle">${ic('search')}</div><div class="h3">Нічого не знайдено</div><div class="bs sec">Перевірте назву препарату.</div></div>`}
    </div>` };
  }
  const d = drugById(sel.id);
  return { bottom: 'single', html: `${sb()}${tbBack('Схема прийому')}
  <div class="content">
    <div class="card" style="gap:4px"><div class="h4">${d.name}</div><div class="bs sec">${d.form} · ${d.pack}</div><div class="bs sec">${d.dose}</div></div>
    <div><div class="strong" style="margin-bottom:8px">Скільки залишилось</div>
      <div class="stepper"><button class="stp" data-act="ka:left:-1" ${sel.left <= 1 ? 'disabled' : ''}>${ic('minus')}</button><span class="qty">${sel.left}</span><button class="stp" data-act="ka:left:1">${ic('plus')}</button></div></div>
    <div><div class="strong" style="margin-bottom:8px">Скільки приймати на день</div>
      <div class="stepper"><button class="stp" data-act="ka:per:-1" ${sel.per <= 1 ? 'disabled' : ''}>${ic('minus')}</button><span class="qty">${sel.per} / день</span><button class="stp" data-act="ka:per:1" ${sel.per >= 6 ? 'disabled' : ''}>${ic('plus')}</button></div></div>
    <div class="card"><div class="row top" style="gap:12px">${ic('bell', 'i20')}<div class="bs sec">${(() => { const w = Math.floor(sel.left / sel.per) - 2;
      return w >= 1 ? `Нагадаємо ${dateIn(w)}, коли залишиться на 2 дні.` : 'Нагадаємо вже завтра - запасу майже не лишилось.'; })()}</div></div></div>
  </div>
  <div class="actionbar"><button class="btn primary full" data-act="ka-save">Додати в аптечку</button></div>` };
},

reminders() {
  const list = todayReminders();
  return { bottom: 'tab', tab: 'reminders', html: `${sb()}${tbLarge('Нагадування')}
  <div class="content">
    ${list.length ? `<div class="strong sec">Сьогодні</div>${list.map(remCard).join('')}`
    : (nextSnooze() ? `<div class="empty"><div class="circle">${ic('clock')}</div><div class="h3">Відкладено</div><div class="bs sec">Наступне нагадування о ${hhmmOf(nextSnooze())}. Поки що тут порожньо.</div><button class="btn secondary m" data-act="unsnooze">Показати зараз</button></div>`
      : `<div class="empty"><div class="circle">${ic('check')}</div><div class="h3">На сьогодні все</div><div class="bs sec">Нові нагадування зʼявляться тут: про прийом ліків і про те, що вони закінчуються.</div><button class="btn secondary m" data-act="tab:kit">Відкрити аптечку</button></div>`)}
  </div>${tabbar('reminders')}` };
},

ai() {
  const msgs = S.aiChat.length ? S.aiChat : [{ who: 'bot', t: 'Вітаю! Я ШІ-помічник Tabletki. Можу пояснити інструкцію простими словами, підказати, як приймати ліки, і перевірити, чи поєднуються препарати з вашої аптечки. Це не медична порада.' }];
  const kitNames = S.kit.map(k => drugById(k.id).name.split(' ')[0]);
  return { bottom: 'single', html: `${sb()}${tbBack('ШІ-помічник')}
  <div class="content" id="chat" style="gap:8px">
    ${msgs.map(m => `<div class="bubble ${m.who === 'me' ? 'me' : 'bot'}">${m.t}</div>`).join('')}
    ${S.aiBusy ? `<div class="bubble bot row sec">${ic('loader', 'i16 spin')} Шукаю в інструкціях…</div>` : ''}
    <div class="chips" style="margin-top:8px">
      ${kitNames.length >= 2 ? `<button class="chip aic" data-act="aiq:mix">Чи можна ${kitNames[0]} з ${kitNames[1]}?</button>` : ''}
      <button class="chip aic" data-act="aiq:low">Що в мене закінчується?</button>
      <button class="chip aic" data-act="aiq:temp">Що пити при температурі?</button>
    </div>
  </div>
  <div class="actionbar"><button class="btn secondary full" data-act="back">Повернутись</button></div>` };
},

profile() {
  return { bottom: 'none', html: `${sb()}${tbBack('Профіль')}
  <div class="content">
    <div class="card"><div class="row top" style="gap:12px"><span class="circle" style="width:48px;height:48px">${ic('user')}</span>
      <div class="grow"><div class="h4">${esc(S.profile.name)}</div><div class="bs sec">${esc(S.profile.phone || 'Телефон не вказано')}</div></div></div></div>
    <button class="card card-btn" data-act="go:orders"><div class="row between"><span class="row body">${ic('bag', 'i20')} &nbsp;Мої замовлення</span><span class="row bs sec">${S.orders.length}&nbsp;${ic('chev', 'i16')}</span></div></button>
    <button class="card card-btn" data-act="go:ai"><div class="row between"><span class="row body ai">${ic('sparkle', 'i20')} &nbsp;ШІ-помічник</span>${ic('chev', 'i16')}</div></button>
    <div class="card" style="gap:4px"><div class="bss">Адреса доставки</div><div class="bs sec">${esc(S.profile.addr)}</div></div>
    <button class="toggle ${S.remindOn ? 'on' : ''}" data-act="remind" role="switch" aria-checked="${S.remindOn}"><span class="body">Нагадування про ліки</span><span class="track"></span></button>
    <div class="hr"></div>
    <button class="btn text full" data-act="reset">Очистити дані застосунку</button>
    <div class="cap sec center">Навчальний прототип Tabletki.ua · ПЗ-24</div>
  </div>` };
},

};

/* допоміжні блоки */
function catTile(c) {
  return `<button class="tile" data-act="cat:${c.id}"><span class="ic">${ic(c.icon, 'i20')}</span><span class="bss">${c.name}</span><span class="cap sec">${c.hint}</span></button>`;
}
function statusBadge(o) {
  const l = o.mode === 'delivery' ? ['Готується', 'У дорозі', 'Доставлено'] : ['Готується', 'Готово до видачі', 'Видано'];
  return badge(o.step >= 3 ? 'b-n' : (o.step === 2 ? 'b-ok' : 'b-low'), o.step >= 3 ? 'check' : (o.mode === 'delivery' ? 'truck' : 'clock'), l[o.step - 1]);
}
function orderCard(o, short) {
  const ph = phById(o.ph);
  return `<div class="card">
    <div class="row top" style="gap:12px">${ic(o.mode === 'delivery' ? 'truck' : 'pin', '')}<div class="grow"><div class="bss">${o.mode === 'delivery' ? 'Доставка' : ph.name}</div><div class="cap sec">${o.mode === 'delivery' ? esc(o.addr) : ph.addr}</div></div></div>
    <div class="hr"></div>
    ${o.items.map(i => `<div class="row between top"><span class="body grow">${drugById(i.id).name} × ${i.qty}</span><span class="strong" style="white-space:nowrap">${money(priceOf(drugById(i.id), o.ph) * i.qty)}</span></div>`).join('')}
    <div class="row top cap sec">${ic('clock', 'i16')}<span class="grow">${o.mode === 'delivery' ? o.slotLabel : `Забрати до ${phById(o.ph).close === '24:00' ? '24:00' : phById(o.ph).close} сьогодні`} · оплата при отриманні</span></div>
    ${short ? '' : `<div class="row between"><span class="strong">Разом</span><span class="h3">${money(o.total)}</span></div>`}
  </div>`;
}
function todayReminders() {
  const out = [];
  if (S.remindOn) S.kit.forEach(k => {
    if (S.doneToday.includes('low:' + k.id)) return;
    if (daysLeft(k) <= 3 && !S.orders.some(o => o.step < 3 && o.items.some(i => i.id === k.id))) out.push({ t: 'low', k });
  });
  const now = Date.now();
  S.kit.forEach(k => {
    if (S.doneToday.includes('dose:' + k.id)) return;
    if ((S.snooze['dose:' + k.id] || 0) > now) return;
    out.push({ t: 'dose', k });
  });
  return out;
}
function nextSnooze() {
  const now = Date.now(), t = Object.values(S.snooze || {}).filter(x => x > now);
  return t.length ? Math.min.apply(null, t) : 0;
}
function remCard(r, compact) {
  const d = drugById(r.k.id);
  const bought = compact ? '' : `<button class="btn text m" data-act="bought:${r.k.id}">Вже купив</button>`;
  if (r.t === 'low') return `<div class="rem" id="rem-low-${r.k.id}">
    <div class="row top" style="gap:12px"><span class="rem-ic">${ic('bell', 'i16')}</span><div class="grow"><div class="h4">${d.name} закінчується</div><div class="bs sec">Залишилось ${r.k.left} ${r.k.unit} — на ${daysLeft(r.k)} ${plural(daysLeft(r.k), 'день', 'дні', 'днів')}. Забронювати?</div></div></div>
    <div class="row wrap"><button class="btn primary m" data-act="rebuy:${r.k.id}">Купити знову</button><button class="btn text m" data-act="later:${r.k.id}">Пізніше</button>${bought}</div></div>`;
  return `<div class="rem" id="rem-dose-${r.k.id}">
    <div class="row top" style="gap:12px"><span class="rem-ic">${ic('clock', 'i16')}</span><div class="grow"><div class="h4">Час прийняти ${d.name}</div><div class="bs sec">${esc(r.k.note)}</div></div></div>
    <div class="row wrap"><button class="btn primary m" data-act="taken:${r.k.id}">Прийняв</button><button class="btn text m" data-act="snooze:${r.k.id}">Відкласти на 15 хв</button></div></div>`;
}

/* ========== 5. Пошук ========== */
/* збіг лише з початку слова: «ар» не має знаходити «жарознижувальне» */
function atWordStart(text, q) {
  const t = (text || '').toLowerCase();
  let i = t.indexOf(q);
  while (i !== -1) {
    if (i === 0 || ' ,.;:-(/'.includes(t[i - 1])) return true;
    i = t.indexOf(q, i + 1);
  }
  return false;
}
function findDrugs(q) {
  q = q.trim().toLowerCase();
  if (q.length < 2) return null;
  return DRUGS.filter(d =>
    d.keys.some(k => k.startsWith(q) || (k.length >= 4 && q.startsWith(k))) ||
    atWordStart(d.name, q) || atWordStart(d.sub, q) || atWordStart(d.use, q)
  ).map(d => d.id);
}
function suggestFor(q) {
  q = q.trim().toLowerCase(); let best = null, bl = 0;
  for (const d of DRUGS) for (const k of d.keys) { let i = 0; while (i < k.length && i < q.length && k[i] === q[i]) i++; if (i > bl) { bl = i; best = k; } }
  return bl >= 5 ? best[0].toUpperCase() + best.slice(1) : null;
}
function resultsHTML() {
  if (S.loadingRes) return [0, 1].map(() => `<div class="skel"><div class="sk" style="width:40%"></div><div class="sk" style="width:70%;height:18px"></div><div class="sk" style="width:55%"></div></div>`).join('');
  const ids = findDrugs(S.q);
  if (ids === null) return `<div class="bs sec">Нещодавно шукали</div><div class="chips">${['ібупрофен', 'лоратадин', 'вітамін D'].map(t => `<button class="chip" data-act="setq:${t}">${t}</button>`).join('')}</div><div class="cap sec">Підказки зʼявляються з 2-го символу</div>`;
  let list = ids.map(drugById);
  if (S.filt.norx) list = list.filter(d => !d.rx);
  if (S.filt.open) list = list.filter(d => PHARMACIES.some(p => p.close === '24:00' && stockOf(d.id, p.id) > 0));
  if (S.filt.near) list = list.slice().sort((a, b) => nearestKm(a) - nearestKm(b));
  if (!list.length) {
    if (ids.length && S.filt.norx) return `<div class="empty"><div class="circle">${ic('rx')}</div><div class="h3">Усе за рецептом</div><div class="bs sec">За цим запитом є лише рецептурні препарати.</div><button class="btn secondary m" data-act="filt:norx">Показати рецептурні</button></div>`;
    if (ids.length && S.filt.open) return `<div class="empty"><div class="circle">${ic('clock')}</div><div class="h3">Немає в цілодобових</div><div class="bs sec">За цим запитом препаратів у цілодобових аптеках зараз немає.</div><button class="btn secondary m" data-act="filt:open">Показати всі аптеки</button></div>`;
    const sug = suggestFor(S.q);
    return `<div class="empty"><div class="circle">${ic('search')}</div><div class="h3">Нічого не знайдено за «${esc(S.q.trim())}»</div><div class="bs sec">Перевірте назву або шукайте за діючою речовиною.</div>${sug ? `<button class="btn secondary m" data-act="setq:${sug}">Шукати «${sug}»</button>` : `<button class="btn secondary m" data-act="clear">Очистити пошук</button>`}</div>`;
  }
  return `<div class="bs sec">Знайдено ${list.length} ${plural(list.length, 'препарат', 'препарати', 'препаратів')}</div>` + list.map(d => drugCard(d.id)).join('');
}
let resTimer;
function updateResults(withSkeleton) {
  const box = document.getElementById('results'); if (!box) return;
  clearTimeout(resTimer);
  if (withSkeleton && findDrugs(S.q) !== null) {
    S.loadingRes = true; box.innerHTML = resultsHTML();
    resTimer = setTimeout(() => { S.loadingRes = false; const b = document.getElementById('results'); if (b) b.innerHTML = resultsHTML(); }, 300);
  } else { S.loadingRes = false; box.innerHTML = resultsHTML(); }
  const cb = document.getElementById('clearBtn'); if (cb) cb.style.display = S.q ? '' : 'none';
}

/* ========== 6. Роутер ========== */
const vp = document.getElementById('vp');
let bottomKind = 'tab';
function syncOrders() {
  let ch = false;
  S.orders.forEach(o => { if (o.step === 1 && o.at && Date.now() - o.at > 9000) { o.step = 2; ch = true; } });
  return ch;
}
function mount(dir) {
  syncOrders();
  const c = cur(), def = SCREENS[c.s](c);
  if (dir) hideToast();
  bottomKind = def.bottom;
  const el = document.createElement('div'); el.className = 'screen'; el.innerHTML = def.html;
  const old = vp.lastElementChild;
  vp.appendChild(el);
  if (old && dir) {
    if (dir === 'fwd') { el.classList.add('in-fwd'); old.classList.add('out-fwd'); }
    else if (dir === 'back') { el.classList.add('in-back'); old.classList.add('out-back'); }
    else el.classList.add('in-fade');
    setTimeout(() => old.remove(), dir === 'fade' ? 150 : 300);
  } else if (old) old.remove();
  afterMount(el); save();
}
function rerender() {
  const old = vp.lastElementChild, sc = old && old.querySelector('.content'), top = sc ? sc.scrollTop : 0;
  mount(null);
  const nc = vp.lastElementChild.querySelector('.content'); if (nc) nc.scrollTop = top;
}
function go(s, p) { S.stack.push(Object.assign({ s }, p || {})); mount('fwd'); }
function back() { if (S.stack.length > 1) { S.stack.pop(); closeSheet(); mount('back'); } }
function tab(s) { closeSheet(); S.stack = [{ s }]; if (s === 'search') S.focusSearch = true; mount('fade'); }

function afterMount(el) {
  const q = el.querySelector('#q');
  if (q) {
    q.addEventListener('input', e => { S.q = e.target.value; updateResults(true); });
    if (S.focusSearch) { setTimeout(() => q.focus({ preventScroll: true }), 50); S.focusSearch = false; }
  }
  const kq = el.querySelector('#kq');
  if (kq) kq.addEventListener('input', e => { S.kq = e.target.value; rerenderKeepFocus('#kq'); });
  const ph = el.querySelector('#phone');
  if (ph) {
    ph.addEventListener('focus', () => { if (!ph.value) { ph.value = '+380 '; } });
    ph.addEventListener('input', onPhoneInput);
    ph.addEventListener('blur', () => { const d = digits(ph.value); if (d.length > 3 && d.length < 12) setPhoneErr(true); if (d.length <= 3) ph.value = ''; S.profile.phone = ph.value; });
  }
  const ex = el.querySelector('#erx');
  if (ex) ex.addEventListener('input', e => {
    const d = digits(e.target.value).slice(0, 6);
    e.target.value = d.length > 3 ? d.slice(0, 3) + ' ' + d.slice(3) : d;
    S.erx = e.target.value;
    if (S.erxErr && d.length === 6) setErxErr(false);
  });
  const ad = el.querySelector('#addr');
  if (ad) ad.addEventListener('input', e => { S.draft.addr = e.target.value; });
  const chat = el.querySelector('#chat');
  if (chat) chat.scrollTop = chat.scrollHeight;
}
function rerenderKeepFocus(sel) {
  const was = document.activeElement && document.activeElement.matches(sel);
  rerender();
  if (was) { const n = document.querySelector(sel); if (n) { n.focus(); n.setSelectionRange(n.value.length, n.value.length); } }
}

/* ========== 7. Телефон: маска +380 ========== */
const digits = v => v.replace(/\D/g, '');
function normalize(d) {
  if (d.startsWith('380')) {} else if (d.startsWith('80')) d = '3' + d; else if (d.startsWith('0')) d = '38' + d; else d = '380' + d;
  return d.slice(0, 12);
}
function fmt(d) { let s = '+' + d.slice(0, 3); if (d.length > 3) s += ' ' + d.slice(3, 5); if (d.length > 5) s += ' ' + d.slice(5, 8); if (d.length > 8) s += ' ' + d.slice(8, 10); if (d.length > 10) s += ' ' + d.slice(10, 12); return s; }
let prevDigits = '380';
function onPhoneInput(e) {
  let d = digits(e.target.value);
  if (e.inputType === 'deleteContentBackward' && d === prevDigits && d.length > 3) d = d.slice(0, -1);
  d = normalize(d); prevDigits = d;
  e.target.value = d.length > 3 ? fmt(d) : '+380 ';
  S.profile.phone = e.target.value;
  if (S.phoneErr && d.length === 12) setPhoneErr(false);
}
function setErxErr(on) {
  S.erxErr = on;
  const f = document.getElementById('erxField'), h = document.getElementById('erxHelp');
  if (!f) return;
  f.classList.toggle('bad', on); h.classList.toggle('bad', on);
  h.textContent = on ? 'Номер е-рецепта - це 6 цифр з SMS від лікаря' : 'Аптека погасить рецепт перед тим, як передати ліки кур’єру';
}
function setPhoneErr(on) {
  S.phoneErr = on;
  const f = document.getElementById('phoneField'), h = document.getElementById('phoneHelp');
  if (!f) return;
  f.classList.toggle('bad', on); h.classList.toggle('bad', on);
  h.textContent = on ? 'Номер має містити 12 цифр: +380 XX XXX XX XX' : 'На цей номер прийде SMS з номером замовлення';
}

/* ========== 8. Тост і шторка ========== */
const toastEl = document.getElementById('toast');
let toastTimer, toastAct = null;
function showToast(text, o = {}) {
  const off = { tab: 92, single: 100, double: 152, none: 16 }[bottomKind] || 92;
  toastEl.style.bottom = off + 'px';
  toastEl.innerHTML = `<span style="color:var(--primary-100)">${ic(o.icon || 'check', 'i16')}</span><span class="bs grow">${text}</span>${o.action ? `<button class="ta" data-act="toast">${o.action}</button>` : ''}`;
  toastAct = o.onAction || null; toastEl.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(hideToast, 5000);
}
function hideToast() { toastEl.classList.remove('show'); toastAct = null; }
const ov = document.getElementById('ov');
function openSheet(html) {
  ov.innerHTML = `<div class="scrim" data-act="sheet-close"></div><div class="sheet" role="dialog" aria-modal="true"><div class="handle"></div>${html}</div>`;
  requestAnimationFrame(() => requestAnimationFrame(() => ov.classList.add('open')));
}
function closeSheet() { if (!ov.classList.contains('open')) return; ov.classList.remove('open'); setTimeout(() => { if (!ov.classList.contains('open')) ov.innerHTML = ''; }, 250); }

/* ========== 9. Дії ========== */
function collapse(id, then) { const el = document.getElementById(id); if (el) { el.classList.add('out-anim'); setTimeout(then, 300); } else then(); }
function startOrder(items) {
  S.draft = { items, ph: null, mode: 'pickup', slot: slots()[0].id, addr: S.profile.addr, cut: [] };
  S.phoneErr = false; go('pharm');
}
function rxCheck(items, then) {
  const rxItem = items.map(i => drugById(i.id)).find(d => d.rx && !S.rxOk[d.id]);
  if (!rxItem) { then(); return; }
  openSheet(`<div class="circle info">${ic('rx')}</div><h2 class="h2 center">Цей препарат — за рецептом</h2>
    <div class="body sec center">Аптека видасть «${rxItem.name}» лише за рецептом лікаря. Якщо забираєте самі - візьміть паперовий або електронний. Якщо замовляєте доставку - знадобиться номер е-рецепта з SMS.</div>
    <button class="btn primary full" data-act="rx-ok:${rxItem.id}">Рецепт є — продовжити</button><button class="btn text full" data-act="sheet-close">Скасувати</button>`);
}

const ACT = {
  back, tab: (s) => tab(s),
  go: (s) => go(s),
  cat: (id) => go('category', { cat: id }),
  'open-search': () => { S.focusSearch = true; go('search'); },
  clear: () => { S.q = ''; const q = document.getElementById('q'); if (q) { q.value = ''; q.focus(); } updateResults(false); },
  setq: (v) => { S.q = v; const q = document.getElementById('q'); if (q) q.value = v; updateResults(true); },
  filt: (k) => { S.filt[k] = !S.filt[k]; rerenderKeepFocus('#q'); },
  sort: (k) => { S.phSort = k; rerender(); },
  drug: (id) => { if (!S.qty[id]) S.qty[id] = 1; go('drug', { id }); },
  analogs: (id) => go('analogs', { id }),
  qty: (n) => { const id = cur().id; S.qty[id] = Math.max(1, Math.min(5, (S.qty[id] || 1) + (+n))); rerender(); const q = document.getElementById('qty'); if (q) { q.classList.add('bump'); setTimeout(() => q.classList.remove('bump'), 150); } },
  ai: (i) => { i = +i; const id = cur().id; const fail = S.aiFail && i === 0; if (fail) S.aiFail = false;
    S.ai[id] = { i, loading: true }; rerender();
    setTimeout(() => { const a = S.ai[id]; if (a && a.i === i) { a.loading = false; a.err = fail; if (cur().s === 'drug') rerender(); } }, 900); },
  'ai-retry': () => ACT.ai(String((S.ai[cur().id] || {}).i || 0)),
  'aiq': (k) => {
    const texts = { mix: 'Чи можна приймати мої ліки разом?', low: 'Що в мене закінчується?', temp: 'Що пити при температурі?' };
    S.aiChat.push({ who: 'me', t: texts[k] }); S.aiBusy = true; rerender();
    setTimeout(() => {
      let a = '';
      if (k === 'mix') { const n = S.kit.map(x => drugById(x.id)); a = `${n[0].name} (${n[0].sub}) і ${n[1].name} (${n[1].sub}) — різні діючі речовини, прямої заборони в інструкціях немає. Але остаточно це має підтвердити лікар або фармацевт. Це не медична порада.`; }
      else if (k === 'low') { const low = S.kit.filter(x => daysLeft(x) <= 3); a = low.length ? `Закінчується: ${low.map(x => `${drugById(x.id).name} (на ${daysLeft(x)} ${plural(daysLeft(x), 'день', 'дні', 'днів')})`).join(', ')}. Відкрийте «Мою аптечку», щоб замовити.` : 'Поки нічого не закінчується — запасу вистачає більш ніж на 3 дні.'; }
      else a = 'При температурі вище 38,5 °C зазвичай застосовують парацетамол або ібупрофен — у дозі з інструкції. Пийте більше рідини. Якщо температура тримається понад 3 дні, зверніться до лікаря. Це не медична порада.';
      S.aiChat.push({ who: 'bot', t: a }); S.aiBusy = false; rerender();
    }, 1000);
  },
  buy: (id) => startOrder([{ id, qty: S.qty[id] || 1 }]),
  tocart: (id) => {
    const q = S.qty[id] || 1, ex = S.cart.find(i => i.id === id);
    if (ex) ex.qty = Math.min(5, ex.qty + q); else S.cart.push({ id, qty: q });
    rerender(); showToast(`${drugById(id).name} у кошику`, { icon: 'bag', action: 'Відкрити', onAction: () => go('cart') });
  },
  del: (id) => { S.cart = S.cart.filter(i => i.id !== id); rerender(); },
  cq: (arg) => { const [id, n] = arg.split(':'); const it = S.cart.find(i => i.id === id); it.qty = Math.max(1, Math.min(5, it.qty + (+n))); rerender(); },
  'cart-go': () => startOrder(S.cart.map(i => ({ id: i.id, qty: i.qty }))),
  pick: (phId) => {
    S.pendingPh = phId;
    const o = phOffers(S.draft.items).find(x => x.ph.id === phId), cut = [];
    const items = S.draft.items.map(i => {
      const m = o.miss.find(x => x.id === i.id);
      if (!m) return i;
      if (m.st < i.qty) cut.push({ id: i.id, from: i.qty, to: m.st });
      return { id: i.id, qty: m.st };
    }).filter(i => i.qty > 0);
    rxCheck(items, () => { S.draft.ph = phId; S.draft.items = items; S.draft.cut = cut; if (!phById(phId).delivery) S.draft.mode = 'pickup'; go('checkout'); });
  },
  'rx-ok': (id) => { S.rxOk[id] = true; closeSheet(); setTimeout(() => { const phId = S.pendingPh || (S.draft && S.draft.ph); ACT.pick(phId || PHARMACIES[0].id); }, 120); },
  'sheet-close': () => closeSheet(),
  mode: (m) => { if (m === 'delivery' && !phById(S.draft.ph).delivery) return; S.draft.mode = m; S.erxErr = false; rerender(); },
  slot: (s) => { S.draft.slot = s; rerender(); },
  addkit: () => { S.addKit = S.addKit === false ? true : false; const b = document.querySelector('.check'); if (b) { b.classList.toggle('on', S.addKit !== false); b.setAttribute('aria-checked', S.addKit !== false); } },
  submit: () => {
    const ph = document.getElementById('phone'), d = digits(ph ? ph.value : '');
    if (d.length !== 12) { setPhoneErr(true); if (ph) { ph.focus(); if (!ph.value) ph.value = '+380 '; } return; }
    const ad = document.getElementById('addr');
    if (S.draft.mode === 'delivery' && ad && ad.value.trim().length < 5) { showToast('Вкажіть адресу доставки', { icon: 'alert' }); ad.focus(); return; }
    const ex = document.getElementById('erx');
    if (ex && digits(ex.value).length !== 6) { setErxErr(true); ex.focus(); ex.scrollIntoView({ block: 'center', behavior: 'smooth' }); return; }
    const btn = document.getElementById('okBtn'); btn.classList.add('loading'); btn.innerHTML = `${ic('loader', 'spin')} Зачекайте…`;
    setTimeout(() => {
      const dr = S.draft, phd = phById(dr.ph);
      const slot = slotById(dr.slot);
      const total = dr.items.reduce((a, i) => a + priceOf(drugById(i.id), dr.ph) * i.qty, 0) + (dr.mode === 'delivery' ? slot.price : 0);
      const num = String(++S.orderSeq).replace(/(\d{2})(\d{3})/, '$1 $2');
      const o = { num, ph: dr.ph, mode: dr.mode, items: dr.items, total, step: 1, phone: S.profile.phone,
        addr: ad ? ad.value : S.profile.addr, slotLabel: dr.mode === 'delivery' ? slot.label : '', date: 'сьогодні',
        erx: (ex && dr.mode === 'delivery') ? ex.value : '', at: Date.now(), added: [] };
      S.orders.push(o);
      if (S.addKit !== false) dr.items.forEach(i => {
        const k = kitItem(i.id), d2 = drugById(i.id), add = parseInt((d2.pack.match(/\d+/) || [20])[0], 10) * i.qty;
        if (k) { k.left += add; o.added.push({ id: i.id, n: add, created: false }); }
        else { S.kit.push({ id: i.id, left: add, per: 1, unit: 'шт.', note: d2.dose }); o.added.push({ id: i.id, n: add, created: true }); }
      });
      S.erx = ''; S.erxErr = false;
      S.cart = S.cart.filter(c => !dr.items.some(i => i.id === c.id));
      setTimeout(() => { const oo = S.orders.find(x => x.num === num); if (oo && oo.step === 1) { oo.step = 2; save(); if (['success', 'order', 'home'].includes(cur().s)) rerender(); } }, 9000);
      S.stack = [{ s: 'success', num }]; mount('fwd');
      setTimeout(() => showToast(S.addKit !== false ? 'Ліки додано в «Мою аптечку»' : 'SMS з номером надіслано', { icon: S.addKit !== false ? 'pill' : 'check', action: S.addKit !== false ? 'Відкрити' : null, onAction: () => tab('kit') }), 400);
    }, 1200);
  },
  done: () => { hideToast(); tab('home'); },
  order: (num) => go('order', { num }),
  cancel: (num) => openSheet(`<div class="circle danger">${ic('alert')}</div><h2 class="h2 center">Скасувати замовлення?</h2>
    <div class="body sec center">Аптека зніме резерв, і препарат зможуть купити інші.</div>
    <button class="btn primary full" data-act="cancel-yes:${num}">Так, скасувати</button><button class="btn text full" data-act="sheet-close">Залишити</button>`),
  'cancel-yes': (num) => {
    closeSheet();
    const o = S.orders.find(x => x.num === num);
    if (o && o.added) o.added.forEach(a => {
      if (a.created) { S.kit = S.kit.filter(x => x.id !== a.id); return; }
      const k = kitItem(a.id); if (k) k.left = Math.max(0, k.left - a.n);
    });
    S.orders = S.orders.filter(x => x.num !== num); tab('home');
    setTimeout(() => showToast('Замовлення скасовано', { icon: 'info' }), 200);
  },
  got: (num) => {
    const o = S.orders.find(x => x.num === num); if (!o) return;
    o.step = 3; rerender();
    showToast(o.mode === 'delivery' ? 'Замовлення доставлено' : 'Замовлення отримано', { icon: 'check' });
  },
  again: (num) => { const o = S.orders.find(x => x.num === num); startOrder(o.items.map(i => ({ id: i.id, qty: i.qty }))); },
  rebuy: (id) => { const k = kitItem(id); S.qty[id] = 1; startOrder([{ id, qty: 1 }]); },
  later: (id) => collapse('rem-low-' + id, () => { S.doneToday.push('low:' + id); rerender(); showToast('Нагадаємо завтра о 10:00', { icon: 'bell', action: 'Скасувати', onAction: () => { S.doneToday = S.doneToday.filter(x => x !== 'low:' + id); rerender(); } }); }),
  bought: (id) => collapse('rem-low-' + id, () => {
    const k = kitItem(id), d = drugById(id);
    k.left += parseInt((d.pack.match(/\d+/) || [20])[0], 10);
    S.doneToday.push('low:' + id); rerender();
    showToast(`${d.name} поповнено в аптечці`, { icon: 'check' });
  }),
  taken: (id) => collapse('rem-dose-' + id, () => { const k = kitItem(id); k.left = Math.max(0, k.left - 1); S.doneToday.push('dose:' + id); rerender(); showToast('Прийом відмічено', { icon: 'check', action: 'Скасувати', onAction: () => { k.left += 1; S.doneToday = S.doneToday.filter(x => x !== 'dose:' + id); rerender(); } }); }),
  snooze: (id) => collapse('rem-dose-' + id, () => {
    const at = Date.now() + 15 * 60000;
    S.snooze['dose:' + id] = at; rerender();
    showToast(`Нагадаємо о ${hhmmOf(at)}`, { icon: 'clock', action: 'Скасувати', onAction: () => { delete S.snooze['dose:' + id]; rerender(); } });
  }),
  unsnooze: () => { S.snooze = {}; rerender(); },
  remind: () => { S.remindOn = !S.remindOn; rerender(); showToast(S.remindOn ? 'Нагадування увімкнено' : 'Нагадування вимкнено', { icon: 'bell' }); },
  kitdel: (id) => { S.kit = S.kit.filter(k => k.id !== id); rerender(); showToast('Прибрано з аптечки', { icon: 'info' }); },
  kitpick: (id) => { const d = drugById(id); S.kitAdd = { id, left: parseInt((d.pack.match(/\d+/) || [20])[0], 10), per: 1 }; rerender(); },
  ka: (arg) => { const [f, n] = arg.split(':'); S.kitAdd[f] = Math.max(1, S.kitAdd[f] + (+n)); rerender(); },
  'ka-save': () => {
    const s = S.kitAdd, d = drugById(s.id), ex = kitItem(s.id);
    const note = `${s.per} ${plural(s.per, 'раз', 'рази', 'разів')} на день`;
    if (ex) { ex.left = s.left; ex.per = s.per; ex.note = note; } else S.kit.push({ id: s.id, left: s.left, per: s.per, unit: 'шт.', note });
    S.kitAdd = null; S.kq = ''; S.stack = [{ s: 'kit' }]; mount('back');
    setTimeout(() => showToast(`${d.name} додано в аптечку`, { icon: 'check' }), 200);
  },
  reset: () => openSheet(`<div class="circle danger">${ic('alert')}</div><h2 class="h2 center">Очистити дані?</h2>
    <div class="body sec center">Замовлення, аптечка й налаштування повернуться до початкових. Це потрібно перед новою сесією тестування.</div>
    <button class="btn primary full" data-act="reset-yes">Так, очистити</button><button class="btn text full" data-act="sheet-close">Скасувати</button>`),
  'reset-yes': () => { closeSheet(); try { localStorage.removeItem(KEY); } catch (e) {} S = initState(); mount('fade'); setTimeout(() => showToast('Дані очищено', { icon: 'refresh' }), 200); },
  toast: () => { const f = toastAct; hideToast(); if (f) f(); },
};

document.getElementById('device').addEventListener('click', e => {
  const t = e.target.closest('[data-act]');
  if (!t || t.disabled) return;
  const [k, ...rest] = t.dataset.act.split(':');
  const arg = rest.join(':');
  if (ACT[k]) { e.preventDefault(); ACT[k](arg); save(); }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); if (e.key === 'Enter' && e.target.id === 'phone') ACT.submit(); });
window.addEventListener('offline', () => document.getElementById('banner').classList.add('show'));
window.addEventListener('online', () => document.getElementById('banner').classList.remove('show'));
if (!navigator.onLine) document.getElementById('banner').classList.add('show');

let snoozeWas = 0;
setInterval(() => {
  const c = document.getElementById('clock'); if (c) c.textContent = hhmm();
  const n = nextSnooze();
  if (syncOrders() && ['home', 'order', 'orders', 'success'].includes(cur().s)) rerender();
  else if (snoozeWas && !n && ['reminders', 'home'].includes(cur().s)) rerender();
  snoozeWas = n;
}, 20000);

mount(null);
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
