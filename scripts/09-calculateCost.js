function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value) * 100;

  if(cost < (40 * 100)) {
    //cost = (cost + 10).toFixed(2);
    cost = cost + (10 * 100);
  }

  document.querySelector('.js-total-cost')
    .innerHTML = `$${cost / 100}`;
}