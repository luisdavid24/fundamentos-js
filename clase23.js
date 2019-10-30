class persona{
    constructor(nombre,apellido,altura) {
            this.nombre=nombre
            this.apellido=apellido
            this.altura=altura
    }
    salur(){
        console.log( `Hola, me llamo ${this.nombre} ${this.apellido}  ` )
    }
    soyAlto(){
        return this.altura>1.8
    }
}



function Desarrollador(nombre,apellido) {
    this.nombre=nombre
    this.apellido=apellido
}

Desarrollador.prototype.saludar=function(){
    console.log( `Hola, me llamo ${this.nombre} ${this.apellido} y soy un desarrollador o desarrolladora ` )
}

// var david=new persona("david","lopez",1.7)
// var pepe=new persona("pepe","armando",1.85)
// var camila=new persona("camila","maraca",1.58)

