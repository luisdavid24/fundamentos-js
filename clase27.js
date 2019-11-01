const API_URL="https://swapi.co/api/"
const PEOPLE_URL="people/:id"
// const lukeUrl=`${API_URL}${PEOPLE_URL.replace(":id",1)}`
const opts={crossDomain:true}

function obtenerPersonaje(id, callback) {
    const url=`${API_URL}${PEOPLE_URL.replace(":id",id)}`
    
    $.get(url,opts,function(persona) {
        console.log(`Hola soy ${persona.name}`)
    })
    if(callback){
        callback()
    }
}

obtenerPersonaje(1,function(){
    obtenerPersonaje(2,function(){
        obtenerPersonaje(3,function(){
            obtenerPersonaje(4,function(){

            })
        })
    })
})
