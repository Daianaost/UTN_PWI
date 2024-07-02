/* practica 
En html tendremos un numero que se mostrara en un span, 
dicho numero 
seria inicialmente 1
Debemos crear el numero mediante JS
Habra un boton <button>+</button>
Cuando ese boton sea clickeado el numero debera incrementarse en 1


Crear el boton para decrementar 
 */

const contadorHTNL = document.getElementById('contador')
const btnIncrementarHTML = document.querySelector('.btn-incrementar')
const btnDecrementarHTML = document.querySelector('.btn-decrementar')
const errorContadorHTML = document.querySelector('.error-contador')
let estadoContador = 1

const renderizarContador = () => {
    contadorHTNL.innerText = estadoContador

}

const renderizarError = (textoError) => {
    errorContadorHTML.innerText = textoError

}
const limpiarError = () => {
    if (errorContadorHTML.innerText) {
        renderizarError('')
    }
}
const incrementarContador = () => {
    estadoContador = estadoContador + 1
    limpiarError()
    renderizarContador()
}
const decrementarContador = () => {
    if (estadoContador > 1) {
        estadoContador = estadoContador - 1
        
        renderizarContador()
    }

    else {
        renderizarError('no se puede decrementar a 0')
    }
}


renderizarContador()
btnIncrementarHTML.addEventListener('click', incrementarContador)
btnDecrementarHTML.addEventListener('click', decrementarContador)




//tarea 