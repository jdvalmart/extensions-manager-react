import { Filters } from './components/Filters'
import {Headers} from './components/Headers'



function App() {
  
  

  return (
  <main className='light-gradient dark:dark-gradient min-h-screen flex flex-col items-center'>
    <section className='w-[343px] my-6'>
       <Headers/>
       <Filters/>
    </section>
   
  </main>
      
    
  )
}

export default App
