"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJWT = exports.loginPUI = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const security_1 = require("../config/security");
const loginPUI = (req, res) => {
    const { usuario, clave } = req.body;
    if (usuario !== 'PUI') {
        return res.status(401).json({ error: 'Usuario inválido' });
    }
    //const isValid = bcrypt.compareSync(clave, SECURITY_CONFIG.PUI_PASSWORD_HASH);
    // POR ESTO (temporal):
    const isValid = clave === '12345678'; // ← SIMPLE
    if (!isValid) {
        return res.status(401).json({ error: 'Clave inválida' });
    }
    const token = jsonwebtoken_1.default.sign({ institucion_id: security_1.SECURITY_CONFIG.PUI_INSTITUCION_ID }, security_1.SECURITY_CONFIG.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};
exports.loginPUI = loginPUI;
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token)
        return res.status(401).json({ error: 'Token requerido' });
    jsonwebtoken_1.default.verify(token, security_1.SECURITY_CONFIG.JWT_SECRET, (err, user) => {
        if (err)
            return res.status(403).json({ error: 'Token inválido' });
        req.user = user;
        next();
    });
};
exports.authenticateJWT = authenticateJWT;
