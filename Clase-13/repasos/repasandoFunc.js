/* crear una funcion que dado 3 valores nos
 devuelva la sumatoria */


/* function calcularSumatoria(num1, num2, num3) {
    let sumatoria = num1 + num2 + num3
    return sumatoria

}
//console.log(calcularSumatoria(1, 2, 3))

//mejora al codigo - estetica 
function calcularSumatoria(num1, num2, num3) {
    return num1 + num2 + num3
 */
//}


/* Crear una funcion que reciba 2 numeros y siempre devuelva el mayor */

function numeroMayor(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}
console.log(numeroMayor(2, 5))


/* crear una funcion que se llame generarEmail que
reciba un nombreDeUsuario y retorne nombreDeUsuario + '@gmail.com' */

function generarEmail(nombreDeUsuario) {

    return nombreDeUsuario + '@gmail.com'
}
console.log(generarEmail('daiana'))

//------------------------------------------------------------------------

//ARROW FUNTION -> no tiene hoisting a diferencia de las funtion 
const calcularSumatoria = (a, b, c) =>  a + b + c //retorno de manera directa se puede abreviar sin llaves y el return 


console.log(calcularSumatoria(1, 2, 3))