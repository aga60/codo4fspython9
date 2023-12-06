// V3 api_iss.js usando XMLHttpRequest() con salida al DOM
// Posición de la ISS (Estación Espacial Internacional)
// https://wheretheiss.at/
// {"name":"iss","id":25544,"latitude":49.492255668727,"longitude":106.28700574321,"altitude":421.20539622111,"velocity":27593.498872035,"visibility":"daylight","footprint":4513.5908983979,"timestamp":1701840594,"daynum":2460284.7290972,"solar_lat":-22.458358898545,"solar_lon":95.225227387962,"units":"kilometers"}

// url de la API
const url = 'https://api.wheretheiss.at/v1/satellites/25544'

// Obtener elemento contenedor
const container = document.getElementById('iss-data');

// Crear solicitud
const xhr = new XMLHttpRequest();

// Abrir y enviar solicitud
xhr.open('GET', url);
xhr.send();

// Manejar respuesta 
xhr.onload = function() {
  if (xhr.status === 200) {
    
    // Parsear datos JSON
    const response = JSON.parse(xhr.responseText);

    // Crear objeto Date a partir del timestamp
    const fecha = new Date(response.timestamp * 1000);
    const fechaLocal = fecha.toLocaleString()
    // console.log(fechaLocal);

    // Crear elemento para datos
    const template = document.createElement('div');

    // Crear elementos para cada dato
    const tim = document.createElement('p');
    const lat = document.createElement('p');
    const lon = document.createElement('p');
    const alt = document.createElement('p');
    const vel = document.createElement('p');

    // Agregar clase a cada elemento
    tim.classList.add('issdata');
    lat.classList.add('issdata');
    lon.classList.add('issdata');
    alt.classList.add('issdata');
    vel.classList.add('issdata');

    // Asignar valores
    tim.textContent = `Fecha: ${fechaLocal}`;
    // tim.textContent = `Hora: ${response.timestamp}`;
    lat.textContent = `Latitud: ${response.latitude}`;
    lon.textContent = `Longitud: ${response.longitude}`;
    alt.textContent = `Altitud: ${response.altitude} km`; 
    vel.textContent = `Velocidad: ${response.velocity} km/h`;

    // Agregar al template
    template.appendChild(tim);
    template.appendChild(lat);
    template.appendChild(lon);
    template.appendChild(alt);
    template.appendChild(vel);
    
    // Agregar template al contenedor
    container.appendChild(template);

  } else {
    console.log('Error'); 
  }
}


// // V2 - api_iss.js usando fetch() con salida al DOM
// const url = "https://api.wheretheiss.at/v1/satellites/25544"

// // Función asincrónica
// async function obtenerPosicion(){
//     try{
//         const response = await fetch(url)
//         const data = await response.json()

//         // console.log("Data", data);
//         // console.log("Data", typeof(data));
//         // console.log("altitude", data.altitude);

//         // Obtener elemento contenedor
//         const container = document.getElementById('iss-data');

//         // Crear objeto Date a partir del timestamp
//         const fecha = new Date(response.timestamp * 1000);
//         const fechaLocal = fecha.toLocaleString()
//         // console.log(fechaLocal);

//         // Crear elemento para datos
//         const template = document.createElement('div');

//         // Crear elementos para cada dato
//         const tim = document.createElement('p');
//         const lat = document.createElement('p');
//         const lon = document.createElement('p');
//         const alt = document.createElement('p');
//         const vel = document.createElement('p');

//         // Agregar clase a cada elemento
//         tim.classList.add('issdata');
//         lat.classList.add('issdata');
//         lon.classList.add('issdata');
//         alt.classList.add('issdata');
//         vel.classList.add('issdata');

//         // Asignar valores
//         tim.textContent = `Fecha: ${fechaLocal}`;
//         // tim.textContent = `Hora: ${response.timestamp}`;
//         lat.textContent = `Latitud: ${response.latitude}`;
//         lon.textContent = `Longitud: ${response.longitude}`;
//         alt.textContent = `Altitud: ${response.altitude} km`; 
//         vel.textContent = `Velocidad: ${response.velocity} km/h`;

//         // Agregar al template
//         template.appendChild(tim);
//         template.appendChild(lat);
//         template.appendChild(lon);
//         template.appendChild(alt);
//         template.appendChild(vel);
        
//         // Agregar template al contenedor
//         container.appendChild(template);

//     }catch(error){
//         console.log("Ocurrió un error", error);
//     }
   
// }

// //Invocar función
// obtenerPosicion()


// // V1 - api_consumo.js usando fetch() con salida a consola
// const url = "https://api.wheretheiss.at/v1/satellites/25544"

// // Función asincrónica
// async function obtenerPosicion(){
//     try{
//         const response = await fetch(url)
//         const data = await response.json()
        
//         console.log("Data", data);
//         console.log("Data", typeof(data));
//         console.log("altitude", data.altitude);

//     }catch(error){
//         console.log("Ocurrió un error", error);
//     }

   
// }

// //Invocar función
// obtenerPosicion()
