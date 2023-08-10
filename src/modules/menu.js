
function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const menuTitle = document.createElement('h2');
  menuTitle.textContent = "Our Menu";

  const menuPanel = document.createElement('div');
  menuPanel.setAttribute('id','menu-title');
  


  menu.appendChild(menuTitle);
  menu.appendChild(menuPanel);
  

  return menu;
  
};

function createMenuArray(){
  const menuList = [
    {name: "Food Item", price: '$xx.xx', desc: 'Lorem'},
    {name: "Food Item", price: '$xx.xx', desc: 'Lorem'},
    {name: "Food Item", price: '$xx.xx', desc: 'Lorem'},
    {name: "Food Item", price: '$xx.xx', desc: 'Lorem'},
    {name: "Food Item", price: '$xx.xx', desc: 'Lorem'},
    {name: "Food Item", price: '$xx.xx', desc: 'Lorem'}
  ]

  const menuArray = menuList.map(obj => [obj.name, obj.price, obj.desc]);
  return menuArray 

};

function addElements(menuArray){
  
}



function loadMenu() {
  const main = document.querySelector('main')
  main.textContent = '';
  main.appendChild(createMenu());
};

export default loadMenu;