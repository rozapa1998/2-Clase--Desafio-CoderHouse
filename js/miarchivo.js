//Definicion de sus variables con sus respectivos condicionales
//Defino las variables y abajo sus condicionales para que lo haga por pasos


//Ingresar Nombre del Usuario
let nombre = String(prompt("Ingrese su nombre:"));

let valor1 = Number(prompt("Ingrese un numero del 1-50"));
if (valor1 > 50 ) {
    alert("El numero debe ser menor a 50!")
    let nombre = String(prompt("Ingrese nuevamente su nombre"))
    let valor1 = Number(prompt("Ingrese nuevamente un numero del 1-50"));
}

//Confirmacion de Usuario
const usuario2 = prompt("Ingrese su usuario:");

let usuario3 = prompt ("Ingrese nuevamente su usuario:");

if (usuario2 == usuario3) {
    alert("Usuario reiterado con exito")
}else{
    alert("Usuario incorrecto intente nuevamente")
    location.reload()
}

//Confirmacion de variables booleanas
let valor4 = String(confirm("Su nombre es " + nombre + "?"));
if(valor4 == true){
    alert("Bienvenido a la pagina web en blanco!")
}else{
    alert("Vuelve a ingresar los datos")
    location.reload()
}




