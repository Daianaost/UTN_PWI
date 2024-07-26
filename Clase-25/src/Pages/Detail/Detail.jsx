import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { eliminarProductoPorId, obtenerProductoPorId } from '../../helpers/productos'
const Detail = () => {
  const parametros = useParams()
const {handleDeleteProduct} = useGlobalContext()

  const {
    nombre,
    descripcion,
    precio,
    id,
    stock,
    codigo,
    categoria } = obtenerProductoPorId(parametros.producto_id)


  return (
    <div>
      <h1>{nombre}</h1>
      <br />
      <span>{categoria}</span>
      <br />
      <p>{descripcion}</p>
      <span> precio :{precio}</span>
      <br />
      <span><b>unidaddes disponibles</b>{stock}</span>
      <br />
      <button>comprar </button>
      <button onClick={() => handleDeleteProduct(id)}>eliminar</button>

    </div>
  )
}

export default Detail