var Sacha={
    nombre:"sacha",
    apellido:"Lifszyc",
    edad:28
}
var Dario={
    nombre:"dario",
    apellido:"Susnisky",
    edad:27
}
function imprimirNombreEnMayusculas({nombre}){
    console.log(nombre.toUpperCase())
}
imprimirNombreEnMayusculas(Sacha)
imprimirNombreEnMayusculas(Dario)
imprimirNombreEnMayusculas( { nombre:"pepito"})