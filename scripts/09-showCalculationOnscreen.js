document.addEventListener('DOMContentLoaded', function() {
  let calculation = localStorage.getItem("calculation") || "";

  // Display the calculation on page load
  printCalculation();

  // Update the result of the calculation and call the save function
  window.updateFunction = function(value) {
    calculation += value;
    printCalculation();
    saveCalculation();
  };

  // Calculate the result
  window.calculateResult = function() {
    try {
      calculation = String(eval(calculation));
    } catch (e) {
      calculation = 'Error';
    }
    printCalculation();
    saveCalculation();
  };

  // Clear the calculation
  window.clearCalculation = function() {
    calculation = '';
    printCalculation();
    saveCalculation();
  };

  // Save the calculation in local storage
  function saveCalculation() {
    localStorage.setItem("calculation", calculation);
  }

  // Display the calculation on the page
  function printCalculation() {
    document.querySelector(".js-print-calculation").innerHTML = calculation;
  }
});
