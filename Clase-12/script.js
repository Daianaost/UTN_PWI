/* WHILE 
bucle while es condicional , repite una accion /bloque de codigo mientras se cumple x condicion 
 */
/* let numero =prompt('numero')
while(!numero|| isNaN(numero)){
    alert('NO ES UN NUNMERO')
    numero=prompt('ingres un numero')
} */

/*ejercicio
Solicitar un string al usuario y validar que sea un string valido
Casos invalidos:
''
null
number (cualquier tipo de number excepto el NaN)*/
//principio de la programacion KISS -> keep it simple

/* let nombre = prompt('ingrese su nombre ')
while(!nombre || !isNaN(nombre)){
    alert('no es valido')
    nombre= prompt('ingrese un dato valido')
} */

/*FOR 
es un bucle que usamos cuando queremos
repetir un bloque de codigo una determinada cantidad de codigo 
 */
//principio de la prg DRY : dont repeat yourself
/*ejercicio 
di por consola 5 hola mundo  */
/* for(let iterador = 1; iterador<= 5; iterador +1){
    console,log('hola mundo ') */
/*1 declaro una variable (iterador ) y digo que 
empieza desde 1 y mientras que se < o igual a 5 (LIMITE) 
y que cada vez que termine incremente en 1 (ritmo de actualizacion)*/

/*ejercicio Solicitar 1 nombre y mostarlo por alerta 3 veces*/

/* for(let iterador = 1; iterador <= 3; iterador = iterador +1){
    let nombre = prompt('ingrese un nombre')
    alert(nombre)
}
 */
/*ACUMULACION 
EJ 
solicitar tres nombres y al final mostrarlos en lista  */
/* let ListaDeNombre = 'lista de nombres : '
for ( iterador = 1; iterador <= 3; iterador = iterador +1){
    let nombre = prompt('un nombre : ')
    ListaDeNombre = ListaDeNombre +'\n' +  nombre
}
alert(ListaDeNombre) */

/* primero solicitar al usuario una cantidad de repeticiones y luego unejercicio vamos a solicitar un numero 3 veces al finalizar mostrar el resultado de la sumatoria entre los 3 numeros
validar que el  dato sea un numero  */
/* let ListaDeNumeros = ''
let SumaDeNumeros = 0
for( let iterador  = 1; iterador <= 3; iterador = iterador +1  ){
    let numero = Number(prompt('ingrese un numero'))
    ListaDeNumeros = ListaDeNumeros + numero 
    SumaDeNumeros = SumaDeNumeros +\n +  numero
}
alert(ListaDeNumeros  )
alert(SumaDeNumeros) */





/* vamos a solicitar al usuario una cantidadDeRepeticiones
vamos a solicitar un numero la cantidad de repeticiones ingresada por el usuario, al finalizar mostrar el resultado de la sumatoria entre los 3 numeros
validar que el numero ingresado sea un numero, en caso de que no volver a solicitarlo
validar que la cantidadDeRepeticiones ingresada sea un numero, en caso de que no volver a solicitarlo */
/* let cantidadDeRepeticiones =prompt(' CANTIDAD DE REPETICIONES')
let suma = 0
while(!cantidadDeRepeticiones || isNaN(cantidadDeRepeticiones)){
    alert('no valido')
    cantidadDeRepeticiones= prompt('dato numerico')
}
for(let i =1; i <= cantidadDeRepeticiones; i = i +1){
    numero = prompt('un numero')
while(!numero || isNaN (numero)){
    alert('no valido')
    numero = prompt('darto numerico')
}
suma = suma + Number(numero)
}
alert('resultado' + suma) */




/* FUNCIONES ej 
declaracion de funcion : 
function saludar() {
    alert('hola )
} 
INVOCAR LA FUNCION
saludar () */

/*parametro ->(nombre)
function saludar(nombre){
    alert('hola a ' + nombre)
}
saludar ('pepe')
saludar ('juan') */
/*Crear una funcion llamada sumar, que reciba dos numeros y muestre por consola
 el resultadod de la suma de ambos numeros */
/* function sumar(num1 , num2){
    let sumar = num1 + num2
    console.log(sumar)
} */

/* 
Crear una funcion llamada calcularIva que reciba un precio y muestre el iva por consola de dicho precio
ej: calcularIva(100) => console: 21
function calcularIva(importe){
    return importe * 0.21
}

let iva = calcularIva(100)

alert(iva)
console.log(iva)

alert(calcularIva(200))
*/
/* RETORNO EN LAS FUNCIONES  = RETURN / CADA FUNCIKON TIENE SU TAREA 
function solicitarYValidarNumero (){
    let numero = prompt('ingrese un numero')
    while (!numero || isNaN(numero)) {
        alert("El dato debe ser un numero")
        numero = prompt("Ingrese el numero: ")
    }
    return Number(numero)
}



let cantidadDeRepeticiones = solicitarYValidarNumero()
let suma = 0

for (let iteracion = 1; iteracion <= cantidadDeRepeticiones; iteracion = iteracion + 1) {
    let numero = solicitarYValidarNumero()
    suma = suma + numero
}
alert("El resultado es: " + suma)  */