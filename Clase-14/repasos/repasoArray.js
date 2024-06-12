/* let nombre = 'pepe'
nombre = nombre.toUpperCase()
console.log(nombre) */

/* const nombres = ['maria','pepe','juan', 'lola']
let posicionDeJuan = nombres.indexOf('juan')
console.log('la posicion de juan es ' + posicionDeJuan)


nombres.splice(posicionDeJuan,1)
console.log(nombres) */


/* const nombres2 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias']
let posicionDeEzequiel = nombres2.indexOf('ezequiel')
console.log('la posicion de ezequiel es ' + posicionDeEzequiel)
//const listaEliminados = nombres2.splice(posicionDeEzequiel, 1)

console.log(nombres2)
console.log(listaEliminados)
//quiero agregar otro nombre antes de ezequiel: 

console.log('la posicion de ezequiel es ' + posicionDeEzequiel)
const listaEliminados = nombres2.splice(posicionDeEzequiel, 0, 'lucas')

console.log(nombres2)
console.log(listaEliminados) */





const nombres3 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']
//eliminar leonel
let posicionLeonel = nombres3.indexOf('leonel')
console.log('la posicion de leonel es ' + posicionLeonel)
const eliminarLeonel = nombres3.splice(posicionLeonel, 1)
console.log(nombres3)

//eliminar el anterior a lucas
const posicionAnteriorAlucas = nombres3.indexOf('elias')
console.log('la posicion anterior a lucas es : ' + posicionAnteriorAlucas)
const eliminarElias = nombres3.splice(posicionAnteriorAlucas, 1)
console.log(nombres3)

//agregar antes de abril a 'sofia' sin eliminar a abril
const posicionDeAbril = nombres3.indexOf('abril')
console.log('la posicion de Abril es : ' + posicionDeAbril)
const agregarSofia = nombres3.splice(posicionDeAbril, 0, 'sofia')
console.log(nombres3)

//bucles 

for (let index = 0; index < nombres3.length; index = index + 1) {
    console.log('hola ' + (nombres3[index]))
}


/* Obtener cantidad total de caracteres de una lista de nombres:
Quiero que dado el array de nombres, por cada nombre sumes la cantidad de caracteres 
Al finalizar el recorrido decir 'la cantidad de caracteres es: {sumatoria caracteres}' */

let caracteres = 0

for (let index = 0; index < nombres3.length; index = index + 1) {
    caracteres = caracteres + nombres3[index].length
}
console.log('la cantidad de caracteres es:' + caracteres)
// for of -> ejemplo 
/* dado el siguiente array crear un segundo array llamdo mayusculas que solo contenga las palabaras en mayus */

const array = ['pepe', 'lucas', 'PEDRO', 'JuaN'];

