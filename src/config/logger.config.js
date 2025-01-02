const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');
require('winston-mongodb');
const allowedTransports = [];
// Transport for Console logging
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));
// Transport for  logging in DB
allowedTransports.push(new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs'
}))


const logger = winston.createLogger({
    format:winston.format.combine(
        // First argument is the timestamp
        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),
        //2 Second argument defines what excatly  is going to be printed
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
    transports: allowedTransports,

        
})

module.exports = logger;