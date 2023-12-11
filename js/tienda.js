let products = [];
let total = 0;

let carrito =[];
let importe = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pay() {
    window.alert(products.join(", \n"));
}

function agregarAlCarrito(id, nombre, precio) {
    // Aquí puedes realizar las acciones que desees con los datos del producto
    console.log(`Agregado al carrito: ID ${id}, Nombre ${nombre}, Precio ${precio}`);
    carrito.push(nombre);
    importe = importe + precio;
    document.getElementById("checkout").innerHTML = `Pagar $${importe}`

}