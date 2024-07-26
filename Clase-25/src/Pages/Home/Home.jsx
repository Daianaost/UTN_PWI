import React from 'react'
import { ProductList } from '../../Components'

const Home = () => {
    const globalContextValues = useGlobalContext()
const {productos} = useGlobalContext()
    /*     crearProducto({nombre:'test'}) */
    return (
        <div>
            <h1>Elige nuestros productos </h1>
            <ProductList
                productos={productos} />
        </div>
    )
}

export default Home