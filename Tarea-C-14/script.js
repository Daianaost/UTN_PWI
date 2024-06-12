/* 

buscarProductos = ('noblex') 
[
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    }
]
buscarProductos('celular')
[
    {
        title: 'celular samsung 64gb',
        price: 4500,
        marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    }
]
 */
/* Crear una funcion que se llame buscarProducto(string)- recibira un string y por cada producto del array 
de productos verificara si el titulo tiene incluido el string buscado
Esta funcion debe retornar un array de productos */
/* function buscarProducto(string) { */
//NO ENTIENDO PORQUE NO RECONOCE A  .includes ni indexOf , y no anda -
/*     const resultados = [];
    for (const producto of productos) {

        if (producto.title.includes(string)) {
            resultados.push(producto);
        }
    }
    return resultados;
}

console.log(buscarProducto('noblex')) */

function buscarProducto(string) {
    const arrayProductos = []
    for (const producto of productos){
        if(producto.title.toLowerCase().includes(string.toLowerCase())){
arrayProductos.push(producto)
        }
    }
    return arrayProductos
} 
console.log(buscarProducto('celular'))