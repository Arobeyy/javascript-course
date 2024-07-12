function handleCostKeydown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector(".js-cost-input");
  let cost = Number(inputElement.value);
  let total = document.querySelector(".js-total-cost");

  if (cost < 0) {
    total.classList.add('error-msg');
    total.innerHTML = 'Error: cost cannot be less then $0';
    return;
  }
  if (cost < 40 && cost > 0) {
    cost += 10;
  }

  total.innerHTML = `$${cost}`;
}