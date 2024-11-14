"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./modules/user/user.routes"));
const task_routes_1 = __importDefault(require("./modules/task/task.routes"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware para manejar JSON
app.use(express_1.default.json());
// Rutas
app.use('/usuarios', user_routes_1.default);
app.use('/tareas', task_routes_1.default);
// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
