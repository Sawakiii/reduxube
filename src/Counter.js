import React from "react"

// useSelectorでステートをプロップスに変換する。useDispatchはそのまま
import { useSelector, useDispatch } from "react-redux"


const Counter = () => {
    const {count, name} = useSelector(state => ({
        ...state.counterReducer,
        ...state.nameReducer
    }))

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
            <h3>your name is : {name}</h3>
        </>
    )
}


export default Counter







