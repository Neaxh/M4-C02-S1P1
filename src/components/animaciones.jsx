
/*animacion del fondo reutilizable*/
export const FondoAnimacion =  {
        initial: { opacity: 0, y: -50 },
        animate: { 
          opacity: 1, 
          y: [0, -10, 0] // Mueve el icono hacia arriba y abajo
        },
        transition: { 
          duration: 2,  // Duración total de la animación
          repeat: Infinity, // Se repite infinitamente
          repeatType: "mirror", // Hace que suba y baje de forma fluida
          ease: "easeInOut" // Suaviza el movimiento
        }
   };