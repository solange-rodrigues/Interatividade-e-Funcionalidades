// assets/js/templates.js

const projectData = [
  {
    id: 'resgate',
    imgSrc: 'assets/img/resgate.png',
    imgAlt: 'Voluntária abraçando um cachorro resgatado.',
    title: 'Projeto Resgate e Cuidado',
    description: 'Atuamos na linha de frente, resgatando animais em situação de risco, oferecendo cuidados veterinários e preparando-os para um novo lar.'
  },
  {
    id: 'adocao',
    imgSrc: 'assets/img/feira-adocao.png',
    imgAlt: 'Família feliz adotando um cão vira-lata.',
    title: 'Feiras de Adoção Responsável',
    description: 'Regularmente, organizamos eventos para promover o encontro entre nossos anjinhos e suas futuras famílias. Adoção é um ato de amor!'
  },
  {
    id: 'educacao',
    imgSrc: 'assets/img/logo-animais.png',
    imgAlt: 'Pessoa lendo sobre animais.',
    title: 'Educação e Conscientização',
    description: 'Desenvolvemos palestras e materiais para conscientizar a comunidade sobre a importância da guarda responsável e bem-estar animal.'
  }
];

function escapeHtml(str) {
  return String(str || '').replace(/[&<>"']/g, ch =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch])
  );
}

function clearGrid(grid) {
  grid.innerHTML = '';
}

function createCardNode(project) {
  const card = document.createElement('div');
  card.className = 'card';
  card.id = project.id;

  const article = document.createElement('article');

  const img = document.createElement('img');
  img.src = project.imgSrc;
  img.alt = project.imgAlt || '';
  img.loading = 'lazy';
  img.decoding = 'async';
  article.appendChild(img);

  const h2 = document.createElement('h2');
  h2.textContent = project.title;
  article.appendChild(h2);

  const p = document.createElement('p');
  p.textContent = project.description;
  article.appendChild(p);

  const anchor = document.createElement('a');
  // usa rota interna para o SPA: aponta para projetos com âncora do projeto
  anchor.href = 'projetos.html#' + encodeURIComponent(project.id);
  anchor.setAttribute('aria-label', `Abrir ${project.title}`);
  anchor.className = 'card-link';
  anchor.dataset.link = 'true';
  anchor.appendChild(article);
  card.appendChild(anchor);

  return card;
}

function renderProjects() {
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;
  clearGrid(grid);

  const frag = document.createDocumentFragment();

  projectData.forEach((proj) => {
    const node = createCardNode(proj);
    frag.appendChild(node);
  });

  grid.appendChild(frag);
}

// Expor globalmente para o router.js
window.renderProjects = renderProjects;