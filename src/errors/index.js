const NotFoundError = require('./notFoundError') 
const BadRequest = require('./badrequest.error')
const InternalServerError = require('./internalServer.error')
const NotImplemented = require('./NotImplemented.error')

module.exports = {
    NotFoundError,
    BadRequest,
    InternalServerError,
    NotImplemented
}