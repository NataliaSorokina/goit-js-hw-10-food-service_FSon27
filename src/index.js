import dishes from './menu.json';
import itemsTemplate from './templates/menu-dishes.hbs';
import './styles.css';

const menuRef = document.querySelector('.js-menu');
const markUp = itemsTemplate(dishes);

menuRef.insertAdjacentHTML('beforeend', markUp);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

switchRef.addEventListener('change', switchTheme);

function switchTheme() {
  if (switchRef.checked) {
      bodyRef.classList.remove(Theme.LIGHT),
      bodyRef.classList.add(Theme.DARK),
      localStorage.setItem('theme', Theme.DARK);
  } else {
      bodyRef.classList.remove(Theme.DARK),
      bodyRef.classList.add(Theme.LIGHT),    
      localStorage.setItem('theme', Theme.LIGHT);
    }
};

if (localStorage.getItem('theme') === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK),    
    switchRef.checked = true;
};

