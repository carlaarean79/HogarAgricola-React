import React, { useContext } from 'react'
import './Home.css'
import Banner from '../Banner/Banner'
import Carrusel from '../Carrusel/Carrusel'
import TituloCards from '../Titulo/Titulo'
import CardsRecientes from '../Cards/Cards'





function Home() {

  return (


    <div className='home-style'>
      <Carrusel />
      <Banner titulo={'Hogar Agrícola'} subtitulo={'El hogar del bricolage'} />
       <TituloCards texto={'AGREGADOS RECIENTEMENTE'} /> 
     
      <CardsRecientes/>
      

    </div>


  )
}

export default Home