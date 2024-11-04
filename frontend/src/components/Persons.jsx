import React from 'react'
import personsService from '../services/personsService'

const Persons = ({ filteredPersons, setPersons }) => {
    const deleteHandler = (id) => {
        const userResponse = window.confirm(
            'Are you sure to delete this entry?'
        )
        if (!userResponse) return
        personsService
            .deleteEntrie(id)
            .then((response) => {
                console.log(`Entrie with id ${response.id}, deleted`)
                setPersons((prevData) =>
                    prevData.filter((person) => person.id !== id)
                )
            })
            .catch((error) => {
                console.error('Error deleting data from server:', error)
            })
    }
    return (
        <>
            {filteredPersons?.map((person) => (
                <div key={person.name}>
                    {`${person.name}: ${person.number}`}
                    <button onClick={() => deleteHandler(person.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </>
    )
}

export default Persons
