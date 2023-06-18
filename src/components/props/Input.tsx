import React from "react";

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = (props: InputProps) => {

    const {value, handleChange} = props

    // OR
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    return (
        <div>
            <input type="text" value={value} onChange={handleChange}/>
        </div>
    )
}
