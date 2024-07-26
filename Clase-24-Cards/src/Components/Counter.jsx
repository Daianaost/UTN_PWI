
import React, { useState } from 'react';

const Counter = ({ limit }) => {
    const [contador, setContador] = useState(0);

    const handleClickAddButton = () => {
        if (contador < limit) {
            setContador(contador + 1);
        }
    }

    const handleRemoveButton = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    return (
        <div className='contenedor-contador'>
            <span>{contador}</span>
            <button onClick={handleRemoveButton}>-</button>
            {contador < limit ? (
                <button onClick={handleClickAddButton}>+</button>
            ) : (
                <span>No se puede incrementar más de {limit}</span>
            )}
        </div>
    );
}

export default Counter;