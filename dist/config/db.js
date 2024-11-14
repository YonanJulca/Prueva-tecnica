"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const connection = mysql2_1.default.createConnection({
    host: 'localhost',
    user: 'root', // Cambia esto si tienes otro usuario
    password: 'yonan', // Cambia esto si tienes una contraseña
    database: 'julca' // Cambia esto al nombre de tu base de datos
});
connection.connect((err) => {
    if (err) {
        console.error('Error de conexión a MySQL: ' + err.stack);
        return;
    }
    console.log('Conectado a MySQL con el ID ' + connection.threadId);
});
exports.default = connection;
