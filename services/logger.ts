// utils/logger.ts
import { createLogger, format, transports, Logger } from 'winston';
import 'winston-daily-rotate-file';

const getLogger = (fileName = 'application'): Logger => {
  // Define the file transport for daily rotation
  const fileLogTransport = new transports.DailyRotateFile({
    filename: `logs/${fileName}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '30d',
  });

  // Define the console transport
  const consoleTransport = new transports.Console({
    level: process.env.LOG_LEVEL || 'info',
    handleExceptions: false,
    format: format.combine(
      format.colorize(),
      format.printf(
        ({ level, message, timestamp }) =>
          `${timestamp} [${process.env.NODE_ENV}] ${level}: ${message}`
      )
    ),
  });

  // Create and configure the logger
  const logger = createLogger({
    level: 'info',
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      format.errors({ stack: true }),
      format.splat(),
      format.printf(
        ({ level, message, timestamp }) =>
          `${timestamp} [${process.env.NODE_ENV}] ${level}: ${message}`
      )
    ),
    defaultMeta: { service: 'my-app' },
    transports: [consoleTransport],
  });

  // Add file transport if in development mode
  if (process.env.NODE_ENV === 'development') {
    logger.add(fileLogTransport);
  }

  return logger;
};

export default getLogger();
