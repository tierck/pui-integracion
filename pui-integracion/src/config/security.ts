import * as dotenv from 'dotenv';
dotenv.config();

export const SECURITY_CONFIG = {
  PUI_USER: 'PUI',
  PUI_PASSWORD_HASH: process.env.PUI_PASSWORD_HASH!,
  JWT_SECRET: process.env.JWT_SECRET!,
  PUI_BASE_URL: process.env.PUI_BASE_URL!,
  PUI_INSTITUCION_ID: process.env.PUI_INSTITUCION_ID!,
  PUI_CLAVE: process.env.PUI_CLAVE!,
  PORT: parseInt(process.env.PORT || '3000')
};