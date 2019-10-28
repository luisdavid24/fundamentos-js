var david={
    nombre:"david",
    apellido:"lopez",
    altura:1.70,
    libros:144
}
var andres={
    nombre:"andres",
    apellido:"gomez",
    altura:1.85,
    libros:17
}
var laura={
    nombre:"laura",
    apellido:"castro",
    altura:1.60,
    libros:4
}
var eli={
    nombre:"eli",
    apellido:"mendoza",
    altura:1.65,
    libros:5
}
var edgar={
    nombre:"edgar",
    apellido:"montana",
    altura:1.90,
    libros:9
}
// const esAlta=(persona)=>persona.altura>1.8
const esAlta=({altura})=>altura>1.8
const esBaja=({altura})=>altura<1.61

var personas=[edgar,eli,laura,andres,david]
var personasAltas=personas.filter(esAlta)

// console.log(personasAltas)

var personasBajas=personas.filter(esBaja)
// console.log(personasBajas)

const pasarAlturaACms=persona=>{
    // persona.altura=persona.altura*100
    // persona.altura *=100
    return{
        ...persona,
        altura:persona.altura*100
    }
}

// const pasarAlturaACms=persona =>({
//     ...persona,
//         altura:persona.altura*100
// })

var personasCms=personas.map(pasarAlturaACms)
console.log(personasCms)

const reducer=(acum,{libros})=>acum+libros
var totalDeLibros=personas.reduce(reducer,0)
console.log( `Hay un total de ${totalDeLibros} libros entre todas las personas `)