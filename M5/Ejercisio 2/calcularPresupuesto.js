// // calcular Presupuesto //
// function calcularPresupuesto(ingresoTotal) {
    
//     // Calcular montos según el modelo 50-30-20
//     //Gastos necesarios = 50%
//     //Gastos opcionales = 30%
//     //Gastos de inversion = 20%
//     //Todos con respecto al Ingreso Total.

//     // Declaramos las constantes //
//     const gastosNecesarios = ingresoTotal * 0.5;
//     const gastosOpcionales = ingresoTotal * 0.3;
//     const ahorroInversion = ingresoTotal * 0.2;
  
//     // Mostrar los resultados
//     console.log("Monto para gastos necesarios: $" + gastosNecesarios.toFixed(2));
//     console.log("Monto para gastos opcionales: $" + gastosOpcionales.toFixed(2));
//     console.log("Monto para ahorro e inversión: $" + ahorroInversion.toFixed(2));
//     // la función .toFixed(2) es para redondear el numero a decimeles, en este caso a 2 decimales. //
//   }
  
//   // Ejemplo de uso del programa con un ingreso total de 1000
//   calcularPresupuesto(1000);

function calcularPresupuesto() {
    const ingresoTotal = parseFloat(document.getElementById('ingresoTotal').value);

    if (isNaN(ingresoTotal) || ingresoTotal <= 0) {
      alert('Por favor, ingrese un valor válido para el ingreso total.');
      return;
    }

    const gastosNecesarios = ingresoTotal * 0.5;
    const gastosOpcionales = ingresoTotal * 0.3;
    const ahorroInversion = ingresoTotal * 0.2;

    const resultadosHTML = `
      <h2>Resultados:</h2>
      <p>Monto para gastos necesarios: $${gastosNecesarios.toFixed(2)}</p>
      <p>Monto para gastos opcionales: $${gastosOpcionales.toFixed(2)}</p>
      <p>Monto para ahorro e inversión: $${ahorroInversion.toFixed(2)}</p>
    `;

    document.getElementById('resultados').innerHTML = resultadosHTML;
  }

  