import { useState } from 'react'
import { CardsContainer } from './components/CardsContainer'
import { Filters } from './components/Filters'
import { Headers } from './components/Headers'



function App() {
  
  const [filter, setFilter] = useState('All') // 'All' - 'Active' - 'Inactive'


  return (
  <main className='light-gradient dark:dark-gradient min-h-screen flex flex-col items-center'>
    <section className='w-[343px] my-6 md:w-[672px] xl:w-[1170px]'>
       <Headers/>
       <Filters setFilter={setFilter}/>
       <CardsContainer filter={filter} />
    </section>
   
  </main>
      
    
  )
}

export default App
