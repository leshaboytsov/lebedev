const winston = require('winston');

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({ filename: 'logfile.log' }),
];

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports,
});

module.exports = logger;
