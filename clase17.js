var david={
    nombre:"david",
    apellido:"lopez",
    altura:1.70
}
var andres={
    nombre:"andres",
    apellido:"gomez",
    altura:1.85
}
var laura={
    nombre:"laura",
    apellido:"castro",
    altura:1.60
}
var eli={
    nombre:"eli",
    apellido:"mendoza",
    altura:1.65
}
var edgar={
    nombre:"edgar",
    apellido:"montana",
    altura:1.90
}
// const esAlta=(persona)=>persona.altura>1.8
const esAlta=({altura})=>altura>1.8
const esBaja=({altura})=>altura<1.61

var personas=[edgar,eli,laura,andres,david]
var personasAltas=personas.filter(esAlta)

console.log(personasAltas)

var personasBajas=personas.filter(esBaja)
console.log(personasBajas)