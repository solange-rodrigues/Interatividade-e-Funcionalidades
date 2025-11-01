// assets/js/theme.js

/**
 * Função principal para inicializar o seletor de temas.
 * Será executada quando o DOM estiver pronto.
 */
function initializeThemeSwitcher() {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  const currentTheme = localStorage.getItem('theme');

  if (!themeToggle) {
    console.warn('Elemento #themeToggle não encontrado. O seletor de temas não vai funcionar.');
    return;
  }

  /**
   * Aplica o tema salvo (se existir) quando a página carrega.
   */
  function applySavedTheme() {
    if (currentTheme) {
      body.classList.remove('dark-mode', 'high-contrast-mode'); // Limpa temas antigos
      
      if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
      } else if (currentTheme === 'contrast') {
        body.classList.add('high-contrast-mode');
      }
      
      // Atualiza o <select> para mostrar a opção correta
      themeToggle.value = currentTheme;
    }
  }

  /**
   * Função chamada quando o usuário muda o valor do <select>.
   */
  function handleThemeChange(event) {
    const selectedTheme = event.target.value;
    
    // 1. Limpa classes antigas do <body>
    body.classList.remove('dark-mode', 'high-contrast-mode');

    // 2. Adiciona a classe nova (se não for "light")
    if (selectedTheme === 'dark') {
      body.classList.add('dark-mode');
    } else if (selectedTheme === 'contrast') {
      body.classList.add('high-contrast-mode');
    }

    // 3. Salva a escolha no localStorage
    localStorage.setItem('theme', selectedTheme);
  }

  // 1. Aplica o tema salvo assim que a página carrega
  applySavedTheme();

  // 2. Adiciona o "ouvinte" de evento para quando o usuário mudar
  themeToggle.addEventListener('change', handleThemeChange);
}

// Garante que o script só rode depois que o HTML estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeThemeSwitcher);
} else {
  // DOM já está pronto
  initializeThemeSwitcher();
}
