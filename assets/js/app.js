// assets/js/app.js
// Orquestrador da aplicação — chama o router e inicializadores por página de forma segura e idempotente

document.addEventListener('DOMContentLoaded', () => {
  if (typeof handleNavigation === 'function') handleNavigation();

  const page = document.body && document.body.dataset && document.body.dataset.page;

  if (page === 'projetos' && typeof renderProjects === 'function') renderProjects();
  if (page === 'cadastro' && typeof initializeFormValidation === 'function') initializeFormValidation();

  // Expor uma função utilitária para inicializar dinamicamente após injeções do router
  window.appInitializePage = (pathname) => {
    const p = pathname.replace(/^\//, '');
    if (p.endsWith('projetos.html') || p === 'projetos') {
      if (typeof renderProjects === 'function') renderProjects();
    }
    if (p.endsWith('cadastro.html') || p === 'cadastro') {
      if (typeof initializeFormValidation === 'function') initializeFormValidation();
    }
  };

  console.log('Aplicação Dinâmica (SPA) Inicializada. Validação e Templates prontos.');
});
