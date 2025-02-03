import React from 'react'

const App = () => {
  return (
    <div>
      
     <div className="container bg-red-300 d-flex justify-items-center mb-6 p-4 mx-auto">
     <p class="text-black text-4xl">This text is 4xl</p>
     <p class="text-white text-3xl">Tailwind is 3xl</p>
     <p class="text-red-900 text-2xl">Tailwind is 2xl</p>
     <p class="text-green-900">Tailwind is awesome</p>
     <p class="text-zink-900">Tailwind is awesome</p>
     <p class="text-emerald-900">Tailwind is awesome</p>
     <p class="text-lime-900">Tailwind is awesome</p>
     </div>

  

   <div className="container mx-auto mb-6 justify-items-center">
   <p class="bg-teal-200">Tailwind is awesome</p>
     <p class="bg-blue-600 text-orange-300">Tailwind is awesome</p>
     <p class="bg-red-500">Tailwind is awesome</p>
     <p class="bg-zink-400">Tailwind is awesome</p>
     <p class="bg-emerald-400">Tailwind is awesome</p>
     <p class="bg-rose-900 text-white">Tailwind is awesome</p>
   </div>

  
    <div className="container mx-auto justify-items-center border border-blue-400">
    <p class="underline decoration-red-400">Tailwind is awesome</p>
    </div>


    


    </div>
  )
}

export default App