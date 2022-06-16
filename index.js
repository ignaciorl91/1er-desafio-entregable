let combustibleABordo = parseInt(prompt("Ingrese el combustible a bordo en litros"))
let cantidadPiernas = parseInt(prompt ("Ingrese el numero de tramos de la navegacion"))
let distanciaTotal = 0
let distancia
let tiempoTotal = 0 //en minutos
let limiteCombustible

// suma las distancias de cada pierna para saber la distancia total del vuelo
function sumaDistancias(){
    distancia = parseFloat(prompt("Distancia del tramo "+i + " en nm"))
    console.log(`La distancia del tramo ${i} es de ${distancia}nm`)
    distanciaTotal = distanciaTotal + distancia 
}

//se ingresa la velocidad a la cual se va a volar en cada tramo para calcular el tiempo por tramo el el tiempo total del vuelo
function velocidadTramo (){
    let velocidad = parseInt(prompt(`Ingrese la velocidad con respecto a la tierra (GS) del tramo ${i} en kt`))
    let tiempoTramo = distancia / velocidad * 60
    console.log(`En el tramo ${i} vas a tardar ${tiempoTramo} minutos a una velocidad de ${velocidad}kt`)
    tiempoTotal = tiempoTotal + tiempoTramo
}
// calcula el consumo de combustible 
const combustible = (tiempo, consumoPH)=> consumoPH * tiempo


// ejecuta las funciones en base a la cantidad de piernas que tenga el vuelo, determinadas en la variable cantidadPiernas
for (i=1; i<=cantidadPiernas;i++){
    sumaDistancias ()
    velocidadTramo()
}

let combustibleRequerido = combustible((tiempoTotal/60), 22.5)


// Condicional para alertar si hay o no suficiente combustible a bordo
if(combustibleABordo>combustibleRequerido){
    limiteCombustible = "Tenes suficiente combustible para este vuelo"
}
else{
        limiteCombustible=`NO TENES SUFICIENTE COMBUSTIBLE, tenes a bordo ${combustibleABordo}lts y necesitas al menos ${combustibleRequerido}lts `
    }
    
    // Una  vez que tenemos en la consola la informacion de cada pierna imprimimos los totales
    console.log(`La distancia total es de ${distanciaTotal}nm`)
    console.log(`El tiempo total es de ${tiempoTotal}minutos`)
    console.log(`El consumo total de combustible es de ${combustibleRequerido} litros`)
    
alert(limiteCombustible)