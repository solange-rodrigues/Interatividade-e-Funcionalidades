# Entrega IV - Acessibilidade, Otimização e Deploy (v2.0.0)

Este projeto foi refatorado para cumprir todos os requisitos da Entrega IV (final).

### Funcionalidades Implementadas (Entrega IV):
* **GitFlow:** O projeto agora segue o GitFlow (`main`, `develop`, `feature/...`), com histórico de commits semânticos e a entrega final publicada como `v2.0.0` na aba "Releases".
* **Acessibilidade (WCAG 2.1 AA):**
    * HTML semântico (`<header>`, `<main>`, `<footer>`).
    * Foco de teclado visível em todos os elementos.
    * Contraste de cores 4.5:1 (ou superior) corrigido.
    * Implementação de **Modo Escuro** e **Modo de Alto Contraste** (controlado pelo seletor no cabeçalho).
* **Otimização:**
    * Todas as imagens `.png` e `.jpg` foram comprimidas (via TinyPNG).
    * O arquivo `styles.min.css` foi gerado para produção.

---

# (Versão Anterior - Entrega III) 🐾 ONG Anjos de Patas

Transformando vidas, uma patinha de cada vez. 🐶🐱
📖 Contexto

O terceiro setor brasileiro movimenta mais de R$ 15 bilhões anuais e emprega aproximadamente 3 milhões de pessoas.
Apesar disso, apenas 30% das ONGs possuem presença digital adequada.
Este projeto simula uma solução acessível e funcional para ampliar o alcance de uma ONG, captar recursos e engajar voluntários, aplicando na prática os conhecimentos adquiridos em sala de aula.
🎯 Objetivo Geral

Desenvolver uma plataforma web completa e profissional que permita às ONGs gerenciar suas atividades, divulgar projetos, captar recursos e engajar voluntários.
📝 Objetivos Específicos

Aplicar conceitos de estilização avançada com CSS3.
Implementar layouts responsivos utilizando Flexbox e Grid.
Explorar tipografia, cores e hierarquia visual para melhorar a experiência do usuário.
Garantir boas práticas de acessibilidade.
Simular um ambiente de desenvolvimento profissional com versionamento no GitHub.
Atividade 3: integrar navegação SPA, templates dinâmicos e validação de formulário.
🖥️ Páginas Desenvolvidas

Início (index.html): apresenta a ONG, missão, valores e informações de contato.
Projetos (projetos.html): lista de projetos sociais, exibidos dinamicamente via JavaScript.
Cadastro (cadastro.html): formulário de inscrição de voluntários com máscaras e validação.
✨ Funcionalidades

Estrutura HTML5 semântica.
SPA (Single Page Application) com router.js.
Templates dinâmicos de projetos com templates.js.
Formulário interativo com validação (validator.js).
Máscaras de input para CPF, telefone e CEP (mask.js).
Layout responsivo (mobile-first) com Flexbox e Grid.
Paleta de cores e tipografia personalizadas.
Imagens otimizadas e organizadas em pastas.
🚀 Tecnologias Utilizadas

HTML5
CSS3 (Flexbox, Grid, Media Queries, Animações)
JavaScript (ES6)
📱 Responsividade

O site foi desenvolvido com design mobile-first, adaptando-se a diferentes tamanhos de tela (celulares, tablets e desktops).
📂 Estrutura de Pastas

Interatividade-e-Funcionalidades/ │── index.html │── projetos.html │── cadastro.html └── assets/ ├── css/ │ └── styles.css ├── js/ │ ├── router.js │ ├── templates.js │ ├── validator.js │ └── mask.js └── img/ ├── logo-animais.png ├── feira-adocao.png ├── foto-principal.png ├── cadastro.png └── resgate.png
🔧 Como Executar

Clonar ou baixar o repositório.
Recomenda-se rodar em um servidor local (ex.: Live Server no VSCode ou python -m http.server) para que o fetch funcione corretamente.
Abrir o endereço local no navegador.
✅ Testes RecomendADOS

Navegar entre Início, Projetos e Cadastro sem recarregar a página (SPA).
Conferir a renderização dos cards em .projects-grid.
Testar máscaras de CPF, telefone e CEP no formulário.
Submeter o formulário vazio para ver mensagens de erro; preencher corretamente para ver mensagem de sucesso.
Usar os botões Voltar/Avançar do navegador para verificar o funcionamento do popstate.
👩‍💻 Autora: Solange Rodrigues

Projeto desenvolvido por Solange Rodrigues como parte da disciplina Desenvolvimento de Front-End Web.
Versão online disponível em:GitHub Pages: https://solange-rodrigues.github.io/Interatividade-e-Funcionalidades/ Repositorio: https://github.com/solange-rodrigues/Interatividade-e-Funcionalidades
