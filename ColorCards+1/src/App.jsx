import React from 'react'
import ColorCard from './components/ColorCard'

function App() {


  const response = [
    {
      colors: ["black", "pink", "violet", "yellow"],

      likes: 50,
      fecha: '13 hours'
    },
    {
      colors: ["yellow", "blue", "pink", "yellow"],

      likes: 20,
      fecha: '2 days'
    },
    {
      colors: ["red", "blue", "pink", "yellow"],

      likes: 100,
      fecha: '10 hours'
    },
    {
      colors: ["blue", "red", "pink", "yellow"],

      likes: 78,
      fecha: '20 hours'
    }

  ]

  return (
    <>
      <div style={{ display: 'flex', }}>
        {
          response.map((obj) => {
            return (
              <ColorCard
                color1={obj.colors[0]}
                color2={obj.colors[1]}
                color3={obj.colors[2]}
                color4={obj.colors[3]}

                likes={obj.likes}
                fecha={obj.fecha}
                
              />
            );
          })
        }
      </div>

    </>
  )
}

export default App
