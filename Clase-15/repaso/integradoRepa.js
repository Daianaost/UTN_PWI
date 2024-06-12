/* ## Login
Debo tener una funcion llamada login que active toda la logica del login
logica de login:
Vamos a solicitar al usuario un email
Validarermos que el email sea un email
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(stringAValidar)
Ejemplo de uso
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test('pepe@gmail.com')
Vamos a solictar al usuario una password 
validar que tenga mas de 6 caracteres, que tenga almenos 1 mayuscula y que no sea '' o null
Si todo esta correcto dira por alerta('Usuario {email} registrado con exito') y retornara al usuario como objeto: */
/* Objetivo: Obtener la dirección de correo electrónico del usuario.
Acción: Pedir al usuario que ingrese su email.
 */
const validacionEmail = (email) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

const validacionPassword = (password) => {
    return password && password.length > 6 && password.toLowerCase() !== password
}

const login = () => {
    const usuario = {         /* Esta propiedad almacenará el email/passw. del usuario una vez que sea ingresado y validado. */
        email: null,
        password: null,
    }
    let email = prompt('ingrese un email')
    while (!validacionEmail(email)) {
        email = prompt('ingrese su email correctamente ')
    }
    usuario.email = email

    let password = prompt('ingrese una contraseña ')
    while (!validacionPassword(password)) {
        password = prompt('igrese una contraeña de 6 o mas caracteres y al menos una mayuscula')
    }
    usuario.password = password

    alert(`el usuario : ${usuario.email} se registro correctamente`)
    return usuario
}
/* console.log(login())*/
/*  */
const validacionOperacion = (operacion) => {
    const operacionesDisponibles = ['+', '-']
    for (let operacionDisponible of operacionesDisponibles) {
        if (operacionDisponible == operacion) {
            return true
        }
    }
    return false
}
const validacionNumero = (numero) => {
    return numero && !isNaN(numero)
}


const calculadora = () => {
    let operacion = prompt('ingrese una operacion')
    while (!validacionOperacion(operacion)) {
        operacion = prompt('ingrese nuevamente ')
    }
    let a = prompt('ingrese un numero ')
    while (!validacionNumero(numero)) {
        a = prompt('error')
    }
    let b = prompt('ingrese otro numero ')
    while (!validacionNumero(numero)) {
        b = prompt('error')
    }
    let resultado = 0
    if (operacion == '+') {
        resultado = Number(a) + Number(b)
    } else if (operacion == '-') {
        resultado = Number(a) - Number(b)
    }
    alert(`el resultado de ${a}${operacion} ${b} es : ${resultado}`)
}
