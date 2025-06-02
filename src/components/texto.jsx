import fondo from '../assets/fondo.png'
import {FondoAnimacion} from './animaciones';
import {motion} from 'framer-motion';

export function Texto(){
    return(<>
     <img src={fondo} alt=""  className='m-auto w-full h-screen '/>
     <section className='absolute text-red-50 top-0  w-full h-full text-center '>
         <h1 className="mt-9 mb-5 font-extrabold text-4xl text-white">
            Hacete Socio de nuestro club
         </h1>
         <p className="m-auto xl:w-[80%] max-sm:w-[80%] text-left text-lg md:text-xl">
            Alienta más allá de la cancha, acompaña a nuestro club con tu pasión.
         </p>

     </section>
     </>)
}

export function Icons(){
   return(
      <>
<motion.span
  className="text-white absolute top-1/2 left-1/2 max-sm:left-1/3 text-9xl"
  {...FondoAnimacion}   //<-- motion.span con FondoAnimacion.
>
  ⚽️
</motion.span>



      </>
   )
}