const errorHandler = (error, req, res, next) => {
    console.log('Error from middleware:', error.message)
    res.status(500).send(error.message || error)
}
module.exports = errorHandler
