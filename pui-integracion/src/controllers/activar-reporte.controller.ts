import { Request, Response } from 'express';
import logger from '../utils/logger';
import { procesarBusqueda } from '../services/pui.service';

export const activarReporte = async (req: Request, res: Response) => {
  try {
    const { id, curp } = req.body;
    
    if (!id || !curp || curp.length !== 18) {
      return res.status(400).json({ error: 'ID y CURP (18 chars) requeridos' });
    }

    logger.info(`🔍 Activando reporte: ${id} - ${curp}`);
    await procesarBusqueda({ id, curp, lugar_nacimiento: 'CDMX' } as any);

    res.json({ message: 'Reporte activado correctamente' });
  } catch (error) {
    logger.error('Error activar-reporte:', error);
    res.status(500).json({ error: 'Error servidor' });
  }
};