const datos={
    "nombre":"cristiano",
    "apellidos": "roldaño",
    "edad":36,
    "equipos":["Soportin Club",
               "manchester",
               "real madrid",
               "Juventus"],
    "FAMILIA": {
                  "PAPA": "JUAN",
                  "MAMA": "MARIA",
                  "HERMANO": "JAIRO",
                  },
    greet() {
        return 'HELLO!!!'
    }       
 

}

const list=[
      {name:"ALEXIS",edad:35},
      {name:"CABEZAS",edad:42},
      {name:"JESUS",edad:47}


]


// console.log(datos.nombre)
// console.log(datos.apellidos)
// console.log(datos.edad)
// console.log(datos.equipos[3])
// console.log(datos.FAMILIA.MAMA)
 console.log(datos.greet())

// console.log(
//     JSON.stringify(datos)
// )

datos.list = list

let output = ''

for (let i = 0; i < list.length; i++) {
    output += `<li>${list[i].name} TIENE: ${list[i].edad}</li>`
  
}

console.log(document.getElementById('people').innerHTML = output)

console.log(JSON.stringify(datos))

