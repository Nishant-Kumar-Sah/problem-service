const BaseError = require("./base.error");
const {StatusCodes} = require('http-status-codes')

class NotFoundError extends BaseError{
    constructor(resourceName, resourceValue){
        super("NotFoundError",StatusCodes.NOT_FOUND,`The requested ${resourceName} with value ${resourceValue} not found`, {
            resourceName,
            resourceValue
        });
    }

}

module.exports = NotFoundError;