
const btnComprarHTML = document.getElementById('btn-comprar')
const btnDecrementarHTML = document.getElementById('btn-decrementar')
const btnIncrementarHTML = document.getElementById('btn-incrementar')
const contadorHTML = document.getElementById('contador')

const renderizarContador = () => {
    contadorHTML.innerText = estadoContador
}



const incrementarContador = () => {
    estadoContador = estadoContador + 1
    renderizarContador()

}
btnIncrementarHTML.addEventListener('click', incrementarContador)

const decrementarContador = () => {
    estadoContador = estadoContador - 1
    renderizarContador()

    if (estadoContador === 0) {
        btnDecrementarHTML.hidden = true
        btnIncrementarHTML.hidden = true
        btnComprarHTML.hidden = false
        contadorHTML.innerText = ''
    }
}
btnDecrementarHTML.addEventListener('click', decrementarContador)

const btnComprar = () => {
    btnDecrementarHTML.hidden = false
    btnIncrementarHTML.hidden = false
    btnComprarHTML.hidden = true
    incrementarContador()
}
btnComprarHTML.addEventListener('click', btnComprar);

let estadoContador = 0


//ej > .style.display = none -> se oculta , y si pones otro display se agrega devuelta 