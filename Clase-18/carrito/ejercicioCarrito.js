const productos = [
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
productosHTML.innerHTML = plantillaProductos
/*
Renderizar un carrito:
Un array de items llamado carrito
Cada item tiene el sig formato
object: --CREAR ARRAY DE OBJ LISTO 
    nombre: string
    id: numero positivo distinto de 0
    precio: numero positivo distinto de 0
    cantidad: numero positivo distinto de 0
    img: string con la direccion de alguna imagen EJ: https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$
Cada item mostrado en HTML va a tener este formato
---
Div
    h3: {nombre} id:#{id}
    img: el src tendra el valor {img} y el ancho en 100px
    span: Precio unitario: ${precio} x {cantidad} unidades
    span: Total: ${precio * cantidad}
*/

const arrayCarrito = [
    {
        nombre: 'computadora Samsung',
        id: 1,
        precio: 200000,
        cantidad: 2,
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    },
    {
        nombre: 'secador de pelo  Samsung',
        id: 2,
        precio: 30000,
        cantidad: 2,
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    },
    {
        nombre: 'celular Samsung',
        id: 3,
        precio: 3000,
        cantidad: 1,
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    }
]
const arrayCarritoHTML = document.getElementById('carrito')
let productosCarrito = ''

for (carrito of arrayCarrito) {
    productosCarrito = productosCarrito + `<div> 
    <h3> nombre: ${carrito.nombre} id: ${carrito.id}</h3>
    <img width='100px' src="${carrito.thumbnail}"/>
    <span> precio unitario :${carrito.precio} total : ${arrayCarrito.precio*arrayCarrito.cantidad} </span>
    </div>`
}
arrayCarritoHTML.innerHTML = productosCarrito











