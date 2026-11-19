function validar() {

    // Obtener los datos escritos en el formulario
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    // Comprobar usuario y contrasena
    if (usuario == "admin" && contrasena == "12345") {

        alert("Bienvenido al sistema");
        window.location.href = "bienvenida.html";
        return false;

    } else {

        alert("Usuario o contrasena incorrectos");
        return false;

    }

}


function comprar() {

    let chanel = Number(document.getElementById("chanel").value);
    let guess = Number(document.getElementById("guess").value);
    let tote = Number(document.getElementById("tote").value);

    let total = (chanel * 1500) +
                (guess * 1200) +
                (tote * 800);

    let cantidad = chanel + guess + tote;

    if (cantidad <= 0) {

        alert("Selecciona al menos una bolsa.");

    } else {

        document.getElementById("resultado").innerHTML =
        "¡Gracias por tu compra!<br>" +
        "Bolsas seleccionadas: " + cantidad +
        "<br>Total a pagar: $" + total;

    }

}