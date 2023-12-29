import React from 'react'
import './NavBarTalleres.css'
import { Link } from 'react-router-dom'

function NavBarTalleres() {
  return   (
    <div className='style-link-talleres'>
      <div className='link-crochet'>
        <Link to='crochet' style={{ textDecoration: 'none', fontSize: '0.7rem', color: 'black' }}>CROCHET</Link>
      </div>
      <div className='link-macrame'>
        <Link to='macrame' style={{ textDecoration: 'none', fontSize: '0.7rem',color: 'black' }}>MACRAME</Link>
      </div>
      <div className='link-porcelana'>
        <Link to='porcelana' style={{ textDecoration: 'none', fontSize: '0.7rem',color: 'black' }}>PORCELANA</Link>
      </div>
      <div className='link-Pintura-tela'>
        <Link to='pintura-tela' style={{ textDecoration: 'none', fontSize: '0.7rem',color: 'black' }}>PINTURA SOBRE TELA</Link>
      </div>
      <div className='link-pintura-madera'>
        <Link to='pintura-madera' style={{ textDecoration: 'none', fontSize: '0.7rem',color: 'black' }}>PINTURA SOBRE MADERA</Link>
      </div>
      <div className='link-reiclado'>
        <Link to='reiclado' style={{ textDecoration: 'none', fontSize: '0.7rem',color: 'black' }}>RECICLADO</Link>
      </div>
      <div className='link-peluqueria'>
        <Link to='peluqueria' style={{ textDecoration: 'none', fontSize: '0.7rem',color: 'black' }}>PELUQUERIA</Link>
      </div>
    </div>
  )
    {/* <div>
        <ul>
        <li>Crochet</li>
        <li>Macramé</li>
        <li>Porcelana</li>
        <li>Pintura sobre tela</li>
        <li>Pintura sobre madera</li>
        </ul>
    </div> */}
  
}

export default NavBarTalleres