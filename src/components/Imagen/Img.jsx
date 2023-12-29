import React from 'react'
import './Img.css'

function Img({props,id}){
  return (
    <>
            <div className='img-logo'>
               <img src={props} id={id} />
            </div>

    </>
  )
}

export default Img;