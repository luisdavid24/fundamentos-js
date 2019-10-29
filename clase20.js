function persona(nombre,apellido) {
    this.nombre=nombre
    this.apellido=apellido
    
}

persona.prototype.saludar=function(){
    console.log( `Hola, me llamo ${this.nombre} ${this.apellido}  ` )
}
var david=new persona("david","lopez")
david.saludar()