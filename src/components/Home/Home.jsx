import React from 'react'
import './Home.css'
import Banner from '../Banner/Banner'
import Carrusel from '../Carrusel/Carrusel'


function Home() {
  return (
    <div className='home-style'>
     <Carrusel/>  
    <Banner/>
        
    </div>
  )
}

export default Home