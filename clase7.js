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
function imprimirPersonaEdad(persona){
    var {nombre}=persona
    var {edad}=persona
    console.log( "hola, me llamo "+nombre+" y tengo "+edad+" años")
}
imprimirPersonaEdad(Sacha)
imprimirPersonaEdad(Dario)