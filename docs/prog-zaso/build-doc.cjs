'use strict';

const fs = require('node:fs');
const path = require('node:path');
const site = path.resolve(__dirname, '..');
const project = path.resolve(site, '..');
const read = file => fs.readFileSync(path.join(project, file), 'utf8').replace(/\r\n/g, '\n');
const escape = text => String(text).replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char]);

function write(file, contents) {
  const output = path.join(site, file);
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, contents, 'utf8');
}

const groups = [
  ['app', 'Aplikacja i okna', /^(?:App|Win(?!ReadModal|EndRead)|Dialog|Msg)/],
  ['kontrolki', 'Kontrolki', /^(?:Control|Label|Say|Button|CheckBox|RadioButton|GroupBox|Panel)/],
  ['pola', 'Pola edycji i formularze', /^(?:Edit|Memo|Get|WinReadModal|WinEndRead|ReadLastKey)/],
  ['listy', 'Listy i drzewa', /^(?:ListBox|ComboBox|ListView|TreeView)/],
  ['browse', 'Tabele rekordów', /^Browse/],
  ['widoki', 'Zakładki, suwaki i wskaźniki', /^(?:TabControl|Slider|ProgressBar|DatePicker)/],
  ['menu', 'Menu', /^Menu/],
  ['toolbar', 'Pasek narzędzi', /^Toolbar/],
  ['status', 'Pasek stanu', /^StatusBar/],
  ['sidebar', 'Pasek boczny', /^Sidebar/],
  ['obrazy', 'Obrazy i ikony', /^(?:Picture|FontIcon)/],
  ['system', 'Ustawienia, daty i pliki', /^(?:Set|DateYear|DirCreate|File|Timer)/],
  ['svg', 'Zapis SVG', /^Svg/],
].map(([id, title, match]) => ({ id, title, match, url: 'reference/' + id + '/index.html' }));

const header = read('include/xwgui.h');
const docs = new Map();
for (const [, comment, name] of read('src/xwgui-api.c').matchAll(/^((?:\/\/ .*\n)+?)\/\/ (\w+)\(.* --> .*\n/gm)) {
  docs.set(name, comment.trimEnd().split('\n').map(line => line.slice(3)).join(' '));
}
for (const [, comment, name] of read('src/xwgui-svg.c').matchAll(/^\/\* (.+) \*\/\n[^\n]*?\b(Svg\w+)\(/gm)) {
  docs.set(name, comment);
}

const collator = new Intl.Collator('pl');
const entries = [...header.matchAll(/^([\w ][\w *]*?\b(\w+)\( [^\n]*\);)$/gm)].map(([, signature, name]) => {
  const matches = groups.filter(category => category.match.test(name));
  if (matches.length !== 1) throw Error('Brak jednej kategorii dla ' + name);
  if (!docs.has(name)) throw Error('Brak opisu w źródle dla ' + name);
  const [category] = matches;
  return {
    name, signature, category, summary: docs.get(name),
    url: 'reference/' + category.id + '/' + name.toLowerCase() + '.html',
  };
}).sort((a, b) => collator.compare(a.name, b.name));

const samples = [
  { title: 'Pierwsze okno', url: 'examples/pierwsze-okno.html', file: 'example/xwgui.c', summary: 'Tworzenie okna, uruchomienie pętli komunikatów i zwolnienie zasobów aplikacji.' },
  { title: 'Logo XWGUI', url: 'examples/logo-xwgui.html', file: 'doc/prog-zaso/wekt/logo-xwgui.c', summary: 'Rysowanie logo i zapis do pliku za pomocą API SVG.' },
];
const typesUrl = 'reference/typy.html';
const referenceUrl = 'reference/index.html';
const buildUrl = 'reference/build/index.html';
const examplesUrl = 'examples/index.html';
const logo = 'prog-zaso/wekt/logo-xwgui.svg';
const siteTitle = 'Dokumentacja XWGUI';

function page(file, title, content, options = {}) {
  const base = '../'.repeat(file.split('/').length - 1);
  const active = options.active ?? file;
  const reference = file.startsWith('reference/');
  const link = (url, text, className, selected = active === url) =>
    '<a class="' + className + '" href="' + base + url + '"' + (selected ? ' aria-current="page"' : '') + '>' + escape(text) + '</a>';
  const sidebarGroup = (name, links) => '<div class="nav-group"><h2>' + name + '</h2>\n' + links.join('\n') + '\n</div>';
  const groupLinks = groups.map(group => link(group.url, group.title, 'sidebar-link'));
  const searchOptions = groups.map(group => '<option value="' + group.id + '">' + escape(group.title) + '</option>').join('');
  write(file, `<!doctype html>
<html lang="pl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escape(options.description ?? (title === siteTitle ? 'Dokumentacja biblioteki C XWGUI dla systemu Windows.' : title + ' w dokumentacji XWGUI.'))}">
  <meta name="color-scheme" content="light dark">
  <title>${title === siteTitle ? siteTitle : escape(title) + ' · ' + siteTitle}</title>
  <link rel="icon" href="${base + logo}" type="image/svg+xml">
  <link rel="stylesheet" href="${base}prog-zaso/css/site.css">
  <script src="${base}prog-zaso/js/catalog.js" defer></script>
  <script src="${base}prog-zaso/js/syntax.js" defer></script>
  <script src="${base}prog-zaso/js/site.js" defer></script>
</head>
<body data-base="${base}">
  <a class="skip-link" href="#tresc">Przejdź do treści</a>
  <header class="site-header">
    <div class="brand-area">
      <button class="menu-button" type="button" aria-label="Otwórz nawigację" aria-controls="site-navigation" aria-expanded="false" hidden>☰</button>
    </div>
    <nav class="header-nav" aria-label="Menu główne">
      ${link('index.html', 'Dokumentacja', '', !reference)}
      ${link(referenceUrl, 'Publiczne API', '', reference)}
    </nav>
    <div class="header-actions">
      <button class="search-trigger" type="button" aria-label="Szukaj w dokumentacji" aria-haspopup="dialog" hidden>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/></svg>
        <span>Szukaj w dokumentacji</span><kbd>Ctrl+K</kbd>
      </button>
      <button class="theme-toggle" type="button" aria-label="Ciemny motyw" title="Ciemny motyw" aria-pressed="false" hidden>◐</button>
    </div>
  </header>
  <div class="site-layout">
    <aside class="sidebar" id="site-navigation">
      <button class="close-menu" type="button" aria-label="Zamknij nawigację" hidden>×</button>
      <nav aria-label="Spis treści">
        ${link('index.html', 'Przegląd', 'sidebar-link')}
        ${link(referenceUrl, 'Wszystkie funkcje', 'sidebar-link')}
        ${sidebarGroup('Publiczne API', [...groupLinks, link(typesUrl, 'Typy, stałe i makra', 'sidebar-link')])}
        <div class="sidebar-collection">${link(examplesUrl, 'Przykłady', 'sidebar-link')}</div>
        <div class="sidebar-collection">${link(buildUrl, 'Budowanie i instalacja', 'sidebar-link')}</div>
      </nav>
    </aside>
    <main id="tresc" class="main-content${options.overview ? ' overview' : ''}" tabindex="-1">
      ${content}
      <footer class="site-footer">
        <span>Copyright © 2024-2026 xWGUI Developments</span>
        <span>Created by the xDev community.</span>
      </footer>
    </main>
  </div>
  <div class="menu-backdrop" hidden></div>
  <dialog class="search-dialog" aria-labelledby="search-label">
    <div class="search-input-row">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/></svg>
      <label class="sr-only" for="doc-search" id="search-label">Szukaj w dokumentacji</label>
      <input id="doc-search" type="search" placeholder="Nazwa funkcji lub fragment opisu…" autocomplete="off" spellcheck="false" autofocus>
      <button class="close-search" type="button" aria-label="Zamknij wyszukiwanie">Esc</button>
    </div>
    <div class="search-filters">
      <label for="search-category">Kategoria</label>
      <select id="search-category"><option value="">Wszystkie kategorie</option>${searchOptions}</select>
    </div>
    <p class="search-status" role="status"></p>
    <ul class="search-results"></ul>
  </dialog>
  <div class="toast" role="status"></div>
</body>
</html>
`);
}

function heading(title) {
  return '<header class="page-heading"><h1>' + escape(title) + '</h1></header>';
}

function codeBlock(code, title, id, language = 'c') {
  return `<div class="code-block">
    <div class="code-toolbar"><span>${escape(title)}</span>
      <button type="button" class="copy-button" data-copy="${id}" aria-label="Kopiuj kod" title="Kopiuj kod" hidden>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>
      </button>
    </div>
    <pre tabindex="0"><code id="${id}" class="language-${language}">${escape(code)}</code></pre>
  </div>`;
}

function entryRow(url, name, summary, label = '') {
  return `<a class="entry-row" href="${url}"><div><h3>${escape(name)}</h3><p>${escape(summary)}</p></div>
    ${label ? '<span class="entry-category">' + escape(label) + '</span>' : ''}</a>`;
}

function catalog(file, group) {
  const list = group ? entries.filter(entry => entry.category === group) : entries;
  const title = group?.title ?? 'Wszystkie funkcje';
  const byLetter = Map.groupBy(list, entry => entry.name[0].toUpperCase());
  const alphabet = [...byLetter.keys()].map(letter => '<a href="#letter-' + letter + '">' + letter + '</a>').join('');
  const sections = [...byLetter].map(([letter, functions]) => `<section id="letter-${letter}" class="letter-group">
    <h2>${letter}</h2>
    <div>${functions.map(entry => entryRow(path.posix.relative(path.posix.dirname(file), entry.url), entry.name, entry.summary, entry.category.title)).join('\n')}</div>
  </section>`).join('\n');
  const chips = group ? '' : '<nav class="category-chips" aria-label="Kategorie funkcji">' +
    groups.map(category => '<a href="' + path.posix.relative('reference', category.url) + '">' + escape(category.title) + '</a>').join('') + '</nav>';
  page(file, title, heading(title) + chips + '<nav class="alphabet" aria-label="Przejdź do litery">' + alphabet + '</nav>' + sections);
}

function navigation(previous, next) {
  const item = (peer, direction, label) => peer
    ? `<a rel="${direction}" href="${path.posix.basename(peer.url)}" title="${escape(peer.name ?? peer.title)}">${label}</a>`
    : `<button type="button" disabled>${label}</button>`;
  return '<nav class="entry-navigation" aria-label="Nawigacja między wpisami">' +
    item(previous, 'prev', 'Poprzedni wpis') + item(next, 'next', 'Następny wpis') + '</nav>';
}

function entryHeading(title, summary, category, categoryUrl, previous, next) {
  return `<header class="page-heading doc-heading">
    <div class="doc-heading-copy">
      <a class="eyebrow" href="${categoryUrl}">${escape(category)}</a>
      <h1>${escape(title)}</h1>
      <p>${escape(summary)}</p>
    </div>
    ${navigation(previous, next)}
  </header>`;
}

page('index.html', siteTitle, `<section class="hero">
  <div class="hero-copy">
    <h1>${siteTitle}</h1>
    <p>XWGUI to biblioteka C do tworzenia aplikacji okienkowych w systemie Windows.</p>
    <div class="hero-actions"><a class="button primary" href="${referenceUrl}">Przeglądaj wszystkie funkcje</a></div>
  </div>
  <img class="page-logo" src="${logo}" alt="Logo XWGUI" width="512" height="512">
</section>`, { overview: true });

catalog(referenceUrl);
for (const group of groups) {
  catalog(group.url, group);
  const peers = entries.filter(entry => entry.category === group);
  for (const [index, entry] of peers.entries()) {
    page(entry.url, entry.name, entryHeading(entry.name, entry.summary, group.title, 'index.html', peers[index - 1], peers[index + 1]) +
      '<section class="doc-section" id="skladnia"><h2>Składnia</h2>' +
      codeBlock(entry.signature, 'xwgui.h', 'code-syntax') + '</section>', { active: group.url, description: entry.summary });
  }
}

const types = header.slice(header.indexOf('typedef enum bool'), header.indexOf('/* ---', header.indexOf('} WinState;'))).trim();
const macros = header.split('\n').filter(line => /^#define (?:SC_|FONT_|SVG_|UNUSED|IIF|MAX|MIN)/.test(line)).join('\n');
const keyHeader = read('include/xwgui-inkey.h');
const keyCodes = keyHeader.slice(keyHeader.indexOf('#define XWGUI_INKEY_H') + '#define XWGUI_INKEY_H'.length, keyHeader.lastIndexOf('#endif')).trim();
page(typesUrl, 'Typy, stałe i makra', heading('Typy, stałe i makra') +
  '<p>Publiczne deklaracje są w <a href="../../include/xwgui.h"><code>include/xwgui.h</code></a>. Rozmiary i położenie kontrolek podaje się w pikselach logicznych przy 96 DPI. Kolory interfejsu mają postać <code>0xRRGGBB</code>, a funkcje SVG przyjmują kolory jako tekst.</p>' +
  '<section class="doc-section"><h2>Typy i funkcje zwrotne</h2>' + codeBlock(types, 'xwgui.h', 'code-types') + '</section>' +
  '<section class="doc-section"><h2>Stałe i makra</h2>' + codeBlock(macros, 'xwgui.h', 'code-macros') + '</section>' +
  '<section class="doc-section" id="klawisze"><h2>Kody klawiszy</h2>' +
  '<p><a href="../../include/xwgui-inkey.h"><code>xwgui-inkey.h</code></a> jest dołączany przez <code>xwgui.h</code>. Niektóre kody są wspólne, np. <code>K_CTRL_S</code> i <code>K_LEFT</code>. Skróty rozróżnia się nazwą, np. w <code>MenuAdd()</code> i <code>WinSetKey()</code>.</p>' +
  codeBlock(keyCodes, 'xwgui-inkey.h', 'code-keys') + '</section>');

page(buildUrl, 'Budowanie i instalacja', heading('Budowanie i instalacja') + `
  <section class="doc-section">
    <h2>MSYS2</h2>
    <p>Uruchom polecenia w katalogu projektu, w terminalu MSYS2 z narzędziami dla Windows, np. CLANG64. <code>Makefile</code> używa <code>clang</code>, <code>ar</code> i standardu C11.</p>
    ${codeBlock('make\nmake example\n./example/xwgui.exe', 'Terminal', 'code-build', 'sh')}
    <p><code>make</code> tworzy <code>lib/libxwgui.a</code>. <code>make example</code> buduje przykładową aplikację i w razie potrzeby najpierw buduje bibliotekę.</p>
  </section>
  <section class="doc-section">
    <h2>Instalacja</h2>
    ${codeBlock('make install', 'Terminal', 'code-install', 'sh')}
    <p>Polecenie kopiuje bibliotekę do katalogu <code>lib</code>, a nagłówki <code>xwgui.h</code> i <code>xwgui-inkey.h</code> do katalogu <code>include</code> pod <code>PREFIX</code>. Wartość domyślna to <code>MINGW_PREFIX</code> lub <code>/usr/local</code>.</p>
    <p><a href="../../../Makefile">Makefile projektu</a></p>
  </section>`);

page(examplesUrl, 'Przykłady', heading('Przykłady') + '<div class="example-list">' +
  samples.map(sample => entryRow(path.posix.basename(sample.url), sample.title, sample.summary)).join('') + '</div>');
for (const [index, sample] of samples.entries()) {
  const code = read(sample.file).trimEnd();
  const source = path.posix.relative('doc/examples', sample.file);
  page(sample.url, sample.title, entryHeading(sample.title, sample.summary, 'Przykłady', 'index.html', samples[index - 1], samples[index + 1]) +
    '<section class="doc-section"><h2>Kod źródłowy</h2>' +
    codeBlock(code, path.posix.basename(sample.file), 'code-example') +
    '<p><a href="' + source + '">Otwórz plik źródłowy</a></p></section>', { active: examplesUrl });
}

const searchEntries = entries.map(({ name, url, summary, category }) => ({
  name, url, summary, category: category.id, categoryTitle: category.title,
}));
const shortcuts = Object.fromEntries([
  ['przeglad', 'index.html'], ['api', referenceUrl], ['typy', typesUrl],
  ['budowanie', buildUrl], ['przyklad', samples[0].url],
  ...groups.map(group => [group.id, group.url]),
  ...entries.map(entry => [entry.name, entry.url]),
]);
write('prog-zaso/js/catalog.js', '/* Wygenerowane przez build-doc.cjs. */\nconst xwguiCatalog = ' +
  JSON.stringify({ entries: searchEntries, shortcuts }, null, 2) + ';\n');
console.log('Zapisano dokumentację ' + entries.length + ' funkcji.');
