
import { Header, Hamburguesa} from './components/header'
import {Texto, Icons} from './components/texto'


function App() {

  return (
    <>
    <header className='flex justify-around items-center flex-wrap'>
      
      <Header/>
     <Hamburguesa/>
    </header>
    <main className='relative z-0 '>
    <Texto/>

    <Icons/>
    
    </main>
    </>
  )
}

export default App
