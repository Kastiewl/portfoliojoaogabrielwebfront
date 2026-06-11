/**
 * Inicializa os scripts da página assim que o DOM estiver totalmente carregado.
 */
document.addEventListener('DOMContentLoaded', () => {
  initFadeObserver();
  initSidebar();
  initContactValidation();
});

/**
 * Controla o efeito de fade-in e fade-out (reset bidirecional) das seções.
 */
function initFadeObserver() {
  const fadeSections = document.querySelectorAll('.fade-section');
  
  if (fadeSections.length === 0) return;

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeSections.forEach(section => fadeObserver.observe(section));
}

/**
 * Controla o comportamento de abrir, fechar e alternar do Menu Dropdown.
 */
function initSidebar() {
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const sidebar = document.getElementById('sidebar');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  if (!sidebar) return;

  const openSidebar = () => {
    sidebar.classList.add('open');
  };

  const closeSidebar = () => {
    sidebar.classList.remove('open');
  };

  const toggleSidebar = () => {
    if (sidebar.classList.contains('open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };

  if (menuBtn) menuBtn.addEventListener('click', toggleSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);

  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebarLinks.forEach(activeLink => activeLink.classList.remove('active'));
      link.classList.add('active');
      closeSidebar();
    });
  });
}

/**
 * Trata a validação Javascript do formulário de contato simples.
 */
function initContactValidation() {
  const form = document.getElementById('contactForm');
  const msgContainer = document.getElementById('formMessage');

  if (!form || !msgContainer) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('formNome').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const mensagem = document.getElementById('formMensagem').value.trim();

    msgContainer.textContent = '';
    msgContainer.className = 'form-message';

    if (!nome || !email || !mensagem) {
      msgContainer.textContent = 'Por favor, preencha todos os campos antes de enviar.';
      msgContainer.classList.add('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      msgContainer.textContent = 'Insira um formato de e-mail válido (ex: nome@dominio.com).';
      msgContainer.classList.add('error');
      return;
    }

    msgContainer.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
    msgContainer.classList.add('success');
    
    form.reset();
  });
}