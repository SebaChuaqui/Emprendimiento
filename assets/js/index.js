const toggleButton = document.querySelector('nav > svg');
const menu = document.querySelector('nav > ul');

toggleButton.addEventListener('click', toggleMenu);

function toggleMenu(e) {
  menu.classList.toggle('visible');
}


