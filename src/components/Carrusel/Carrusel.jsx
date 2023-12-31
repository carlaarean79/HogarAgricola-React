import React from 'react'
import './Carrusel.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function Carrusel() {
  return (
    <div className='carrusel'>
        <Carousel className='img-carousel'>
    
        <img src="https://i0.wp.com/www.trenzaduriafraile.cl/wp-content/uploads/2023/02/pexels-photo-5371357-e1678822214918.jpeg?fit=1024%2C576&ssl=1" />
          

        <img  src="https://www.dhresource.com/0x0/f2/albu/g11/M00/4E/03/rBNaFV8WYhCAcBDUAAECSj9ToQs135.jpg" />

           
   
        <img src="https://elcuboarte.com/wp-content/uploads/2019/01/45621524_1786058168169155_4013447759003648000_n.jpg"  />
         
           
        <img src="https://scontent.fjni2-2.fna.fbcdn.net/v/t39.30808-6/311273276_1813250852344210_4995163391084133081_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGlzRQ2jSRxnUTVVLiiFVgwbnsWZe19LqhuexZl7X0uqGaDGKdhoK0-PljObQ7GLZ8r2xFnjKyY3QNFwOt9KPkz&_nc_ohc=gA7qcf11GXoAX8DtE8Q&_nc_ht=scontent.fjni2-2.fna&oh=00_AfD19expkXcB8KsHpsEe6g5pHi0XA0zPHyLrDGrmrU7olg&oe=6595F0B0" />
          
    </Carousel>
    </div>
  );
};

export default Carrusel