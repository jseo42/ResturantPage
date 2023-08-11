
function createMenu() {
  
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const menuTitle = document.createElement('h2');
  menuTitle.textContent = "Our Menu";

  const menuPanel = document.createElement('div');
  menuPanel.setAttribute('id','menu-title');
  
  menu.appendChild(menuTitle);
  menu.appendChild(menuPanel);
  menuPanel.appendChild(createPanel());
  
  return menu;
  
};
function createPanel() {
  const menuList = [
    {name: "Food Item #1", price: '$24.99', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
    {name: "Food Item #2", price: '$14.99', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
    {name: "Food Item #3", price: '$32.99', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
    {name: "Food Item #4", price: '$19.99', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
    {name: "Food Item #5", price: '$19.99', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
    {name: "Food Item #6", price: 'MP', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}
  ]

  const dishList = menuList.map(obj => [obj.name, obj.price, obj.desc]);
  let menuItems = document.createElement('div');
  menuItems.classList.add('menu-container');


  dishList.forEach(dish => {
    let dishElement = document.createElement('div');
    dishElement.classList.add('dish-element');

    let dishTitle = document.createElement('p');
    dishTitle.classList.add('dish-title');
    dishTitle.textContent = dish[0];
    dishElement.appendChild(dishTitle)

    let dishPrice = document.createElement('p');
    dishPrice.classList.add('dish-price');
    dishPrice.textContent = dish[1];
    dishElement.appendChild(dishPrice);

    let dishDesc = document.createElement('p');
    dishDesc.classList.add('dish-desc');
    dishDesc.textContent = dish[2];  
    dishElement.appendChild(dishDesc)

    menuItems.appendChild(dishElement);
  });

  return menuItems;

}


function loadMenu() {
  const main = document.querySelector('main')
  main.textContent = '';
  main.appendChild(createMenu());
};

export default loadMenu;