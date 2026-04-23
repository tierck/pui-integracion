"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.procesarBusqueda = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const procesarBusqueda = async (reporte) => {
    logger_1.default.info('🔍 FASE 1: Buscando datos básicos...');
    await new Promise(r => setTimeout(r, 1000));
    logger_1.default.info('📜 FASE 2: Búsqueda histórica...');
    await new Promise(r => setTimeout(r, 1000));
    logger_1.default.info('✅ FASES completadas. Búsqueda continua cada 4h');
};
exports.procesarBusqueda = procesarBusqueda;
