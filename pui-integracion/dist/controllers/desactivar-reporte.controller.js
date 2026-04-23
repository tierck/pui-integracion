"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.desactivarReporte = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const desactivarReporte = async (req, res) => {
    try {
        const { id } = req.body;
        if (!id)
            return res.status(400).json({ error: 'ID requerido' });
        logger_1.default.info(`🛑 Desactivando reporte: ${id}`);
        res.json({ message: 'Reporte desactivado' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error servidor' });
    }
};
exports.desactivarReporte = desactivarReporte;
