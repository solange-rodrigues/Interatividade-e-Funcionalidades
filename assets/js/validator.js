// assets/js/validator.js

// Seletores e mensagens
const SELECTORS = {
  formId: '#signupForm',
  errorsId: '#formErrors'
};

function formatErrors(errors) {
  return errors.map(err => `<div class="error-item">${err}</div>`).join('');
}

function validateFormData(form) {
  const errors = [];
  const nome = form.querySelector('#nome')?.value.trim() || '';
  const email = form.querySelector('#email')?.value.trim() || '';
  const tipo = form.querySelector('#tipo')?.value || '';
  const termos = form.querySelector('#termos')?.checked;

  if (nome.length < 3) errors.push('Informe seu nome completo (mínimo 3 caracteres).');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Informe um e‑mail válido.');
  if (!tipo) errors.push('Selecione como você quer ajudar.');
  if (!termos) errors.push('É necessário concordar com os termos de participação.');

  return errors;
}

function clearFormErrors(container) {
  if (!container) return;
  container.innerHTML = '';
  container.style.display = 'none';
}

function showFormErrors(container, errors) {
  if (!container) return;
  container.innerHTML = formatErrors(errors);
  container.style.display = 'block';
}

// Submissão real (placeholder) — substitua por envio real quando necessário
function submitForm(form) {
  const errorsContainer = document.querySelector(SELECTORS.errorsId);
  clearFormErrors(errorsContainer);
  // Simular envio e feedback
  form.reset();
  const success = document.createElement('div');
  success.className = 'alert alert-success';
  success.textContent = 'Cadastro enviado com sucesso. Obrigado por ajudar!';
  errorsContainer.parentNode.insertBefore(success, errorsContainer);
  setTimeout(() => success.remove(), 5000);
}

// Inicializador idempotente
function initializeFormValidation() {
  const form = document.querySelector(SELECTORS.formId);
  const errorsContainer = document.querySelector(SELECTORS.errorsId);

  if (!form) return;
  if (initializeFormValidation._initialized) return;
  initializeFormValidation._initialized = true;

  // Garantir existência do container de erros
  if (!errorsContainer) {
    const div = document.createElement('div');
    div.id = SELECTORS.errorsId.replace('#', '');
    div.setAttribute('aria-live', 'polite');
    form.parentNode.insertBefore(div, form);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const errors = validateFormData(form);
    const container = document.querySelector(SELECTORS.errorsId);
    clearFormErrors(container);
    if (errors.length) {
      showFormErrors(container, errors);
      return;
    }
    submitForm(form);
  });
}

// Expor globalmente para router.js
window.initializeFormValidation = initializeFormValidation;
