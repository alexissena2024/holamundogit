


// ARREGLOS CON MAP
// const numeros=[3,10,20,50]

// const dobles=numeros.map(function(datosNumeros){
// return datosNumeros *2;
// });
// console.log(numeros)
// console.log(dobles)

// ARREGLOS DE MAP CON OBJETOS

const carros=[
    {
        modelo:'ford Mustang',
        millaje:25000,
        motor:5.0,
        produccion:2017,
        precio:25000,
     },

    {
        modelo:'honda Accord', 
        millaje:1000,
        produccion:2035,
        precio:20000,
    },


    {
        modelo:'mini Cooper',
        millaje:15000,
        produccion:2005,
        precio:500000,


    },


];

// const modelos=carros.map((carro)=>carro.modelo)
// console.log(modelos)

// const preciosEuro=carros.map((carro)=>carro.precio * 0.85)
// console.log(preciosEuro)

const modeloCarros = carros.map((carro)=>
carro.produccion >= 2017 ? "ES AÑO 2017" : "NO ES EL AÑO"
);

console.log(modeloCarros)