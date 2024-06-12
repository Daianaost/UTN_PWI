//localStorage y sessionStorage



/* localStorage.setItem('username', nombre)
 */
/* console.log(String({nombre: 'pepe'}))


const user = {nombre: 'pepe'}

localStorage.setItem('user', JSON.stringify(user) )

const usuarioFromLocal = JSON.parse(localStorage.getItem('user'))

console.log(usuarioFromLocal.nombre) */


//JSON javascript object notation

//String escrito en formato JSON
'{"nombre": "pepe"}'

//parse permite trasnformar un string con notacion de objetos a un objeto
/* console.log(JSON.parse('{"nombre": "pepe"}'))
 */
//stringify

/* const producto = {
    nombre: 'tv samsung',
    precio: 700
}
let stringConNotacionDeObjeto = JSON.stringify(producto)

console.log(stringConNotacionDeObjeto) */


/* 
Mejorar la funcion login para que el objeto retornado lo guarde en localStorage
RESUELTO EN LA PARTE DE CLASE 15 DEBAJO DE RETURN USUARIO 
*/
/* Guardar este objeto en localstorage */





/* HISTORIAL
-agregarAlHistorial -mostrarHistorial/renderizarHistorial

ESTO NO ES FUNCION: Van a intentar obtener el historial del localStorage si nos 
devuelve null el getItem deberemos guardar un array vacio en el local storage
Vamos a crear una funcion llamada obtener historial que nos devuelva el array historial
(debe retornar un array) Vamos a crear en nuestro programa la funcion guardarEnHistorial
que reciba un objeto y lo guarde en el local storage dentro del array historial

EJEMPLO DE USO:

obtenerHistorial() => retornara un array historial [{}, {}] guardarEnHistorial(objeto)=> agrega al array guardado en localstorage el objeto recibido

Cada elemento del historial tendra el siguiente formato
{ accion: 'calculadora', operacion: '+'||'-', a: number, b: number, resultado: number, fecha: dd/mm/aaaa || '18|01/2020' }
Esto significa que cuando usemos guardarEnHistorial debemos guardar el objeto de la esa manera

Vamos a crear una funcion llamada renderizarHistorial

va a llamar al historial guardado y por cada elemento del historial vamos a
crear la sig plantilla 
Accion: {accion} Operacion: {operacion} Numeros: {a}, {b} Resultado: {resultado} fecha: {fecha}
y la acumularan en un string y al finalizar el recorrido mostraran el string por alerta

Para hacer el ejercicio recuerden previamente guardar algunas operaciones
en el historial y borren las anteriores

guardarEnElHistorial({ accion: 'calculadora', operacion: '+', a: 3, b: 3, resultado: 6, fecha: '18|01/2020' })*/



//AGREGAR A CLASE 15

const renderizarHistorial = () => {
    let listaHistorial = ''
    const historial = obtenerHistorial()
    for (const objeto of historial) {
        listaHistorial = listaHistorial + `
        accion: ${objeto.accion}
        operacion: ${objeto.operacion}
        numeros: ${objeto.a}, ${objeto.b}
        resultado: ${objeto.resultado}
        fecha: ${objeto.fecha}
        `
    }
    return listaHistorial
}

alert(renderizarHistorial())