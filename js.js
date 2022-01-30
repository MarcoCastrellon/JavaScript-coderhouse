let edad = prompt("Ingrese su edad");

while (edad < 18 || " " ) {

    alert("Usuario menor de edad. Acceso denegado.")

    edad = prompt("Ingrese su edad")

}

if (edad >= 18) {
    alert("Usuario mayor de edad. Acceso permitido.")
}
