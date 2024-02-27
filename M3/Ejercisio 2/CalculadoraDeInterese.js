// Función para calcular el interés
function calcularInteres(capital, plazo, tasa) {
    return (capital * plazo * tasa) / 100;
  }
  
  // Función para generar el array con la información de los créditos
  function generarInfoCreditos(creditos) {
    let resultados = [];
  
    creditos.forEach(credito => {
      let interes = calcularInteres(credito.capital, credito.plazo, credito.tasa);
      resultados.push({
        nombre: credito.nombre,
        capital: credito.capital,
        plazo: credito.plazo,
        tasa: credito.tasa,
        interes: interes
      });
    });
  
    return resultados;
  }
  
  // Datos de ejemplo de créditos
  let creditos = [
    { nombre: "Plan A", capital: 1000, plazo: 12, tasa: 5 },
    { nombre: "Plan B", capital: 2000, plazo: 6, tasa: 8 },
    { nombre: "Plan C", capital: 1500, plazo: 9, tasa: 6.5 }
  ];
  
  // Generar información de los créditos
  let infoCreditos = generarInfoCreditos(creditos);
  
  // Mostrar resultados en la interfaz
  let resultadosDiv = document.getElementById('resultados');
  
  let tablaHTML = `
    <table class="tabla-creditos">
      <thead>
        <tr>
          <th>Nombre del Plan</th>
          <th>Capital</th>
          <th>Plazo</th>
          <th>Tasa</th>
          <th>Interés</th>
        </tr>
      </thead>
      <tbody>
  `;
  
  infoCreditos.forEach(credito => {
    tablaHTML += `
      <tr>
        <td>${credito.nombre}</td>
        <td>${credito.capital}</td>
        <td>${credito.plazo}</td>
        <td>${credito.tasa}</td>
        <td>${credito.interes}</td>
      </tr>
    `;
  });
  
  tablaHTML += `
      </tbody>
    </table>
  `;
  
  resultadosDiv.innerHTML = tablaHTML;
  