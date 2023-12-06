// api_clima.js usando XMLHttpRequest() con salida al DOM
// https://api.openweathermap.org/data/2.5/weather
// https://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&appid=d0337f207a64d7dd0f3a2cbc63f026f3&units=metric
// {"coord":{"lon":-58.3772,"lat":-34.6132},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09n"}],"base":"stations","main":{"temp":19.17,"feels_like":19.62,"temp_min":18.29,"temp_max":19.99,"pressure":1010,"humidity":95},"visibility":8000,"wind":{"speed":4.63,"deg":100},"clouds":{"all":100},"dt":1701845829,"sys":{"type":1,"id":8224,"country":"AR","sunrise":1701851621,"sunset":1701903332},"timezone":-10800,"id":3435910,"name":"Buenos Aires","cod":200}

const loc = 'Buenos Aires'
// console.log(loc);
const key = 'd0337f207a64d7dd0f3a2cbc63f026f3';
// console.log(key);
const urlw = 'https://api.openweathermap.org/data/2.5/weather';
// console.log(urlw);
const url3 = urlw+'?q='+loc+'&appid='+key+'&units=metric';
// console.log(url3);

// Obtener elemento contenedor
const container3 = document.getElementById('clima-data');

// Crear solicitud
const xhr3 = new XMLHttpRequest();

// Abrir y enviar solicitud
xhr3.open('GET', url3);
xhr3.send();

// Manejar respuesta 
xhr3.onload = function() {
  if (xhr3.status === 200) {
    
    // Parsear datos JSON
    const response = JSON.parse(xhr3.responseText);

    const temp = parseFloat(response.main.temp); 
    const temperatura = temp.toFixed(1);  // temp viene con 2 decimales, lo dejo con uno
    // console.log(temperatura);

    const humedad = parseFloat(response.main.humidity);
    // console.log(humedad);
    const presion = parseFloat(response.main.pressure);
    // console.log(presion);
    const localidad = response.name;
    // console.log(localidad);
    
    // Fecha y hora
    const tiempoUnix = parseFloat(response.dt);
    const tiempoEnMilisegundos = tiempoUnix * 1000;
    // Crear objeto Date a partir del timestamp
    const fecha = new Date(tiempoEnMilisegundos);
    const fechaLocal = fecha.toLocaleString()
    // console.log(fechaLocal);

    // Crear elemento para datos
    const template = document.createElement('div');

    // Crear elementos para cada dato
    const loc = document.createElement('p');
    const fec = document.createElement('p');
    const tem = document.createElement('p');
    const hum = document.createElement('p');
    const pre = document.createElement('p');

    // Agregar clase a cada elemento
    loc.classList.add('climadata');
    fec.classList.add('climadata');
    tem.classList.add('climadata');
    hum.classList.add('climadata');
    pre.classList.add('climadata');

    // Asignar valores
    loc.textContent = `Localidad: ${response.name}`;
    fec.textContent = `Fecha de actualizacion: ${fechaLocal}`;
    tem.textContent = `Temperatura: ${response.main.temp} ºC`;
    hum.textContent = `Humedad: ${response.main.humidity} %`;
    pre.textContent = `Presión: ${response.main.pressure} hPa`;

    // Agregar al template
    template.appendChild(loc);
    template.appendChild(fec);
    template.appendChild(tem);
    template.appendChild(hum);
    template.appendChild(pre);
    
    // Agregar template al contenedor
    container3.appendChild(template);

  } else {
    console.log('Error'); 
  }
}
