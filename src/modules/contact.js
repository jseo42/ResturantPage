function createContactPage() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const number = document.createElement('p');
  number.textContent = "xxx.xxx.xxxx"
  
  const address = document.createElement('p');
  address.textContent = "X Y Z";

  // insert Photo or something else

  contact.appendChild(number);
  contact.appendChild(address);

  return contact;
  
}

function loadContact() {
  const main = document.querySelector('main');
  main.textContent = '';
  main.appendChild(createContactPage());  
}

export default loadContact;