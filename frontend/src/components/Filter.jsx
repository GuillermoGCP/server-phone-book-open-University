import React from 'react'

const Filter = ({ setFilter }) => {
    return (
        <div>
            Search by name:
            <input type='text' onChange={(e) => setFilter(e.target.value)} />
        </div>
    )
}

export default Filter
