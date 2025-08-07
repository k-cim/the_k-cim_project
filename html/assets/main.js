// Menu langue déroulant (simple et robuste)
const langMenu = document.querySelector('.lang-menu');
const langBtn = document.getElementById('lang-btn');
if (langMenu && langBtn) {
  langBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    langMenu.classList.toggle('open');
  });
  document.addEventListener('click', function(e) {
    langMenu.classList.remove('open');
  });
  langMenu.querySelectorAll('.lang-option').forEach(opt => {
    opt.onclick = (ev) => {
      setLang(opt.dataset.lang); // À ajuster selon ta logique existante
      langMenu.classList.remove('open');
      ev.stopPropagation();
    }
  });
}

