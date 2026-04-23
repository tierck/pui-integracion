import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Request, Response, NextFunction } from 'express';
import { SECURITY_CONFIG } from '../config/security';

interface AuthRequest extends Request {
  user?: { institucion_id: string };
}

export const loginPUI = (req: Request, res: Response) => {
  const { usuario, clave } = req.body;
  
  if (usuario !== 'PUI') {
    return res.status(401).json({ error: 'Usuario inválido' });
  }
  
  //const isValid = bcrypt.compareSync(clave, SECURITY_CONFIG.PUI_PASSWORD_HASH);
  // POR ESTO (temporal):
const isValid = clave === '12345678';  // ← SIMPLE
  
  if (!isValid) {
    return res.status(401).json({ error: 'Clave inválida' });
  }

  const token = jwt.sign(
    { institucion_id: SECURITY_CONFIG.PUI_INSTITUCION_ID },
    SECURITY_CONFIG.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
};

export const authenticateJWT = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token requerido' });

  jwt.verify(token, SECURITY_CONFIG.JWT_SECRET, (err: any, user: any) => {
    if (err) return res.status(403).json({ error: 'Token inválido' });
    req.user = user;
    next();
  });
};