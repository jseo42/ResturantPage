function createContactPage() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const contactTitle = document.createElement('h2');
  contactTitle.classList.add('contact-title');
  contactTitle.textContent = 'Contact Us';

  const numberText = document.createElement('div');
  numberText.textContent = "Phone:"

  const number = document.createElement('p');
  number.textContent = "012.345.6789"
  
  const addressText = document.createElement('div');
  addressText.classList.add('address-title');
  addressText.textContent = "Location:"

  const address = document.createElement('p');
  address.textContent = "TBD";

  // insert Photo or something else
  contact.appendChild(contactTitle);
  contact.appendChild(numberText);
  contact.appendChild(number);
  contact.appendChild(addressText);
  contact.appendChild(address);

  return contact;
  
}


function loadContact() {
  const main = document.querySelector('main');
  main.textContent = '';
  main.appendChild(createContactPage());  
}

export default loadContact;