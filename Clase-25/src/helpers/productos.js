import { json } from "react-router-dom"
import { productos } from "../data/productsData"

const guardarProductos = (productos) => {
  const productosJSON = JSON.stringify(productos)
  localStorage.setItem('productos', productosJSON)
}
export const obtenerProductoPorId = (id) => {

  return productos.find(producto => Number(producto.id) === Number(id))
}


/* una funcion que se llame obtener productos y
llama a los que estan en el local storage y 
si no estan los carga con la key productos y
  retorna , si estn los parseara y retornara
   */

export const obtenerProductos = () => {
  const productosGuardados = localStorage.getItem('productos')
  if (productosGuardados) {
    return JSON.parse(productosGuardados)
  } else {
    guardarProductos(productos)
    return productos
  }


}
/* 
crearProducto(producto) 
recibe un producto y lo agrega al array de productos guardado en localStorage
Retorna la lista modificada


obtenerProductoPorId(id) retornar el producto que cumpla con ese id
eliminarProductoPorId(id) elimina el producto que cumpla con ese id
*/


export const crearProducto = (nuevoProducto) => {
  const listaProductos = obtenerProductos()
  listaProductos.push(nuevoProducto)
  guardarProductos(listaProductos)
}
/* const obtenerProductoPorId = (id) => {
  const listProductos = obtenerProductos()
return productos.find(producto => Number(producto.id) === Number(id))

} */
export const eliminarProductoPorId = (id) =>{
  const listaProductos = obtenerProductos()
  const nuevaLista = listaProductos.filter(producto => Number(producto.id) !== Number(id))
  guardarProductos(nuevaLista)
  return nuevaLista
}
/* 
1-El detalle del componente Detail.jsx ahora debe venir de obtenerProductoPorId(id)

2-Van a crear un boton en la vista de Detail.jsx que se llamara 'eliminar' y al hacer click se ejecuta la funcion
eliminarProductoPorId(id)

3-La lista de productos que se mostrara en el componente Home.jsx sera dada a partir de la funcion obtenerProductos()

Crear una nueva screen/page/route llamada '/product/new' renderizara un formulario donde se le solicitara al usuario
informacion del producto:
nombre: string,
descripcion: string, mas de 10 caracteres,
precio: number psitivo distinto de 0,
stock: numero positivo distinto de 0,
codigo: string,
categoria: string,
thumbnail: string

TODAVIA no es necesario validaciones o capturas de dato, PERO si es necesario el Form en HTML
*/