import React from 'react'
import { Link } from 'react-router-dom'
import { productos } from '../../data/productsData'

const ProductCard = ({ producto }) => {
    const {
        nombre,
        descripcion,
        precio,
        id,
        stock,
        codigo,
        categoria } = producto
    

    return (
        <div>
            <h3>{nombre}</h3>

            <span>precio : ${precio}</span>
            <span><b>unidades disponibles</b> {stock}</span>
            <Link to={'detail/' + id}>ver detalle</Link>
        </div>
    )
}

export default ProductCard