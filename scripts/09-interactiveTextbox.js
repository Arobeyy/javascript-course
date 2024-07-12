function handelUsernameKeydown(event) {
  if(event.key === 'Enter') {
    printUsername();
  }
}

function printUsername() {
  /*
  let name = document.querySelector('.js-input-username').value;
  */
  const inputElement = document.querySelector('.js-input-username');
  let name = inputElement.value;

  let usernameElement = document.querySelector('.js-print-username');
  usernameElement.innerText = `Username: ${name}`;
};