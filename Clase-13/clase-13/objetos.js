// TIPOS DE DATOS OBJETOS
/* objeto -> let usuario = {
    (guardamos)
    atributos = valores asociados a dicho atributo
    'edad'' = 19,
    'nombre' = 'pepe',
        'apellido' = 'suarez'
            (otro objeto dentro de otro)
    'mejor amigo': {
        'nombre: 'juan',
    }
}
console.log(usuario) */
/* 
Crear un objeto llamado producto que 
tenga las sig propiedades
precio : number
nombre : string
marca : string
id : number
descripcion : string */
/* let producto = {
    'precio': 10,
    'nombre': 'buzo',
    'marca': 'adidas',
    'id': 10,
    'descripcion': 'nuevo'
} */
//abreviar sin comillas es valido en los atributos , auqneu originalmetne el atrib es un string 
/* siempre que se pueda es usar la abreviacion . Cuando no hacer abreviacion: 
 cuando hay un espcio /tilde /ñ/-
 como puedo evitar usar string usando ej precioUnitario / precio_unitario
 
 ya guarde los datos , como los llamo : 
tednria que acceder a las propiedades */
/* console.log('hola' + producto['nombre']) *///notacion de corchetes
/* se le llama key para cada key hay un valor  */
/*  si quiero acceder al objeto del objeto ejemplo 1
 console.log('hola' + usuatio  ['mejor amigo']['nombre])*/


const user = {
    name: 'pepe',
    lastname: 'suarez',
    'user preferences': {
        theme: 'dark-mode',
        lang: 'spanish'
    },
    'user info': {
        'created_at': '18/9/2005',
        'adress': 'av siempre viva 742',
        tel: '+22 1323-2122'
    }
}
/* 
Por consola mostrar un informe del usuario
'El usuario {nombre} {lastname} tiene las preferencias de usuario en:\nModo: {theme} \nLenguaje: {lang}'
*/
/* console.log('El usuario ' + user['name'] + ' ' + user['lastname'] +
    ' tiene las preferencias de usuario en: \nModo: ' +
    user['user preferences']['theme'] + '\nLenguaje: '
    + user['user preferences']['lang']) */
/* 'El usuario {name} {lastname} creo su cuenta en fecha {created_at} vive en {adress} y su telefono es {tel}' */
/* console.log('El usuario ' + user['name'] + user['lastname'] + 'creo la cuenta en :\nModo:' + user['user info']['created_at'] + 'su telefono es : '
    + user['user info']['tel']) */


/*comillas invertidas/ codigo mas ordenado */
/* console.log(` 
El usuario ${user['name']}${user['lastname']} tiene preferencias en
-modo : ${user['user preferences']['theme']}
-lenguaje:${user['user preferences'][lang]}
`

) */
/*reasignar el valor de la prop nombre  */
/* user['name'] = 'juan'
user.lastname = 'Gomez'
user['isAdmin'] = 'false'//creadno nueva propiedad
user.isAdmin = true  *///ahora es true
//no puedo usar notacion de puntos cuando la prop tiene - /ñ /espacio /tilde
/*pasar el mensje a notacion de puntos  */
console.log(`El usuario: ${user.name} ${user.lastName} tiene las preferencias en:
-Modo: ${user['user preferences'].theme}
-Lenguaje: ${user['user preferences'].lang}
`);

/* Crear una funcion llamada 
calcularIva(precio, tipo_factura) 
tipo_factura 'A', 'C', 'B'
En el caso de si la factura es C o B el precio tendra el iva incluido
Ejemplo
calcularIva(100, 'C' | 'B')
{
    precio: 121
    iva: 21
    precioConIva: 121,
    factura: 'B' | 'C'
}
En el caso de si la factura es A el precio tendra el iva discriminado
Ejemplo
calcularIva(100, 'A')
{
    precio: 100
    iva: 21
    precioConIva: 121,
    factura: 'A'
}
{
    precio: number
    iva: number
    precioConIva,
    factura:
}


*/
/* const calcularIva = (precio, tipo_factura) => {
    if (tipo_factura == 'C' || tipo_factura == 'B') {

}
} */