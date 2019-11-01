const API_URL="https://swapi.co/api/"
const PEOPLE_URL="people/:id"
// const lukeUrl=`${API_URL}${PEOPLE_URL.replace(":id",1)}`
const opts={crossDomain:true}

function obtenerPersonaje(id) {
    return new Promise((resolve,reject)=>{
        const url=`${API_URL}${PEOPLE_URL.replace(":id",id)}`
    $
        .get(url,opts,function(data){
            resolve(data)
        })
        .fail(()=>reject(id))
    })
    
    
        
}

obtenerPersonaje(1,function(personaje){
    console.log(`Hola soy ${personaje.name}`)

    
})

   

