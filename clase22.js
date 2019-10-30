function heredaDe(prototipoHijo,prototipoPadre){
    var fn= function(){}
    fn.prototype=prototipoPadre.prototype
    prototipoHijo.prototype= new fn
    prototipoHijo.prototype.constructor= prototipoHijo
}

function persona(nombre,apellido,altura) {
    this.nombre=nombre
    this.apellido=apellido
    this.altura=altura
        
}
persona.prototype.soyAlto= function(){
    return this.altura>1.8
}

persona.prototype.saludar=function(){
    console.log( `Hola, me llamo ${this.nombre} ${this.apellido}  ` )
}
function Desarrollador(nombre,apellido) {
    this.nombre=nombre
    this.apellido=apellido
}
heredaDe(Desarrollador,persona)
Desarrollador.prototype.saludar=function(){
    console.log( `Hola, me llamo ${this.nombre} ${this.apellido} y soy un desarrollador o desarrolladora ` )
}

// var david=new persona("david","lopez",1.7)
// var pepe=new persona("pepe","armando",1.85)
// var camila=new persona("camila","maraca",1.58)

