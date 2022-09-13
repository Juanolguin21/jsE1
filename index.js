const pizzas = [
    {
        id: 1,
        nombre: "Napolitana",
        precio: 1100,
        ingredientes: ['Tomate en Rodaja','muzarella','aceitunas','ajo','Salsa de tomate'],
    },
    {
        id: 2,
        nombre: "Muzarella",
        precio: 500,
        ingredientes: ['muzarella','aceitunas','Salsa de tomate'],
    },
    {
        id: 3,
        nombre: "Especial",
        precio: 600,
        ingredientes: ['Morrones','muzarella','aceitunas','Jamon','Salsa de tomate'],
    },
    {
        id: 4,
        nombre: "Calabreza",
        precio: 1200,
        ingredientes: ['Longaniza en Rodaja','muzarella','aceitunas','Salsa de tomate'],
    },
    {
        id: 5,
        nombre: "Cuatro quesos",
        precio: 1300,
        ingredientes: ['Roquefort','muzarella','Provolone','Sardo','aceitunas','Salsa de tomate'],
    },
    {
        id: 6,
        nombre: "Verdura",
        precio: 1500,
        ingredientes: ['Espinaca','Queso Porsalut','aceitunas','Provolone'],
    },
];

// 1

const idinPares = pizzas.filter(pizza => pizza.id % 2 != 0)
 idinPares.forEach((pizza) => {
   console.log(`Es una pizza con id impar : ${pizza.nombre} `)
 });


//2

 const PizzasBaratas = pizzas.map( (pizza) => {
   return { ...pizza, precio: pizza.precio <= 600 }
 })
 console.log(PizzasBaratas)
 PizzasBaratas.forEach((pizza) => {
 if (pizza.precio == true) 
    console.log(`Con $600 te alcanza para comprar una pizza de ${pizza.nombre} `)
 });


 //3

 const pizzasconprecio = pizzas.filter(
       (pizza) => pizza.nombre && pizza.precio
     )
     pizzasconprecio.forEach((pizza) => {
      console.log(`la pizza ${pizza.nombre} tiene un costo de $${pizza.precio}`)
 });



// 4

const pizzaingredientes = pizzas.filter(
    (pizza) => pizza.nombre && pizza.ingredientes
)
    pizzaingredientes.forEach((pizza) => {
        console.log (`la pizza de ${pizza.nombre} tiene como ingredientes ${pizza.ingredientes}`)
    })