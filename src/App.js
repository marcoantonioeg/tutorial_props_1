import React from 'react'
import Saludo from './components/Saludo'
import Comentario from './components/Comentario'
const App = () => {
  const sujeto ={
    nombre: 'Marco',
    urlImg: 'https://via.placeholder.com/64',
    texto: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
}
  return (
    <div>App
        {/*Si es string el dato que paso va en comillas, si es un número, va en llaves */}
        <Saludo persona="Marco"/>
        <Saludo persona="Gaby" />
        <Saludo persona="Irma" />
        <Comentario sujeto={sujeto}/>
        
    </div>
    
  )
}

export default App