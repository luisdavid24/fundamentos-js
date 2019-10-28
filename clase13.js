var david={
    nombre:"David",
    apellido:"Lopez",
    edad: 18,
    peso:75

}
console.log(`Al inicio del año ${david.nombre} pesa ${david.peso}KG`)
var INCREMENTO_PESO=0.2
var DIAS_DEL_ANO=365
const aumentarDePeso= persona => persona.peso+=INCREMENTO_PESO
const adelgazar= persona => persona.peso-=INCREMENTO_PESO
const comeMucho=() => Math.random()<0.3
const realizaDeporte=() => Math.random()<0.4
var dias=0

const META=david.peso-3
while (david.peso > META) {
    // debugger
    if(comeMucho()) {
        aumentarDePeso(david)
    }
    if (realizaDeporte()) {
        adelgazar(david)
    }
    dias +=1
}
console.log(`Pasaron ${dias} dias hasta que ${david.nombre} perdio peso`)