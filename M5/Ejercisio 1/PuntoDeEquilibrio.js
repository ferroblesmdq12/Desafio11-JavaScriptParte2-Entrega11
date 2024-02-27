// // Función para calcular el Punto de equilibrio
// function calcularPuntoEquilibrio() {
//     // Obtener los datos del usuario
        //Declaramos las variables con let 
//     let costosFijos = parseFloat(prompt("Ingrese los costos fijos:"));
//     let precioVenta = parseFloat(prompt("Ingrese el precio de venta por unidad:"));
//     let costosVariables = parseFloat(prompt("Ingrese los costos variables por unidad:"));

//     // Validar que los datos sean números
//     if (isNaN(costosFijos) || isNaN(precioVenta) || isNaN(costosVariables)) {
//         console.log("Por favor, ingrese números válidos.");
//         return;
//     }

//     // Calcular el Punto de equilibrio
//     let puntoEquilibrio = costosFijos / (precioVenta - costosVariables);

//     // Mostrar el resultado por consola
//     console.log("El Punto de Equilibrio es: " + puntoEquilibrio);
//     //Mostrar el resultado por cartel de alerta
//     alert("El Punto de Equilibrio es: " + puntoEquilibrio)
// }

// // Llamar a la función para realizar el cálculo
// calcularPuntoEquilibrio();


// Ahora hacemos utilizando las etiquetas de html utilizando document.getElemtById('nombre'etiqueta).value 
//para llamar a las etiquetas por su "id" y asignarle un valor por teclado.

function calcularPuntoEquilibrio() {
    // Ahora hacemos utilizando las etiquetas de html utilizando document.getElemtById('nombre'etiqueta).value 
   // para llamar a las etiquetas por su "id" y asignarle un valor por teclado.
   let costosFijos = parseFloat(document.getElementById('costosFijos').value);
   let precioVenta = parseFloat(document.getElementById('precioVenta').value);
   let costosVariables = parseFloat(document.getElementById('costosVariables').value);

   // Validamos para que los datos sean números //
   if (isNaN(costosFijos) || isNaN(precioVenta) || isNaN(costosVariables)) {
       document.getElementById('resultado').innerText = "Por favor, ingrese números válidos.";
       return;
   }

   // Cálculo del "Punto de Equilibrio" //
   let puntoEquilibrio = costosFijos / (precioVenta - costosVariables);
   document.getElementById('resultado').innerText = "El Punto de Equilibrio es: " + puntoEquilibrio.toFixed(2);
}

// Llamar a la función para realizar el cálculo
calcularPuntoEquilibrio();