    // Datos de ejemplo: flujo de caja de los últimos 12 meses
    const flujoCaja = [
        { mes: "Enero", ingresos: 5000, egresos: 4000 },
        { mes: "Febrero", ingresos: 5500, egresos: 4200 },
        { mes: "Marzo", ingresos: 6000, egresos: 4500 },
        { mes: "Abril", ingresos: 5500, egresos: 4800 },
        { mes: "Mayo", ingresos: 5800, egresos: 4700 },
        { mes: "Junio", ingresos: 6200, egresos: 4900 },
        { mes: "Julio", ingresos: 6500, egresos: 5100 },
        { mes: "Agosto", ingresos: 6700, egresos: 5300 },
        { mes: "Septiembre", ingresos: 7000, egresos: 5500 },
        { mes: "Octubre", ingresos: 7200, egresos: 5800 },
        { mes: "Noviembre", ingresos: 7500, egresos: 5900 },
        { mes: "Diciembre", ingresos: 7800, egresos: 6000 }
      ];
  
      // Función para generar la tabla con los datos de flujo de caja
      function generarTablaFlujoCaja() {
        const tablaFlujoCaja = document.getElementById("tabla-flujo-cash");
  
        flujoCaja.forEach((mes) => {
          const fila = document.createElement("tr");
          fila.innerHTML = `
            <td>${mes.mes}</td>
            <td>${mes.ingresos}</td>
            <td>${mes.egresos}</td>
          `;
          tablaFlujoCaja.appendChild(fila);
        });
      }
  
      // Función para calcular el flujo de caja total
      function calcularFlujoCajaTotal() {
        let ingresosTotales = 0;
        let egresosTotales = 0;
  
        flujoCaja.forEach((mes) => {
          ingresosTotales += mes.ingresos;
          egresosTotales += mes.egresos;
        });
  
        const flujoTotal = ingresosTotales - egresosTotales;
        const resultado = document.getElementById("resultado");
        
        if (flujoTotal >= 0) {
          resultado.innerHTML = `<p class="text-success">El flujo de caja del último año generó ganancias de ${flujoTotal}.</p>`;
        } else {
          resultado.innerHTML = `<p class="text-danger">El flujo de caja del último año generó pérdidas de ${Math.abs(flujoTotal)}.</p>`;
        }
      }

      function analizarFlujoCaja(flujoCaja) {
        let ingresosTotales = 0;
        let egresosTotales = 0;
    
        // Calcular los ingresos y egresos totales
        flujoCaja.forEach((mes) => {
            ingresosTotales += mes.ingresos;
            egresosTotales += mes.egresos;
        });
    
        // Comparar los ingresos y egresos totales
        if (ingresosTotales > egresosTotales) {
            return 1; // Hay ganancias
        } else if (ingresosTotales < egresosTotales) {
            return -1; // Hay pérdidas
        } else {
            return 0; // Los ingresos son iguales a los egresos
        }
    }
    
    
  
      // Llamada a las funciones
      generarTablaFlujoCaja();
      calcularFlujoCajaTotal();