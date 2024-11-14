"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getAllTasks = void 0;
const db_1 = __importDefault(require("../../config/db"));
// Servicio para obtener todas las tareas
const getAllTasks = () => {
    return new Promise((resolve, reject) => {
        db_1.default.query('SELECT * FROM tareas', (err, results) => {
            if (err)
                return reject(err);
            resolve(results);
        });
    });
};
exports.getAllTasks = getAllTasks;
// Servicio para crear una nueva tarea
const createTask = (usuario_id, titulo, descripcion, estado) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO tareas (usuario_id, titulo, descripcion, estado) VALUES (?, ?, ?, ?)';
        db_1.default.query(query, [usuario_id, titulo, descripcion, estado], (err, results) => {
            if (err)
                return reject(err);
            resolve(results);
        });
    });
};
exports.createTask = createTask;
// Servicio para actualizar una tarea
const updateTask = (id, usuario_id, titulo, descripcion, estado) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE tareas SET usuario_id = ?, titulo = ?, descripcion = ?, estado = ? WHERE id = ?';
        db_1.default.query(query, [usuario_id, titulo, descripcion, estado, id], (err, results) => {
            if (err)
                return reject(err);
            resolve(results);
        });
    });
};
exports.updateTask = updateTask;
// Servicio para eliminar una tarea
const deleteTask = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM tareas WHERE id = ?';
        db_1.default.query(query, [id], (err, results) => {
            if (err)
                return reject(err);
            resolve(results);
        });
    });
};
exports.deleteTask = deleteTask;
