import React from "react"

import { useDispatch } from "react-redux"

const Name = () => {
    const dispatch = useDispatch()

    const handleUpdateName = (e) => {
        dispatch({
            type: "UPDATE_NAME",
            payload: e.target.value
        })
    }

    return (
        <>
            <input placeholder="Input your name" type="text" name="" onChange={handleUpdateName} />
        </>
    )
}


export default Name





