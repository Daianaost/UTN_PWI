/* DOM  */
console.dir(document)// me muestra en formato objeto 

const titulo = document.getElementById('titulo')//espera recibir un string que tenfga el valor de id . si encuentra el elemento lo retorna como objeto 
/* console.log(titulo) */ //o con console.dir 

//propiedad innerText
console.dir(titulo.innerText)
//ejemplo de cambiar el texto / modifica desde js el innertext del titulo y modifica la pagina 
let nombre =prompt('ingresa tu nombre')
titulo.innerText = 'hola' + nombre


// se cambia el valor de html /la pagina misma 
titulo.innerText = 'hola'

const cajaProducto = document.getElementById('caja-producto')
console.dir(cajaProducto)

//prop innerHTML- recomend con comillas invertidas 
cajaProducto.innerHTML = `<h2>sub</h2`


//ejercicio 
/* 
const usuario = {
    nombre,
    apellido,
    direccion,
    edad
}

Mostarlo dentro de un div 

h2: Nombre completo: {nombre} {apellido}
span: Edad: {edad}
span: Direccion: {direccion}
*/
const usuario = {
    nombre: 'daiana',
    apellido: 'ostrovsky',
    direccion: 'hola1233',
    edad: 20
}

document.getElementById('usuario-caja')
usuarioCaja.innerHTML = `<h2> nombre completo: ${usuario.nombre}${usuario.apellido}</h2>
<span>direccion: ${usuario.direccion} edad: ${usuario.edad}</span>`
console.dir(usuarioCaja)










