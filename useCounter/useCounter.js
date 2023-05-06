import { useState } from "react"

export const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState);

    const resetCounter = () => {
        setCounter(initialState)
    };

    const increaseCounter = (value = 1) => {
        setCounter((current) => current + value);
    };

    const decreaseCounter = (value = 1) => {
        setCounter((current) => current - value);
    };

    return {
        counter,
        increaseCounter,
        resetCounter,
        decreaseCounter
    };
}
