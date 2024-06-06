//TIPOS DE DATOS OBJETOS
// CREAR UN OBJETO LLAMADO PRODUCTO QUE TENGA LAS SIG PROP 
/* precio
nombre
marca
id
  descripcion */
//formato key value , para cada key hay un valor 


const producto = {
    precio: 200,
    nombre: 'buzo',
    marca: ' adidas',
    id: 222,
    descripcion: 'nuevo'
}
// acceder a las propiedades
console.log('el precio es' + producto['precio'])


let usuario = {

    //atributos = valores asociados a dicho atributo
    'edad': 19,
    'nombre': 'pepe',
    'apellido': 'suarez',
    // (otro objeto dentro de otro)
    'mejor amigo': {
        nombre: 'juan'
    }
}
//acceder al objeto del objeto 
console.log(usuario['mejor amigo']['nombre'])





/* Por consola mostrar un informe del usuario
'El usuario {nombre} {lastname} tiene las preferencias de usuario en:\nModo: {theme} \nLenguaje: {lang}' */
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
/* El usuario {name} {lastname} creo su cuenta en fecha {created_at} vive en {adress} y su telefono es {tel}' */
console.log('el usuario ' + user['name'] + user['lastname'] + 'tiene las preferenias en ' + '\n'
    + user['user preferences']['theme'] + '\n' + user['user preferences']['lang'] + '\n' + '  creo su cuenta en fecha : ' + user['user info']['created_at']
    + 'vive en ' + user['user info']['adress'] + ' y su telefono es ' + user['user info']['tel'])

//template string -mejorar . con comillas invertidas 
console.log (`
    el usuario ${user['name']} ${user['lastname']} tiene las preferencias en 
    modo : ${user['user preferences']['theme']} 
    lenguaje : ${user['user preferences']['lang']}
    `)

    //cambiar algun valor / reasignat
    user['name'] = 'juan'
    //agregar un valor /crear un propiedad
    user['isAdmin'] = false 
    //con notacion de puntos 
    console.log (`
        el usuario ${user.name} ${user.lastname} tiene las preferencias en 
        modo : ${user['user preferences'].theme} 
        lenguaje : ${user['user preferences'].lang}
        `)

        