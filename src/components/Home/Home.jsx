import React, { useContext } from 'react'
import './Home.css'
import Banner from '../Banner/Banner'
import Carrusel from '../Carrusel/Carrusel'
import TituloCards from '../Titulo/Titulo'
import CardsRecientes from '../Cards/Cards'
import { CardsContext } from '../../ContextCardsReciente/CardsContext'


function Home() {
  const tutorialReciente = CardsContext();
  console.log(tutorialReciente);
  return (
    <div className='home-style'>
    <Carrusel/>  
    <Banner titulo={'Hogar Agrícola'} subtitulo={'El hogar del bricolage'}/>
    <TituloCards texto={'AGREGADOS RECIENTEMENTE'}/>  
   
    <div className='container-cards'>
            {tutorialReciente.map((tutorial) => (
                <CardsRecientes key={tutorial.id} tutorial={tutorial} />

            ))}

        </div>

        
    </div>
  )
}

export default Home