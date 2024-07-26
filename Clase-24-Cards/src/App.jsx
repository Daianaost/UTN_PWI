import React, { useState } from 'react'
import ColorCardList from './Components/ColorCardList/ColorCardList'
import { colorCardList } from './data'
import ColorCardForm from './Components/ColorCardForm/ColorCardForm'



function App() {

  /* 
  1-crear el boton para decrementar
  2- el decrementador no puede ser menos de cero 
  3- si el contador es 10 que no se muestre el boton de sumar y muestre
  un span 'no se puede incrementar mas de 10
  4- crear un componente llamado counter que recibe una prop llamada limit
y sera el numero limite que tendra el contador
    */
  /* a useState le paso el valor inicial  */
  /* aca paso el nuevo valor de mi estado */
  /*   const contadorLimit = 10 */
  /*      <Counter limit={contadorLimit} /> */

const [colorCardLista , setColorCardLista]= useState(colorCardList)
  const handleSubmit = (e, formValues) => {
    e.preventDefault()
    console.log('enviado', formValues)
    const colors = []
    for(let i =1; i<4; i = i+1){
      colors.push(formValues['color_' + i])

    }
    setColorCardLista([...colorCardLista, {colors:colors,likes :0 , id:5,time : formValues.time}])
  }


  return (
    <>
      <ColorCardList colorCardList={colorCardLista} />

      <ColorCardForm handleSubmit={handleSubmit} />
    </>
  )
}

export default App
