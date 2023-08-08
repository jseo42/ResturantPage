function createHomePage() {
  const home = document.createElement('div');
  const header = document.createElement('h1');
  //add class list
  header.textContent = "Awesome Resaurant Name!";
  //add class list
  const image = document.createElement('p');
  image.textContent = "Use Awesome Image Here"
  //resize image

  const paragraph = document.createElement('p');
  paragraph.textContent = "Description Goes Here!"
  //add class list 

  home.appendChild(header);
  home.appendChild(image);
  home.appendChild(paragraph);

  return home;
}

function loadHome() {
  const main = document.querySelector('main');
  main.textContent = '';
  main.appendChild(createHomePage());
}

export default loadHome;