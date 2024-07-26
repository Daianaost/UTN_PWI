let nombre = 'pepe'
const persona = {nombre: 'pepe'}
const doSomething = () => {
    console.log('algo')

}
//para llamar hay que exportar 1 forma :poner un export antes de la variable
//y en el app importar

//otra forma poner :    y en el app importarlo  con import{nombre,persona}from './funciones'
//export{persona}
//otra forma: 
//export default doSomething
//y en el app import doSomething from './funciones.js'
//doSomething()