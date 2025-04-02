let intentos = 0;
let claveCorrecta = "1234";
let claveIngresada;

while (intentos < 3) {
    claveIngresada = prompt("Ingrese la contraseña");

    if (claveIngresada === claveCorrecta) {
        alert("Acceso concedido");
        break;
    } else {
        alert("Contraseña incorrecta");
    }
    intentos++;
}

if (intentos === 3) {
    alert("Has agotado tus intentos");
}