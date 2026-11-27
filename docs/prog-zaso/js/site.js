'use strict';

const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const themePreference = matchMedia('(prefers-color-scheme: dark)');
const themeKey = 'xwgui-doc-theme';
let savedTheme;

function readTheme() {
  try {
    const stored = localStorage.getItem(themeKey);
    if (stored === 'light' || stored === 'dark') savedTheme = stored;
  } catch {
    // Storage may be unavailable when the page is opened from disk.
  }
}

function applyTheme() {
  const theme = savedTheme ?? (themePreference.matches ? 'dark' : 'light');
  root.dataset.theme = theme;
  themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
}

readTheme();
applyTheme();
window.addEventListener('pageshow', event => {
  if (event.persisted) {
    readTheme();
    applyTheme();
  }
});
themeToggle.hidden = false;
themePreference.addEventListener('change', applyTheme);
themeToggle.addEventListener('click', () => {
  savedTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
  try {
    localStorage.setItem(themeKey, savedTheme);
  } catch {
    // The theme still applies for the current visit.
  }
});

const header = document.querySelector('.site-header');
const main = document.querySelector('.main-content');
const sidebar = document.querySelector('.sidebar');
const menuButton = document.querySelector('.menu-button');
const closeMenu = document.querySelector('.close-menu');
const backdrop = document.querySelector('.menu-backdrop');
const mobile = matchMedia('(max-width: 720px)');
const sidebarLinks = [...sidebar.querySelectorAll('a')];

function setMenu(open) {
  sidebar.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  backdrop.hidden = !open;
  header.inert = open;
  main.inert = open;
  if (open) {
    closeMenu.focus();
  }
}

function dismissMenu() {
  setMenu(false);
  menuButton.focus();
}

menuButton.hidden = false;
closeMenu.hidden = false;
root.classList.add('enhanced');
menuButton.addEventListener('click', () => setMenu(true));
closeMenu.addEventListener('click', dismissMenu);
backdrop.addEventListener('click', dismissMenu);
mobile.addEventListener('change', () => {
  if (!mobile.matches && sidebar.classList.contains('open')) {
    setMenu(false);
    (sidebarLinks.find(link => link.hasAttribute('aria-current')) ?? sidebarLinks[0]).focus();
  }
});

sidebar.addEventListener('keydown', event => {
  if (!sidebar.classList.contains('open')) {
    return;
  }
  if (event.key === 'Escape') {
    event.preventDefault();
    dismissMenu();
  }
  const lastLink = sidebarLinks.at(-1);
  if (event.key === 'Tab' && event.shiftKey && event.target === closeMenu) {
    event.preventDefault();
    lastLink.focus();
  }
  if (event.key === 'Tab' && !event.shiftKey && event.target === lastLink) {
    event.preventDefault();
    closeMenu.focus();
  }
});

sidebar.addEventListener('click', event => {
  if (event.target.closest('a') && mobile.matches && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
    dismissMenu();
  }
});

const currentSidebarLink = sidebar.querySelector('[aria-current]');
if (!mobile.matches && currentSidebarLink && currentSidebarLink.offsetTop + currentSidebarLink.offsetHeight > sidebar.clientHeight) {
  sidebar.scrollTop = currentSidebarLink.offsetTop;
}

const base = document.body.dataset.base;

if (!base && location.hash) {
  const id = location.hash.slice(1);
  if (Object.hasOwn(xwguiCatalog.shortcuts, id)) {
    location.replace(xwguiCatalog.shortcuts[id]);
  }
}

const searchTrigger = document.querySelector('.search-trigger');
const dialog = document.querySelector('.search-dialog');
const searchInput = document.querySelector('#doc-search');
const searchCategory = document.querySelector('#search-category');
const searchStatus = document.querySelector('.search-status');
const results = document.querySelector('.search-results');
const maxResults = 60;
const normalize = text => text.toLocaleLowerCase('pl').normalize('NFD').replace(/\p{Diacritic}/gu, '').replaceAll('ł', 'l');
const searchable = xwguiCatalog.entries.map(entry => ({
  ...entry,
  searchName: normalize(entry.name),
  searchSummary: normalize(entry.summary),
}));

function renderResults() {
  results.replaceChildren();
  const query = normalize(searchInput.value.trim());
  const terms = query.split(/\s+/);
  const category = searchCategory.value;
  if (!query && !category) {
    searchStatus.textContent = 'Wpisz nazwę funkcji lub fragment opisu.';
    return;
  }

  const exact = [];
  const prefixes = [];
  const names = [];
  const descriptions = [];
  for (const entry of searchable) {
    if (category && entry.category !== category) continue;
    if (query && entry.searchName === query) {
      exact.push(entry);
    } else if (query && entry.searchName.startsWith(query)) {
      prefixes.push(entry);
    } else if (terms.every(term => entry.searchName.includes(term))) {
      names.push(entry);
    } else if (terms.every(term => entry.searchName.includes(term) || entry.searchSummary.includes(term))) {
      descriptions.push(entry);
    }
  }

  const matches = exact.concat(prefixes, names, descriptions);
  searchStatus.textContent = matches.length > maxResults ? 'Pokazano ' + maxResults + ' z ' + matches.length + ' wyników.' :
    matches.length ? 'Wyniki: ' + matches.length : 'Nie znaleziono funkcji.';
  for (const entry of matches.slice(0, maxResults)) {
    const item = document.createElement('li');
    const link = document.createElement('a');
    const title = document.createElement('code');
    const categoryLabel = document.createElement('small');
    const summary = document.createElement('span');
    link.href = base + entry.url;
    title.textContent = entry.name;
    categoryLabel.textContent = entry.categoryTitle;
    summary.textContent = entry.summary;
    link.append(title, categoryLabel, summary);
    item.append(link);
    results.append(item);
  }
}

function openSearch() {
  if (dialog.open) {
    searchInput.focus();
    return;
  }
  searchInput.value = '';
  searchCategory.value = '';
  renderResults();
  dialog.showModal();
}

searchTrigger.hidden = false;
searchTrigger.addEventListener('click', openSearch);
dialog.querySelector('.close-search').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
searchInput.addEventListener('input', renderResults);
searchCategory.addEventListener('change', renderResults);
results.addEventListener('click', event => {
  if (event.target.closest('a') && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) dialog.close();
});

dialog.addEventListener('keydown', event => {
  const links = [...results.querySelectorAll('a')];
  if (!links.length || event.target === searchCategory) return;
  const index = links.indexOf(event.target);
  if (index === -1 && event.target !== searchInput) return;

  if (event.key === 'Enter' && index === -1) {
    event.preventDefault();
    links[0].click();
  }
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    const next = event.key === 'ArrowDown' ? index + 1 : index - 1;
    links[next < 0 ? links.length - 1 : next % links.length].focus();
  }
});

document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k' && !main.inert) {
    event.preventDefault();
    openSearch();
  }
});

const toast = document.querySelector('.toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2400);
}

for (const button of document.querySelectorAll('[data-copy]')) {
  button.hidden = false;
  button.addEventListener('click', async () => {
    const code = document.getElementById(button.dataset.copy);
    try {
      await navigator.clipboard.writeText(code.textContent);
      showToast('Skopiowano kod.');
    } catch {
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      showToast('Naciśnij Ctrl+C, aby skopiować zaznaczenie.');
    }
  });
}

