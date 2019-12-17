import React from "react"

// useSelectorでステートをプロップスに変換する。useDispatchはそのまま
import { useSelector, useDispatch } from "react-redux"


const Counter = () => {
    const count = useSelector(state => state.count)

    const dispatch = useDispatch()

    const incrementCount = () => {
        dispatch({
            type: "INCREMENT_COUNT"
        })
    }
    const decrementCount = () => {
        dispatch({
            type: "DECREMENT_COUNT"
        })
    }

    return (
        <>
            <h2>Counter : {count}</h2>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
        </>
    )
}


export default Counter







