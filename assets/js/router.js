// assets/js/router.js

const routes = {
  '/': 'index.html',
  '/index.html': 'index.html',
  '/projetos.html': 'projetos.html',
  '/cadastro.html': 'cadastro.html'
};

function getMainContainer() {
  return document.querySelector('main');
}

function normalizePath(path) {
  if (!path) return '/';
  // garante barra inicial e remove query/hash
  try {
    const u = new URL(path, window.location.origin);
    return u.pathname || '/';
  } catch {
    // se for caminho relativo
    const idx = path.indexOf('?');
    const idxHash = path.indexOf('#');
    const end = idx > -1 ? idx : (idxHash > -1 ? idxHash : path.length);
    const p = path.slice(0, end);
    return p.startsWith('/') ? p : '/' + p;
  }
}

async function loadContent(pathname) {
  const path = normalizePath(pathname);
  const file = routes[path] || routes['/'];
  try {
    const response = await fetch(file, { cache: 'no-store' });
    if (!response.ok) throw new Error('Fetch error ' + response.status);
    const html = await response.text();

    const container = getMainContainer();
    if (!container) {
      console.error('Main container não encontrado para injetar conteúdo.');
      return;
    }

    const mainHtml = extractMainContent(html);
    container.innerHTML = mainHtml;

    // Reexecuta inicializadores específicos de página (idempotentes)
    if (path.endsWith('cadastro.html') && typeof initializeFormValidation === 'function') {
      initializeFormValidation();
    }
    if (path.endsWith('projetos.html') && typeof renderProjects === 'function') {
      renderProjects();
    }

    // Atualiza título de forma simples (mantém título base caso não seja possível)
    try {
      document.title = (file.replace('.html', '') || 'Site').toUpperCase();
    } catch (e) {}

    // Atualiza URL no histórico sem recarregar
    window.history.pushState({}, '', path);
  } catch (error) {
    console.error('Erro ao carregar conteúdo do SPA:', error);
    const container = getMainContainer();
    if (container) container.innerHTML = '<h1>Erro ao carregar a página.</h1>';
  }
}

function extractMainContent(htmlString) {
  const mainStart = htmlString.search(/<main(\s|>)/i);
  if (mainStart === -1) return htmlString;
  const openTagEnd = htmlString.indexOf('>', mainStart);
  if (openTagEnd === -1) return htmlString;
  const mainClose = htmlString.lastIndexOf('</main>');
  if (mainClose === -1) return htmlString.substring(openTagEnd + 1);
  return htmlString.substring(openTagEnd + 1, mainClose);
}

function handleNavigation() {
  if (handleNavigation._initialized) return;
  handleNavigation._initialized = true;

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link], a');
    if (!link) return;

    const href = link.getAttribute('href') || '';
    if (href.startsWith('#')) return;

    // permite abrir em nova aba quando tiver target
    if (link.target && link.target !== '_self') return;

    try {
      const url = new URL(href, window.location.origin);
      if (url.hostname !== window.location.hostname) return;
      const pathname = normalizePath(url.pathname);
      if (pathname in routes) {
        e.preventDefault();
        loadContent(pathname);
      }
    } catch (err) {
      const pathname = normalizePath(href);
      if (pathname in routes) {
        e.preventDefault();
        loadContent(pathname);
      }
    }
  });

  window.addEventListener('popstate', () => {
    loadContent(window.location.pathname);
  });

  // Carrega a rota atual ao inicializar
  loadContent(window.location.pathname);
}

// Expor de forma global para uso nos HTMLs
window.handleNavigation = handleNavigation;
window.router = { navigate: loadContent };
