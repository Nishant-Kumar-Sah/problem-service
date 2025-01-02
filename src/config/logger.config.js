const winston = require('winston');

const allowedTransports = [];
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),
        //2 Second argument defines what excatly  is going to be printed
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));


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