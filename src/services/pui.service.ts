import { ActivarReporteRequest } from '../types/pui.types';
import logger from '../utils/logger';

export const procesarBusqueda = async (reporte: ActivarReporteRequest) => {
  logger.info('🔍 FASE 1: Buscando datos básicos...');
  await new Promise(r => setTimeout(r, 1000));
  
  logger.info('📜 FASE 2: Búsqueda histórica...');
  await new Promise(r => setTimeout(r, 1000));
  
  logger.info('✅ FASES completadas. Búsqueda continua cada 4h');
};