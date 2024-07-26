import React from 'react'
import Hola from './components/Hola.jsx'
import { Button } from './components/Boton.jsx'
import Carta from './components/Carta.jsx'
import RowArticle from './components/RowArticle.jsx'
/* los archivos .jsx permiten la sintaxis JSX(html) */
function App() { /* tambien se puede hacer con arrow function  */
  return (
<> 
  <Hola name='btn1'/>
  <Hola name='asdas'/>
  <RowArticle
    titulo={'lift-off: The MDN Curriculum launch'}
    fecha={'4  months ago '}
    direccionAutor={'developer.mozilla.org'}/>
</>
  )
}


export default App
