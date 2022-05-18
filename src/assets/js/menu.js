/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
import { getData } from './getData.js';

const menuButton = document.querySelector('.menu__button');
const menu = document.querySelector('.header-down__menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('menu_active');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.header-down__menu')) {
    menu.classList.remove('menu_active');
  }
});

const menuArrow = document.querySelectorAll('.menu__arrow');

function elementDisclosure(item) {
  item.addEventListener('click', () => {
    const menuParent = item.closest('.menu__item');
    if (!menuParent.querySelector('.menu__child')) {
      const linkId = menuParent.querySelector('.menu__link').getAttribute('id');

      const childList = document.createElement('ul');
      childList.classList.add('menu__child');
      childList.classList.add('menu__child_visible');

      const data = getData(linkId);
      // eslint-disable-next-line no-use-before-define
      data.forEach((product) => childList.append(newElementCatalog(product)));
      menuParent.append(childList);
    } else {
      menuParent.querySelector('.menu__child').classList.toggle('menu__child_visible');
    }

    item.classList.toggle('menu__arrow_open');
  });
}

function newElementCatalog(product) {
  const menuItem = document.createElement('li');
  menuItem.classList.add('menu__item');
  menuItem.setAttribute('data-id', product.id);
  if (product.subs) {
    menuItem.classList.add('menu__parent');

    const menuNewArrow = document.createElement('span');
    menuNewArrow.classList.add('menu__arrow');
    menuNewArrow.innerHTML = '❯';
    menuNewArrow.addEventListener('click', elementDisclosure(menuNewArrow));
    menuItem.append(menuNewArrow);
  }

  const menuLink = document.createElement('a');
  menuLink.classList.add('menu__link');
  menuLink.setAttribute('href', product.url);
  menuLink.innerHTML = product.name;

  menuItem.append(menuLink);
  return menuItem;
}

menuArrow.forEach((item) => {
  item.addEventListener('click', elementDisclosure(item));
});
