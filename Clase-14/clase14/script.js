/* ARRAYS */
/* Lista de elementos ordenados 
indice/index marca la poscion que esta el elemento  
empieza desde 0
es como un tipo de objeto .  No s epuede usar punto en los arrays 
ej*/
/* const nombres = ['pepe', 'juan', 'ezequiel']//buena practica hacer declaracion con const 
console.log(nombres[1])

console.log('tengo ' + nombres.length + ' nombres') *///length cuantos nombres tengo en este caso

/* Metodos de array -cuando modifican el array original se llaman mutables
    .push() permite agregar un elemento al final del array y devuelve la nueva lenght ej*/
/* nombres.push('maria')
console.log(nombres) */
/*  unshift permite agregar un elemento al principio del array ej */
/* nombres.unshift('lola')

console.log(nombres) */
/* pop () elimina el ultimo elemento y lo retorna
shift()elemina el primer elemento y lo retorna  ej
nombres.pop()
console.log(nombres)  */

//solamente funciona con los array de string : 
/* .indexOf (elemetno buscado)devuelve la posicion de un string en el array  ej */
/* let poscionDeJuan = nombres.indexOf('juan')
console.log('la posicion de juan es ' + poscionDeJuan) */

/* .splice() Recibe 3 parametros el 1 es obliatorio es desde que posicion
 quiero empear a eliminar elementos luego cuanto quiero eliminar pero tamb retorna los elementos eliminados  */
//3 parametos : elementos a agregar 
//nombres.splice(1,1 )
/* nombres.splice(poscionDeJuan,1)
console.log(nombres) */

/* const nombres2 = ['maria' , 'pepe', 'ezequiel', 'elias']
let poscionDeEzequiel = nombres2.indexOf('ezequiel') */
/* console.log('la posicion de ezequiel es ' + poscionDeEzequiel) */
/* const listaElementosEliminados = nombres2.splice(poscionDeEzequiel,0, 'lucas')

nombres2.splice(poscionDeEzequiel , 1 )

console.log(nombres2)

console.log(listaElementosEliminados) */





/* const nombres3 = ['maria', 'pedro ', 'leonel ', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro'] */
//Eliminar a leonel
/* let posicionEzequiel = nombres3.indexOf('ezequiel')
console.log('la posicion de ezequiel es ' + posicionEzequiel)
const eliminarEzequiel = nombres3.splice(posicionEzequiel, 2)
console.log(nombres3) */


//eliminar a el anterior a lucas
/* let poscionAnteriorLucas = nombres3.indexOf('elias')
console.log('la posicion anterior a lucas es ' + poscionAnteriorLucas) */

//agregar antes de abril a 'sofia' sin eliminar a abril
/* const posicionAbril = nombres3.indexOf('abril')
console.log('la posicion de abril es ' + posicionAbril)
nombres3.splice(posicionAbril, 0, 'sofia')
console.log(nombres3)
 */

//si quiero saber si esta un elemento es :
/* console.log(nombres3.includes('leonel')) */

/* for(let index =0; index< nombres3.length; index = index + 1){
    console.log('hola ' + (nombres3[index]))
} */


/* 
Obtener cantidad total de caracteres de una lista de nombres:
Quiero que dado el array de nombres, por cada nombre sumes la cantidad de caracteres 
Al finalizar el recorrido decir 'la cantidad de caracteres es: {sumatoria caracteres}'


Ejemplo: ['pepe', 'juan'] //la sumatoria de caracteres es 8
*/
//---------------------------------------
//REHACER
/*  const nombres3 = ['maria', 'pedro ', 'leonel ', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro'] */
/* const sumatoriaCaracteres = 0
for(let index =0; index< nombres3.length; index = index + 1){
    sumatoriaCaracteres = sumatoriaCaracteres +nombres3[index].length

    
}
console.log(' la cantidad de caracteres es ' + sumatoriaCaracteres) 
 */

/* let caracteres = 0
for(let index = 0 ; index < nombres3.length; index = index + 1){

    caracteres = caracteres + nombres3[index].length
}
console.log('La cantidad de caracteres es: ' + caracteres) */
//-------------------------------------------------

// FOR OF
/* for(let nombre of nombres3){
    console.log(nombre)
} */
/* dado el siguiente array crear un segundo arrau llamdo mayusculas que sol ocontenga las palabaras en mayus */
/*
REVISAR NO ENTENDI 
const array = ['pepe', 'lucas', 'PEDRO', 'JuaN'];
let mayusculas = [];
for (let nombre of array) {
    if (nombre !== nombre.toLowerCase()) {
        mayusculas.push(nombre);
    }
}
console.log(mayusculas);
 */


/* const estaEnMinuscula = (str) => str == str.toLowerCase()
const tieneMaysucula = (str) => !estaEnMinuscula(str) */


/* Crear un array llamado samsung que contenga los productos que sean de la marca samsung */
const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
]
function buscarProducto(str) {
    const arrayProductos = []
    for (const producto of productos) {
        if (producto.title.includes(str)) {
            arrayProductos.push(producto)
        }

    }
    return arrayProductos
}

console.log(buscarProducto('samsung'))


