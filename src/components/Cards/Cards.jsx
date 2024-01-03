import React from 'react'




function CardsRecientes({tutorial}) {
  return (
    <div className='tutoriales' key={tutorial.id}>
      <h2>{tutorial.nombre}</h2>
      <img>{tutorial.img}</img>
    
    
    </div>
  )
}

export default CardsRecientes;