import { Request, Response } from 'express';
import logger from '../utils/logger';

export const desactivarReporte = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    if (!id) return res.status(400).json({ error: 'ID requerido' });

    logger.info(`🛑 Desactivando reporte: ${id}`);
    res.json({ message: 'Reporte desactivado' });
  } catch (error) {
    res.status(500).json({ error: 'Error servidor' });
  }
};