const menu = document.getElementById('menu');
const menuTrigger = document.getElementById('menu-trigger');
const menuClose = document.getElementById('menu-close');

menuTrigger.addEventListener('click', (event) => {
  event.preventDefault();
  showMenu();
});

menuClose.addEventListener('click', (event) => {
  event.preventDefault();
  hideMenu();
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.menu') && !event.target.closest('.header-button-menu')) {
    hideMenu();
  }
});

const showMenu = () => {
  menu.classList.add('menu-visible');
};

const hideMenu = () => {
  menu.classList.remove('menu-visible');
};
