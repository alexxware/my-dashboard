'use client'
import { useState } from "react";

interface Props {
    value?: number;
}

export function CartCounter({ value = 10}: Props) {
    const [counter, setCounter] = useState(value);
    const handlerCounter = (numero: number) => {
        setCounter(counter + numero);
    }
    return (
        <>
            <span className="text-9xl">{counter}</span>

            <div className="flex">
                <button
                    onClick={() => { handlerCounter(1) }}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2">
                    +1
                </button>
                <button
                    onClick={() => { handlerCounter(-1) }}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2">
                    -1
                </button>
            </div>
        </>
    )
}
