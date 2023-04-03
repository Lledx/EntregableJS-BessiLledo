var nombre = prompt("Ingresa tu nombre:");
var apellido = prompt("Ingresa tu apellido:");

console.log("Hola, " + nombre + " " + apellido + "!");

function calcular() {
    var subtotal = document.getElementById("subtotal").value;
    var iva = document.getElementById("iva").value;

    var total = subtotal * (1 + iva / 100);

    document.getElementById("total").value = total.toFixed(2);
}