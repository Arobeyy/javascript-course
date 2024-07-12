function printMsg () {
  const inputElement = document.querySelector('.js-input');
  
  let message = document.querySelector('.js-message');

  message.innerText = inputElement.value;

}