var david={
    nombre:"david",
    apellido:"lopez",
    altura:1.70
}
var andres={
    nombre:"andres",
    apellido:"gomez",
    altura:1.75
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
var personas=[edgar,eli,laura,andres,david]
for (var i=0;i<personas.length;i++) {
    var persona=personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}metros `)
}