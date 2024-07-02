import React from 'react'
import {nombre} from './funciones.js'
import { Button } from './components/Boton.jsx'
import Carta from './components/Carta.jsx'
/* los archivos .jsx permiten la sintaxis JSX(html) */
function App() { /* tambien se puede hacer con arrow function  */
  return (
<> 
    <div>
      <h1>hola</h1>
      <Button text={'bton1'}/>
      <Carta/>  
    </div>
    <div>
    <h1>hola</h1>
    <Button text={'boton2'}/>
    <Carta/> 
  </div>
  </>
  )
}


export default App
