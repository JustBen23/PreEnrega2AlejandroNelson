/* -------------------------------------------------------------------------- */
/*                              Login del usuario                             */
/* -------------------------------------------------------------------------- */

//Variables para utilizar para el inicio de sesión
let usuario;
let password;

//Verificar que usuario se encuentra en login
let usuarioEnLogin;

//Administra las tareas que va a realizar cada uno de los usuarios
let tareaARealizar;
let actividadFinalizada;

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
            usuarioEnLogin = "admin";
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
            usuarioEnLogin = "user";
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


/* -------------------------------------------------------------------------- */
/*                             Carrito de compras                             */
/* -------------------------------------------------------------------------- */



//Lista de los productos
const listaProductos = [
    {id: 1, nombreP: "Samsung Evo 990 plus", precio: 150, categoria: "Tecnolgia", descuento: 0, stock: 5},
    {id: 2, nombreP: "Monitor MSI Optix G241", precio: 350, categoria: "Tecnolgia", descuento: 0, stock: 8},
    {id: 3, nombreP: "Lavadora Samsung MultiSteam™", precio: 500, categoria: "Electrohogar", descuento: 0, stock: 0},
    {id: 4, nombreP: "Nevera Siragon 7030", precio: 950, categoria: "Electrohogar", descuento: 0, stock: 7},
    {id: 5, nombreP: "Cama", precio: 200, categoria: "Dormitorio", descuento: 0, stock: 15},
    {id: 6, nombreP: "Armario", precio: 280, categoria: "Dormitorio", descuento: 0, stock: 3}
];

//Lista Carrito de compras
const carritoDeCompras = [
    {id: 1, nombreP: "Samsung Evo 990 plus", precio: 150, categoria: "Tecnolgia", descuento: 0, stock: 5},
    {id: 2, nombreP: "Monitor MSI Optix G241", precio: 350, categoria: "Tecnolgia", descuento: 0, stock: 8},
    {id: 3, nombreP: "Lavadora Samsung MultiSteam™", precio: 500, categoria: "Electrohogar", descuento: 0, stock: 0}
];

//Clase Productos
class Productos {
    constructor(lista) {
        this.list = listaProductos;
    } 

    añadirProductoLista(inventario) {
        let id = this.list.length + 1;
        inventario.id = id;
        
        //Producto por valor predeterminado no posee descuento
        inventario.descuento = 0;

        this.list.push(inventario);
    }

    eliminarProductoLista(producto) {

        let confirmacion = confirm(`¿Estás seguro que deseas eliminar este producto?
                                    \n- ` + producto.nombreP );
        if (confirmacion) {
            this.list.splice(this.list.indexOf(producto), 1);
        }
    }

    mostrarProductosLista() {
        console.table(this.list);
    }

    aplicarDescuento(id, descuento) {
        this.list[id].precio *= (descuento / 100);
        this.list[id].descuento += descuento;
    }

    cambiarPrecios(id, nuevoPrecio) {
        this.list[id].precio = nuevoPrecio;
        console.log(this.list[id]);
    }

    buscarProducto(nombre){
        const list = this.list.filter(item => item.nombreP.toLowerCase().includes(nombre.toLowerCase()));
        return list;
    }

    buscarCategoria(categoria) {
        const list = this.list.filter(item => item.categoria === categoria);
        return list;
    }
}

class Carrito {
    constructor(compras, inventarios) {
        this.compra = carritoDeCompras;
        this.inventario = listaProductos;
    }

    añadirProductoCarrito(producto) {
        if (producto.stock > 0) {
            this.compra.push(producto);
        } else {
            alert("Lo sentimos, no tenemos stock de ese producto :(")
        }
    }

    eliminarProductoCarrito(producto) {
        let confirmacion = confirm("¿Estás seguro que deseas sacar " + producto.nombreP + " de tu carrito?");
        if (confirmacion) {
            this.compra.splice(this.compra.indexOf(producto), 1);
        }
    }

    mostrarProductosCarrito() {
        console.table(this.compra);
    }

    totalDeCompra() {
        let suma = 0;
        for (let i = 0; i < this.compra.length; i++) {
            suma += this.compra[i].precio;
        }
        return suma;
    }
}

const prod = new Productos(listaProductos);

const carr = new Carrito(carritoDeCompras, listaProductos);

//Validación de qué usuario se encuentra logeado
if (usuarioEnLogin == "admin") {

    do {
        //Da a escoger al administrador que tareas realizar
        tareaARealizar = parseInt(prompt(`¿Que tarea deseas realizar? (Ingrese un número)
                                        \n 1. Ver productos registrados.
                                        \n 2. Registrar o eliminar productos.
                                        \n 3. Cambiar precios.
                                        \n 4. Agregar descuentos.`));

        if (tareaARealizar == 1) {
            //Productos registrados
            alert("Lista de productos generada, verifica tu consola!");
            prod.mostrarProductosLista();
            actividadFinalizada = confirm(`¿Deseas realizar alguna otra operación?`);

        } else if (tareaARealizar == 2) {

            let añadirOEliminar = parseInt(prompt(`¿Que deseas realizar? (Ingrese un número)
                                                    \n 1. Añadir producto.
                                                    \n 2. Eliminar producto.`));
            if (añadirOEliminar == 1) {

                let nombreProducto = prompt("Ingresa el nombre del producto el cual deseas añadir: ");
                let precioProducto = parseInt(prompt("Ingresa el precio del producto: "));
                let categoriaProducto = prompt("Ingresa la categoría del producto: ");
                prod.añadirProductoLista({nombreP: nombreProducto, precio: precioProducto, categoria: categoriaProducto});

            } else if (añadirOEliminar == 2) {
                
                let productoABorrar = parseInt(prompt("Ingresa el ID del producto que deseas eliminar: "));
                prod.eliminarProductoLista(productoABorrar);
            } else {
                alert("Opción invalida, intenta nuevamente");
            }
            
            actividadFinalizada = confirm(`¿Deseas realizar alguna otra operación?`);
        } else if (tareaARealizar == 3) {

            let productoACambiar = parseInt(prompt("Ingresa el ID del producto al cual le quieres cambiar el precio"));
            let precioActualizado = parseInt(prompt("Ingrese el nuevo precio del producto"));

            prod.cambiarPrecios(productoACambiar - 1, precioActualizado);

            actividadFinalizada = confirm(`¿Deseas realizar alguna otra operación?`);
        } else if (tareaARealizar == 4) {
            
            let productoADescontar = parseInt(prompt("Ingresa el ID del producto al cual le quieres descontar"));
            let valorDescontar = parseInt(prompt("¿Cuanto deseas aplicar de descuento?"));

            prod.aplicarDescuento(productoADescontar - 1, valorDescontar);

            alert("Se ha aplicado el descuento!")
            actividadFinalizada = confirm(`¿Deseas realizar alguna otra operación?`);
        } else {
            alert("Valor invalido, intente nuevamente colocando el número de la opción que desea tomar");
            actividadFinalizada = false;
        } 

    } while (actividadFinalizada == true);

} else if (usuarioEnLogin == "user") {
    
    do {
        //Da a escoger al usuario que tareas realizar
        tareaARealizar = parseInt(prompt(`¿Que deseas realizar? (Ingrese un número)
                                        \n 1. Buscar productos.
                                        \n 2. Administrar tu carrito.
                                        \n 3. Ver el costo total de tu carrito.`));
    
        if (tareaARealizar == 1) {
            let otro;

            alert("En tu consola aparecerán los productos disponibles!")
            prod.mostrarProductosLista();

            busquedaARealizar = parseInt(prompt(`¿Que deseas realizar? (Ingrese un número)
                                        \n 1. Buscar por producto.
                                        \n 2. Buscar por categoría.`));
                                        
            let valorBusqueda;

            if (busquedaARealizar == 1) {
                
                valorBusqueda = prompt("¿Que producto estás buscando el día de hoy?");
                do {
                    let compra = parseInt(prompt(`Si estás interesado en algún producto ingresa su ID para añadirlo a tu carrito`))
                    carr.añadirProductoCarrito(prod.buscarProducto(valorBusqueda)[compra - 1]);
                    console.log(prod.buscarProducto(valorBusqueda));
                    otro = confirm("¿Deseas añadir otro producto?")
                } while (otro);

            } else if (busquedaARealizar == 2) {

                valorBusqueda = prompt("¿Que categoría estás buscando el día de hoy?");
                do {
                    let compra = parseInt(prompt(`Si estás interesado en algún producto ingresa su ID para añadirlo a tu carrito`))
                    carr.añadirProductoCarrito(prod.buscarCategoria(categoria)[compra - 1]);
                    otro = confirm("¿Deseas añadir otro producto?")
                } while (otro);

            } else {
                alert("Valor errado, intenta nuevamente");
            }

            do {
                let compra = parseInt(prompt(`Si estás interesado en algún producto ingresa su ID para añadirlo a tu carrito`))
                carr.añadirProductoCarrito(listaProductos[compra - 1]);
                otro = confirm("¿Deseas añadir otro producto?")
            } while (otro);

            actividadFinalizada = confirm(`Deseas realizar alguna otra operación?`);

        } else if (tareaARealizar == 2) {

            alert("Aquí está los productos de tu carrito, verifica tu consola!");
            carr.mostrarProductosCarrito();

            let accionCarrito = confirm(`¿Deseas realizar alguna modificación en tu carrito?`);
            
            if (accionCarrito) {
                let agregarOEliminar = parseInt(prompt(`¿Que deseas realizar?
                                                \n 1. Agregar productos al carrito
                                                \n 2. Eliminar productos del carrito`));

                if (agregarOEliminar == 1) {
                    alert("Selecciona la opción de buscar productos en el inicio y busca que producto deseas agregar");
                } else if (agregarOEliminar == 2) {

                    let elementoAEliminar = parseInt(prompt("Ingresa el ID del producto que deseas eliminar"));
                    carr.eliminarProductoCarrito(carritoDeCompras[elementoAEliminar - 1]);
                    alert("Se retiró el producto de tu lista!") 
                }
            }
            actividadFinalizada = confirm(`Deseas realizar alguna otra operación?`);

        } else if (tareaARealizar == 3) {

            alert("El total del carrito es: " + carr.totalDeCompra() + "$");
            actividadFinalizada = confirm(`Deseas realizar alguna otra operación?`);

        } else {

            alert("Opción errada, intente nuevamente");

        }
    } while (actividadFinalizada == true);
}
