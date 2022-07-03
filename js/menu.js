(() => {
  const refs = {
    toggleMenu: document.querySelector('[toggle-btn]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
    button: document.querySelector('.toggle-btn'),
  };

  // refs.openMenuBtn.addEventListener('click', toggleMenu);
  // refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.toggleMenu.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.menu.classList.toggle('is-open');
    refs.button.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');
  }
})();
