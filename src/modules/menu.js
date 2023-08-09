function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const menuTitle = document.createElement('h2');
  menuTitle.textContent = "Our Menu";

  const menuPanel = document.createElement('div');
  menuPanel.setAttribute('id','menu-title')
  
  menu.appendChild(menuTitle);
  menu.appendChild(menuPanel);

  return menu;
  
};

function loadMenu() {
  const main = document.querySelector('main')
  main.textContent = '';
  main.appendChild(createMenu());
};

export default loadMenu;