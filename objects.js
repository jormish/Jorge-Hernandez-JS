


function reservacion (nombre, age, pais) {
    this.nombre = nombre
    this.age = age 
    this.pais = pais
    
}

while(true) {
    const nombre = prompt ('Ingresa tu nombre')
    const people = prompt ('Cuantas personas?')
    const pais = prompt ('Ingresa tu pais')


    const reserve = new reservacion(nombre, people, pais)
    console.log(reserve)
    
    if(prompt('Apuntar a otra persona? si o no') == 'no') {
        break
        
    }
}
