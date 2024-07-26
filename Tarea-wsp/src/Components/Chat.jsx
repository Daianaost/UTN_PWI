import React from 'react'
import Mensaje from './Mensaje'
import './Chat.css'

const Chat = ({ Data_mook }) => {
    return (
        <div className='chat'>
            {Data_mook.map((mensajes) =>
                <Mensaje
                    key={mensajes.id}
                    author={mensajes.author}
                    content={mensajes.content}
                    fecha={mensajes.fecha}
                    estado={mensajes.estado}
                    mensaje={mensajes.author === 'yo' ? 'mensaje-usuario ' : 'mensaje-otro'}
                />

            )}
            <div className='input-container'>
                <input 
                    type='text'
                    className='input-field'
                    placeholder='Escribe un mensaje...'
                />
                <button className='send-button'>
                    Enviar
                </button>
            </div>


        </div>

    )

}

export default Chat