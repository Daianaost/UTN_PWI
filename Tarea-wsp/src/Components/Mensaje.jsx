import React from "react"
import './Mensaje.css'
const Mensaje = ({ author, content, fecha, estado }) => {
    const estadoEstilo = estado === 'visto' ? 'visto' : estado === 'entregado' ? 'entregado' : 'no-entregado'
    /* estadoEstilo se asigna un valor basado en el estado del mensaje (estado), utilizando un operador ternario. */

    const mensajes = author === 'author' ? 'mensaje-usuario ' : 'mensaje-otro'

    return (

        <div className={`mensaje ${estadoEstilo} ${mensajes}`}>
            <span className='author'>{author}</span>

            <div className='content'>{content}</div>
            <span className='fecha'>{fecha}</span>
            <span className='estado'>{estado}</span>

        </div>

    )
}




export default Mensaje