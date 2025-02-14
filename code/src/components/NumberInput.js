import React from "react"

const NumberInput = ({ number, setNumber, data }) => {

    const handleChange = (event) => {
        setNumber(event.target.value)
    }

    return (
        <div className="input-container">
            <label htmlFor="number">
                <h2>{data.label}</h2>
            </label>
            <input
                id="number"
                type="number"
                min="10"
                max="100"
                onChange={handleChange}
                value={number}
            />
        </div>
    )
}

export default NumberInput