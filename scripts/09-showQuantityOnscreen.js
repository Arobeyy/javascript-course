let cartQuantity = 0;

function updateCartQuantity(change) {
  const quantity = document.querySelector('.js-show-quantity');

  if (cartQuantity + change > 10) {
    alert('The cart is full');
    return;
  }

  if (cartQuantity + change < 0) {
    alert('Not enough items in the cart');
    return;
  }

  cartQuantity += change;
  quantity.innerText = `Cart quantity: ${cartQuantity}`;
 
  
}


  
