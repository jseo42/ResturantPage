import myImage from './hotdog.jpg';
function createHomePage() {
  const home = document.createElement('div');
  home.classList.add('home-container');


  const header = document.createElement('h1');
  header.textContent = "Feeling Hangry?";

  
  const hotdogPhoto = new Image();
  hotdogPhoto.src = myImage;
  
  
  
  const paragraph = document.createElement('p');
  paragraph.textContent = "Here at Jaybo's, we only serve the best food that quell the need of your survival instincts! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend lacus nec sem mollis, mattis iaculis orci dictum. Pellentesque in hendrerit neque, id vulputate lectus. Nam eleifend consectetur tristique."
  

  //add class list 

  home.appendChild(header);
  home.appendChild(paragraph);
  home.appendChild(hotdogPhoto);

  return home;
}

function loadHome() {
  const main = document.querySelector('main');
  main.textContent = '';
  main.appendChild(createHomePage());
}

export default loadHome;