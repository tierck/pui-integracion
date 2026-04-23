"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activarReporte = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const pui_service_1 = require("../services/pui.service");
const activarReporte = async (req, res) => {
    try {
        const { id, curp } = req.body;
        if (!id || !curp || curp.length !== 18) {
            return res.status(400).json({ error: 'ID y CURP (18 chars) requeridos' });
        }
        logger_1.default.info(`🔍 Activando reporte: ${id} - ${curp}`);
        await (0, pui_service_1.procesarBusqueda)({ id, curp, lugar_nacimiento: 'CDMX' });
        res.json({ message: 'Reporte activado correctamente' });
    }
    catch (error) {
        logger_1.default.error('Error activar-reporte:', error);
        res.status(500).json({ error: 'Error servidor' });
    }
};
exports.activarReporte = activarReporte;
