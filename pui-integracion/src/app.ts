import express from 'express';
import { loginPUI, authenticateJWT } from './middleware/auth.middleware';
import { activarReporte } from './controllers/activar-reporte.controller';
import { desactivarReporte } from './controllers/desactivar-reporte.controller';
import logger from './utils/logger';

const app = express();
app.use(express.json({ limit: '10mb' }));

app.post('/login', loginPUI);
app.post('/activar-reporte', authenticateJWT, activarReporte);
app.post('/activar-reporte-prueba', authenticateJWT, activarReporte);
app.post('/desactivar-reporte', authenticateJWT, desactivarReporte);

//const PORT = 3000;
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`🚀 PUI activa en puerto ${PORT}`);
});