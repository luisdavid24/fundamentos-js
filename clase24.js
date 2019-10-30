class persona{
    constructor(nombre,apellido,altura) {
            this.nombre=nombre
            this.apellido=apellido
            this.altura=altura
    }
    saludar(){
        console.log( `Hola, me llamo ${this.nombre} ${this.apellido}  ` )
    }
    soyAlto(){
        return this.altura>1.8
    }
}
class Desarrollador extends persona{
    constructor(nombre,apellido,altura) {
        super(nombre,apellido,altura)
    }
    saludar(){
        console.log( `Hola, me llamo ${this.nombre} ${this.apellido} y soy un desarrollador o desarrolladora ` )
    }
}

function responderSaludo(nombre,apellido,esDeV){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDeV){
        console.log(`Ah mira, no sabía que eres desarrollador/a`)
    }
}

var david=new Desarrollador("david","lopez",1.7)
var pepe=new persona("pepe","armando",1.85)
var camila=new persona("camila","maraca",1.58)

david.saludar()
camila.saludar()
pepe.saludar()