import { useState } from "react";
import Form from "./components/Form";
import MortgageResult from "./components/MortgageResult";
 

export default function App() {
  const [mortgage, setMortgage] = useState ([0,0])

  function handleMortgage(value:number[]){
    setMortgage(value)
  }

  return (
    <main className="font-Plus_Jakarta_Sans min-h-screen bg-slate100 lg:flex lg:justify-center lg:items-center">
      <section className="bg-white max-w-4xl mx-auto flex flex-col gap-9 lg:flex-row lg:rounded-xl lg:overflow-hidden">
      <Form handleMortgage={handleMortgage}/>
      <MortgageResult mortgage={mortgage} />
      </section>
      
       
    </main>
  )
}