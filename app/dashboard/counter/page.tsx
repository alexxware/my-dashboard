'use client';
import { useState } from "react"

export default function CounterPage() {
  const [counter, setCounter] = useState(0);

  const handlerCounter = (numero: number) => {
    setCounter(counter + numero);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <span className="text-9xl">{counter}</span>

      <div className="flex">
        <button 
        onClick={() => {handlerCounter(1)}}
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2">
          +1
        </button>
        <button 
        onClick={() => {handlerCounter(-1)}}
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2">
          -1
        </button>
      </div>
    </div>
  )
}
