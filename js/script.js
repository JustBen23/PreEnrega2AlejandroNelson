//Variables para utilizar para el inicio de sesión
let usuario;
let password;

//Los usuarios para poder realizar el ingreso a la página
let usuarioAdmin = "admin";
let usuarioCliente = "user";

//La contraseña de los usuarios
let passwordAdmin = 12345;
let passwordCliente = 54321;

//Contador de intentos de contraseña
let errorEnPassword = 0;

//Ciclo utilizado para el conteo de intentos errados de contraseña
while (errorEnPassword <= 2) {
    usuario = prompt("Bienvenido! Ingresa tu nombre de usuario: ").toLowerCase();
    //Primero se checkea si el usuario es un cliente o el administrador
    if (usuario == usuarioAdmin) {
        //Checkeo de contraseñas por parte del Admin
        password = parseInt(prompt("Bienvenido Admin, ingresa tu contraseña"));
        if (password == passwordAdmin) {
            //Ingreso correcto de usuario y contraseña, login exitoso
            alert("Bienvenido Admin, espero tengas una buena gestión");
            break;
        } else {
            //Error en la contraseña por 3ra vez
            if (errorEnPassword == 2) {
                errorEnPassword++;
                break;
            }
            //Error en la contraseña, se reinicia el ciclo
            alert("Contraseña errada, intenta nuevamente");
            errorEnPassword++;
        }
    } else if (usuario == usuarioCliente) {
        //Checkeo de contraseñas por parte del cliente
        password = parseInt(prompt("Bienvenido cliente, ingresa tu contraseña"));
        if (password == passwordCliente) {
            //Ingreso correcto de usuario y contraseña, login exitoso
            alert("Bienvenido cliente, espero tengas buen día");
            break;
        } else {
            //Error en la contraseña por 3ra vez
            if (errorEnPassword == 2) {
                errorEnPassword++;
                break;
            }
            //Error en la contraseña, se reinicia el ciclo
            alert("Contraseña errada, intenta nuevamente");
            errorEnPassword++;
        }
    } else { 
        //En caso de no ser ninguno, el usuario se encuentra errado
        alert("Nombre de usuario errado, intenta nuevamente");
    }
}

//Mensaje enviado en caso de que la contraseña sea enviada mal 3 veces
if (errorEnPassword == 3) {
    alert("Has realizado más de 3 intentos, recarga la página e intenta nuevamente");
}