"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("./middleware/auth.middleware");
const activar_reporte_controller_1 = require("./controllers/activar-reporte.controller");
const desactivar_reporte_controller_1 = require("./controllers/desactivar-reporte.controller");
const logger_1 = __importDefault(require("./utils/logger"));
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: '10mb' }));
app.post('/login', auth_middleware_1.loginPUI);
app.post('/activar-reporte', auth_middleware_1.authenticateJWT, activar_reporte_controller_1.activarReporte);
app.post('/activar-reporte-prueba', auth_middleware_1.authenticateJWT, activar_reporte_controller_1.activarReporte);
app.post('/desactivar-reporte', auth_middleware_1.authenticateJWT, desactivar_reporte_controller_1.desactivarReporte);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger_1.default.info(`🚀 PUI activa en puerto ${PORT}`);
});
