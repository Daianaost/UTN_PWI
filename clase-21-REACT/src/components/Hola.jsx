import React from "react"
import { Button } from "./Boton"
import Carta from "./Carta"

const Hola = (props) => {
    return (
        <div>
            <h1>hola</h1>
            <Button text={props.name}/>
            <Carta/>  
        </div>
      )
}
export default Hola