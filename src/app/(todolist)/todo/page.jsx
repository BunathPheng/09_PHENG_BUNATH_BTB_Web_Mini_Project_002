import CardComponent from '@/components/card'
import React from 'react'
export default  function page() {
  
  return (
    <>  
    <h1 className='font-bold mt-6'>HRD DESGIN</h1>
    <main className='grid grid-cols-3 gap-4 h-screen overflow-auto no-scrollbar '>
       <div className="flex flex-col overflow-auto no-scrollbar"> 
       <h1 className='mt-4'>Not Started</h1>
       <CardComponent/>
       <CardComponent/>
       <CardComponent/>
       </div>
       <div className="flex flex-col overflow-auto no-scrollbar "> 
       <h1 className='text-purple-400 mt-4'>In Progess</h1>
       <CardComponent/>
       <CardComponent/>
       <CardComponent/>
       </div>
       <div className="flex flex-col overflow-auto no-scrollbar "> 
       <h1 className='text-green-400 mt-4'>Finshed</h1>
       <CardComponent/>
       <CardComponent/>
       <CardComponent/>
       </div>
    </main>
    </>
  )
}
