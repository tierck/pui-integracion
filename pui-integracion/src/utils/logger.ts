import winston from 'winston';
import * as fs from 'fs';
import * as path from 'path';

const logDir = './logs';
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: './logs/pui.log' }),
    new winston.transports.Console()
  ]
});

export default logger;