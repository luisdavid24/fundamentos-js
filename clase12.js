var david={
    nombre:"David",
    apellido:"Lopez",
    edad: 18,
    peso:75

}
console.log(`Al inicio del año ${david.nombre} pesa ${david.peso}KG`)
var INCREMENTO_PESO=0.2
const aumentarDePeso= persona => persona.peso+=INCREMENTO_PESO
const adelgazar= persona => persona.peso-=INCREMENTO_PESO

for (var i=1; i<=365;i++) {
    var random=Math.random()
    if (random<.25) {
        aumentarDePeso(david)
    }
    else if(random<.5) {
        adelgazar(david)
    }
}

console.log(`Al final del año ${david.nombre} pesa ${david.peso.toFixed(1)}KG`)