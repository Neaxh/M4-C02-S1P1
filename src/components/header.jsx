import { useState } from 'react';
import logo from '../assets/logo.png'



const lista = [
    {
        lugar: "Modelo",
        id:1
    },
    {
        lugar: "Información",
        id:2
    },
    {
        lugar: "Contacto ",
        id:3
    },
    {
        lugar: "Ubicación ",
        id:4
    }
]

/**/
export function Header() {
    return (
      <>
    <a href='/' className='max-w-24 sm:w-full md:relative max-sm:absolute  '><img src={logo} alt="logo de la web" /></a>
      {/*renderiza los botones*/}
      <ol className='hidden sm:block'>
      <MostrarLista/>
      </ol>
      </>
    );
  }
  
  /*boton generado */
  const Boton = ({ children }) => {
    return <button className="m-2 px-1 cursor-pointer hover:text-blue-400   transition delay-75 ease-in-out font-semibold max-sm:text-white">{children}</button>;
  };


  /*genero la lista usando el btn*/
  export function MostrarLista(){
    return (
        <>
      {lista.map((item)=>(    //<-- implementacion de map
        <Boton key={item.id}>{item.lugar}</Boton>
        ))}
        </>
    )
}

//(Menú de navegación desplegable)
export function Hamburguesa() {
    // Estado para controlar si el menú está abierto o cerrado
    const [abierto, setAbierto] = useState(false);
  
    return (
      <div className="relative sm:hidden  w-full text-right z-1">
        {/* Botón para abrir el menú */}
        <i
          className={`bi bi-list cursor-pointer text-3xl p-2  ${abierto ? "hidden" : "block"}`}
          onClick={() => setAbierto(true)}
        ></i>
  
        {/* Botón para cerrar el menú */}
        <i
          className={`bi bi-x-square-fill cursor-pointer text-3xl p-2  ${abierto ? "block" : "hidden"}`}
          onClick={() => setAbierto(false)}
        ></i>
  
        {/* Menú desplegable */}
        <div
  className={`absolute rig backdrop-blur-md bg-white/30 p-4 rounded-lg shadow-lg   flex flex-col 
  transition-all duration-300 w-full
  ${
    abierto ? "opacity-100 scale-100 left-0" : "opacity-0 scale-95 pointer-events-none"
  }`}
>
          <MostrarLista />
        </div>
      </div>
    );
  }
 

