import loadHome from "./home";
//import contact
//import menu 

// Create Header
function makeHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  
  const restaurantName = document.createElement('h1');
  restaurantName.classList.add('restaurant-name');
  restaurantName.textContent = "Awesome Name!";

  header.appendChild(restaurantName);
  header.appendChild(makeNavBar());

  return header;
};
// Create Navbar
function makeNavBar(){
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  // Create Home Button 
  const homeBtn = document.createElement('button');
  homeBtn.classList.add("nav-btn");
  homeBtn.textContent = "HOME"
  
  homeBtn.addEventListener('click', () => {
    loadHome();
  });

  // Create Menu Button
  const menuBtn = document.createElement('button');
  menuBtn.classList.add("nav-btn");
  menuBtn.textContent = "MENU"

  // Create Contact Button
  const contactBtn = document.createElement('button');
  contactBtn.classList.add("nav-btn");
  contactBtn.textContent = "CONTACT"

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
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


function loadWeb() {
  const content = document.querySelector('#content');

  content.appendChild(makeHeader());
  content.appendChild(makeMain());
};
export default loadWeb;
