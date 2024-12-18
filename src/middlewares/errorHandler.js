/* eslint-disable no-unused-vars */
const errorHandler = (error, req, res, next) => {
  console.log('Error from middleware:', error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  } else return res.status(500).send(error.message || error)
}
module.exports = errorHandler
