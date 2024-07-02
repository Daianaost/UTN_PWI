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

/* const usuario = {
    nombre: 'Daiana',
    apellido: 'Ostrovsky',
    direccion: 'Avenida 1255',
    edad: 20
}
const usuarioCaja = document.getElementById('usuario-caja')
usuarioCaja.innerHTML = `<h2> nombre completo : ${usuario.nombre} ${usuario.apellido}</h2>
<span> edad : ${usuario.edad} direccion : ${usuario.direccion}</span>` */

/* const productos = [
    {
        nombre: 'tv samsung 32"',
        precio: 500,
        id: 1,
        descripcion: 'Neo QLED revoluciona los estándares de imágenes con Mini LED 40 veces más chicos que los convencionales. El resultado es un negro mucho más preciso y un brillo perfecto, aportando mucho más realismo al contenido visto. Distinguí excelentes detalles en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión. Distinguí detalles excelentes en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión.',
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    },
    {
        nombre: 'tv samsung 42"',
        precio: 1500,
        id: 2,
        descripcion: 'Neo QLED revoluciona los estándares de imágenes con Mini LED 40 veces más chicos que los convencionales. El resultado es un negro mucho más preciso y un brillo perfecto, aportando mucho más realismo al contenido visto. Distinguí excelentes detalles en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión. Distinguí detalles excelentes en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión.',
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    },
    {
        nombre: 'tv samsung 52"',
        precio: 2500,
        id: 3,
        descripcion: 'Neo QLED revoluciona los estándares de imágenes con Mini LED 40 veces más chicos que los convencionales. El resultado es un negro mucho más preciso y un brillo perfecto, aportando mucho más realismo al contenido visto. Distinguí excelentes detalles en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión. Distinguí detalles excelentes en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión.',
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    }
]
const productosHTML = document.getElementById('productos')
let plantillaProductos = ''
for (const producto of productos) {
    plantillaProductos = plantillaProductos + `
    <div>
        <h2>${producto.nombre}</h2>
        <img width='200px' src="${producto.thumbnail}"/>
        <span>Precio: ${producto.precio}</span>
        <p>${producto.descripcion}</p>
        <button>Comprar</button>
    </div>
    <hr>
    `
}
productosHTML.innerHTML = plantillaProductos */
/*
Renderizar un carrito:
Un array de items llamado carrito
Cada item tiene el sig formato
object:
    nombre: string
    id: numero positivo distinto de 0
    precio: numero positivo distinto de 0
    cantidad: numero positivo distinto de 0
    img: string con la direccion de alguna imagen EJ: https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$
Cada item mostrado en HTML va a tener este formato
Div
    h3: {nombre} id:#{id}
    img: el src tendra el valor {img} y el ancho en 100px
    span: Precio unitario: ${precio} x {cantidad} unidades
    span: Total: ${precio * cantidad}
*/
const carrito = [
    {
        nombre: 'Television LG ',
        id: 1,
        precio: 200000,
        cantidad: 2,
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    },
    {
        nombre: 'Celular Samsung ',
        id: 2,
        precio: 350000,
        cantidad: 3,
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    },
    {
        nombre: 'plachita de pelo GAMA ',
        id: 3,
        precio: 350000,
        cantidad: 1,
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    }
]
//la logica
// Obtener el elemento HTML donde se mostrará el carrito
const carritoHTML = document.getElementById("carrito")
// Inicializar la plantilla del carrito como una cadena vacía
let plantillaCarrito = ''
// Iterar sobre cada producto en el array 'carrito'
for (const producto of carrito) {
    // Agregar a la plantilla HTML para cada producto
    plantillaCarrito = plantillaCarrito + `<div><h3> ${producto.nombre} #${producto.id} </h3>
    <img width='200px' src="${producto.thumbnail}"/>
    <span> precio unitario ${producto.precio} cantidad : ${producto.cantidad}
    precio total : ${producto.precio * producto.cantidad}</span>
    </div>
    `
}
// Insertar la plantilla generada en el elemento HTML del carrito
carritoHTML.innerHTML = plantillaCarrito;


//----------------

//pero ahora hacemos una funcion renderizar
const renderizarCarrito = (carrito) => {
    const carritoHTML = document.getElementById("carrito")
    const totalHTML = document.getElementById('total')

    let total = 0
    let plantillaCarrito = ''
    for (const item of carrito) {
        total = total + (item.precio * item.cantidad)
        plantillaCarrito = plantillaCarrito + `
        <div>
            <h3> ${item.nombre} #${item.id} </h3>
            <img width = '100px' src="${item.thumbnail}"/>
            <br>
            <span> PRECIO UNITARIO:${item.precio} x ${item.cantidad}</span>
            <br>
            <span> TOTAL:${item.precio * item.cantidad} </span>
        </div>
        <hr>
        `
    }

    carritoHTML.innerHTML = plantillaCarrito
    totalHTML.innerText = 'TOTAL: $' + total
}

renderizarCarrito(carrito)


/* crear una funcion que se llame eliminarItemPorId que va a recibir un id y 
debe buscar en el array carrito y eliminar item con el id recibido , 
pero solamente eliminar si la cantidad es 1
 sino debemos reducir la cantidad en 1  */
/* tarea: crear una funcion llamada agregarItemAlCarrito(item)
buscar si en el carrito ya exite un elemento ese id . Si exite unicamente incrementar su cantidad en 1
sino existe van a agregar al carrito y crear una propiedad para ese item llamada cantidad Y Con el valor 1*/

const buscarItemPorId = (id) => {
    for (const item of carrito) {
        if (item.id === id) {
            return item
        }
    }
}

const buscarPosicionItemPorId = (id) => {
    for (let i = 0; i < carrito.length; i = i + 1) {
        const item = carrito[i]
        if (item.id === id) {
            return i
        }
    }
}



const eliminarItemPorId = (id) => {
    /* const itemBuscado = carrito.find((item) => {
        return item.id === id
    }) */

    /* const itemBuscado = buscarItemPorId(id) */
    const itemBuscado = carrito.find((item) => item.id === id)
    if (itemBuscado) {
        if (itemBuscado.cantidad === 1) {
            //Logica para eliminar item
            const posicionItem = carrito.findIndex((item) => item.id === id)
            carrito.splice(posicionItem, 1)
        }
        else {
            //Logica para decrementar en 1 la cantidad
            itemBuscado.cantidad = itemBuscado.cantidad - 1
        }
        renderizarCarrito(carrito)
    }
    else {
        console.error('Error: item con id inexistente')
    }


    console.log(itemBuscado)
}
/* eliminarItemPorId(2) */


const agregarItemAlCarrito = (producto) => {
    const itemBuscado = carrito.find((item) => item.id === producto.id)
    if (itemBuscado) {
        /* Logica para incrementar la cantidad */
        itemBuscado.cantidad = itemBuscado.cantidad + 1
        /* 
        Proceso interno: String(itemBuscado) + 1
                        '[Object object]' + 1
                        '[Object object]1'
        */
        /* Sugar syntax */
        /*   itemBuscado.cantidad += 1 //abreviacion de la linea 214 */
    } else {
        /* Logica para agregar el producto al carrito */
        producto.cantidad = 1
        carrito.push(producto)

    }
    renderizarCarrito(carrito)
    /* SIEMPRE QUE MODIFIQUE MI CARRITO DEBO RE-RENDERIZAR */

}

agregarItemAlCarrito({
    nombre: 'Honda Civic',
    id: 20,
    precio: 25000,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
}) 



