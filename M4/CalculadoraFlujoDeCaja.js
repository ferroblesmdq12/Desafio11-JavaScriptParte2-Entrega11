document.getElementById("checkButton").addEventListener("click", function() {
  const cashFlowInput = document.getElementById("cashFlow").value;
  const cashFlowArray = cashFlowInput.split(",").map(Number);

  const result = checkProfitOrLoss(cashFlowArray);
  const resultElement = document.getElementById("result");

  if (result === -1) {
      resultElement.textContent = "La empresa ha tenido pérdidas.";
  } else if (result === 1) {
      resultElement.textContent = "La empresa ha tenido ganancias.";
  } else {
      resultElement.textContent = "Los ingresos son iguales a las ganancias.";
  }
});
