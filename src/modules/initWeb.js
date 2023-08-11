import loadHome from "./home";
import loadContact from "./contact";
import loadMenu from "./menu";

// Create Header
function makeHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  
  const restaurantName = document.createElement('h1');
  restaurantName.classList.add('restaurant-name');
  restaurantName.textContent = "JAYBO'S";

  header.appendChild(restaurantName);
  header.appendChild(makeNavBar());

  return header;
};
// Create Navbar
function makeNavBar(){
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  // Create Menu Button
  const menuBtn = document.createElement('button');
  menuBtn.classList.add("nav-btn");
  menuBtn.textContent = "MENU"

  menuBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active-btn')) return;
    activeBtn(menuBtn);
    loadMenu();
  });
  // Create Home Button 
  const homeBtn = document.createElement('button');
  homeBtn.classList.add("nav-btn");
  homeBtn.textContent = "HOME"
  
  homeBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active-btn')) return;
    activeBtn(homeBtn);
    loadHome();
  
  });

  // Create Contact Button
  const contactBtn = document.createElement('button');
  contactBtn.classList.add("nav-btn");
  contactBtn.textContent = "CONTACT"

  contactBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active-btn')) return;
    activeBtn(contactBtn);
    loadContact();
  });

  nav.appendChild(menuBtn);
  nav.appendChild(homeBtn);
  nav.appendChild(contactBtn);


  return nav;
};

// Create Main Body
function makeMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

function activeBtn(button) {
  const buttons = document.querySelectorAll('.nav-btn');
  
  buttons.forEach(button => {
    if (button !== this) {
      button.classList.remove('active-btn');
    }
  });
  button.classList.add('active-btn');
}

function loadWeb() {
  const content = document.querySelector('#content');

  content.appendChild(makeHeader());
  content.appendChild(makeMain());

  loadHome();
};
export default loadWeb;
