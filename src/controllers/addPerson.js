const storedPersons = require('../db/persons.json')
const fs = require('fs/promises')

const addPerson = async (req, res) => {
    const { name, number } = req.body

    //Validations:
    if (!name || !number) {
        const missingField =
            !name && !number ? 'Name and number' : !name ? 'Name' : 'Number'
        return res.status(400).send({ error: `${missingField} are required.` })
    }

    if (storedPersons.some((person) => person.name === name)) {
        return res.status(400).send({ error: 'name must be unique' })
    }

    //Update data:
    const newData = [...storedPersons, { ...req.body }]
    await fs.writeFile(
        './src/db/persons.json',
        JSON.stringify(newData, null, 2)
    )

    res.send([{ ...req.body }])
}
module.exports = addPerson
