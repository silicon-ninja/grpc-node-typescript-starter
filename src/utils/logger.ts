import * as winston from 'winston';

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
}

const colors = {
    error: "red",
    warn: "yellow",
    info: "green",
    verbose: "gray",
    debug: "blue",
    silly: "grey"
}

const level = () => {
    const env = process.env.NODE_ENV || 'development'
    const isDevelopment = env === 'development'
    return isDevelopment ? 'debug': 'warn'
}

winston.addColors(colors);

const winstonFormat = winston.format.combine(
    winston.format.colorize({
        all: true
    }),
    winston.format.label({
        label: '[LOGGER]'
    }),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss'}),
    winston.format.align(),
    winston.format.printf(
        (info) => `[${info.timestamp}] ${info.level}: ${info.message}`,
    )
)

const logger =  winston.createLogger({
    level: level(),
    levels,
    format: winstonFormat,
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error',
        }),
        new winston.transports.File({ filename: 'logs/all.log' }),
    ],
});

export default logger;
