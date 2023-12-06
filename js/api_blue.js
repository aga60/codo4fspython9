// api_blue.js usando XMLHttpRequest() con salida al DOM
// Cotizacion del dolar
// https://dolarapi.com/v1/dolares/blue
// {"moneda":"USD","casa":"blue","nombre":"Blue","compra":890,"venta":910,"fechaActualizacion":"2023-12-05T20:49:00.000Z"}

// url de la API
const url2 = 'https://dolarapi.com/v1/dolares/blue';

// Obtener elemento contenedor
const container2 = document.getElementById('blue-data');

// Crear solicitud
const xhr2 = new XMLHttpRequest();

// Abrir y enviar solicitud
xhr2.open('GET', url2);
xhr2.send();

// Manejar respuesta 
xhr2.onload = function() {
  if (xhr2.status === 200) {
    
    // Parsear datos JSON
    const response = JSON.parse(xhr2.responseText);

    // Crear objeto Date a partir del timestamp
    const fecha = new Date(response.fechaActualizacion);
    const fechaLocal = fecha.toLocaleString()
    // console.log(fechaLocal);

    // console.log(response.compra);
    // console.log(response.venta);

    // Crear elemento para datos
    const template = document.createElement('div');

    // Crear elementos para cada dato
    const fec = document.createElement('p');
    const com = document.createElement('p');
    const ven = document.createElement('p');

    // Agregar clase a cada elemento
    fec.classList.add('bluedata');
    com.classList.add('bluedata');
    ven.classList.add('bluedata');

    // Asignar valores
    fec.textContent = `Fecha de actualizacion: ${fechaLocal}`;
    com.textContent = `Compra: $${response.compra}`;
    ven.textContent = `Venta: $${response.venta}`;

    // Agregar al template
    template.appendChild(fec);
    template.appendChild(com);
    template.appendChild(ven);
    
    // Agregar template al contenedor
    container2.appendChild(template);

  } else {
    console.log('Error'); 
  }
}
