//eventos
//formas de asociar una funcion a un evento . la 3 es la mejor
/* const alertar = ()=>{
    alert('hola mundo') */
/* } */
//llamar elemento
/* const btn2HTML =document.getElementById('btn-2')
btn2HTML.onclick=alertar */

//llamar elemeetno por su clase
/* const btn3HTML = document.querySelector('.btn-3')
btn3HTML.addEventListener('click', alertar) */
//lista de los eventos = chequear en documentacion
/* btn3HTML.addEventListener('mouseover', alertar) */

/* ejercicio */


/* 
En html tendremos un numero que se mostrara en un span, dicho numero seria inicialmente 1
Debemos crear el numero mediante JS
Habra un boton <button>+</button>
Cuando ese boton sea clickeado el numero debera incrementarse en 1

*/
const renderizarContador = () => {
    contadorHTML.innerText = estadoContador

}
const incrementarContador = () => {
    estadoContador = estadoContador + 1
    renderizarContador()
}
const contadorHTML = document.getElementById('contador')
const btnIncrementarHTML = document.querySelector('.btn-incrementar')


let estadoContador = 1
renderizarContador()
btnIncrementarHTML.addEventListener('click', incrementarContador)


//--------------------------------------------------------

const formLoginHTML = document.getElementById('form-login')


 console.dir(formLoginHTML.password.value) //para acceder al valor del input
 console.dir(formLoginHTML.username) //el password /username viene de name del html 
//acceder cuando alguien me envia el formulario 
//en html creamos el boton de tipo submit y en js asociamos un evento:
//el evento submit genera que se recargue la pagina , para evitar esto , entender que puedo capturar el evento por parametros
const handlelogin =  (evento)=> {
    evento.preventDeFault() //es un metodo del objeto  evento que previene el comportamiento por defecto de un evento 
    console.log('formulario enviado') 
    console.dir(formLoginHTML.password.value)
    console.dir(formLoginHTML.username)

}   //handle se le pone cuando una funcion esta asociada a un evento 


formLoginHTML.addEventListener('submit',handlelogin)    /* formLoginHTML.onsubmit  */





