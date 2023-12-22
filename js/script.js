//Variables para utilizar para el inicio de sesión
let usuario;
let password;

//Contador de intentos de contraseña
let errorEnPassword = 0;

//Función que indica si hay error en la contraseña
function passwordErrada() {
    alert("Contraseña errada, intenta nuevamente");
    errorEnPassword++;
}

//Ciclo utilizado para el conteo de intentos errados de contraseña
while (errorEnPassword <= 2) {
    usuario = prompt("Bienvenido! Ingresa tu nombre de usuario: ").toLowerCase();

    //Primero se checkea si el usuario es un cliente o el administrador
    if (usuario == "admin") {
        //Checkeo de contraseñas por parte del Admin
        password = parseInt(prompt("Bienvenido Admin, ingresa tu contraseña"));
        if (password == 12345) {
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
            passwordErrada();
        }
    } else if (usuario == "user") {
        //Checkeo de contraseñas por parte del cliente
        password = parseInt(prompt("Bienvenido cliente, ingresa tu contraseña"));
        if (password == 54321) {
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
            passwordErrada();
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