/* crear una funcion que dado 3 valores nos
 devuelva la sumatoria */
/* function calcularSumatoria(a,b,c){
    let sumatoria = a+b+c
    return sumatoria

}
console.log('es : ' + (calcularSumatoria(1,2,3)))*/
/* Mejora de codigo /estetica
function calcularSumatoria(a,b,c){
    return a+b+c
}
console.log('es : ' + (calcularSumatoria(1,2,3)))*/


/* Crear una funcion que reciba 2 numeros y siempre devuelva el mayor
mayor(7,2) 7 */
/* function numeroMayor(a, b) {
    if (a > b) {
        return a
    } else { return b }
}
console.log(numeroMayor(7, 2)) */



/* crear una funcion que se llame generarEmail que
reciba un nombreDeUsuario y retorne nombreDeUsuario + '@gmail.com'
generarEmail('pepe') => 'pepe@gmail.com' *
/
/* function generarEmail( nombreDeUsuario){
    return nombreDeUsuario +'@gmail.com'// cualquier dato concatenado un string = string
}
console.log(generarEmail +('dai'))*/

//-----------------------------------------------------
/* ARROW FUNCTION 
crear una funcion que dado 3 valores nos
// devuelva la sumatoria abreviada . la flecha es el return y sin {}*/
/* const calcularSumatoria = (a,b,c) => a+b+c

console.log(calcularSumatoria(1,2,3)) */

/* ej  de hoisting en function , las fucntion son como las var */
/* console.log(sumar(8,8))
function sumar(a , b){
    a = Number(a)
    b= Number(b)
    return a + b
} por eso las arrow son mas seguras . cuadno queremos declarar fc en arrow usamos const */


/* validar y solicitar string -> no simpre se puede abreviar */
const solicitar_validar_strin = () => {
    let stringSolicitado = prompt('ingrese un dato ')
    while (stringSolicitado || !isNaN(stringSolicitado)) {
        alert('error')
        stringSolicitado = prompt('ingrese un dato ')
    }
    return stringSolicitado
}



/* EN ARROW FUNCTION 
crear una funcion que dado 3 valores nos
 devuelva la sumatoria */

const calcularSumatoria = (a, b, c) => a+b+c


    console.log('es : ' + (calcularSumatoria(1, 2, 3)))

/* Crear una funcion que reciba 2 numeros y siempre devuelva el mayor
mayor(7,2) 7 */

const obtenerMayor=(a, b) =>{
    if (a > b) {
        return a
    } else { return b }
}
console.log(numeroMayor(7, 2))


/* crear una funcion que se llame generarEmail que
reciba un nombreDeUsuario y retorne nombreDeUsuario + '@gmail.com'
generarEmail('pepe') => 'pepe@gmail.com' */
const generarEmail = (nombreDeUsuario) => {
    nombreDeUsuario + '@gmail.com'// cualquier dato concatenado un string = string
}
console.log(generarEmail + ('dai'))