"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getAllUsers = void 0;
const db_1 = __importDefault(require("../../config/db"));
// Servicio para obtener todos los usuarios
const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        db_1.default.query('SELECT * FROM usuarios', (err, results) => {
            if (err)
                return reject(err);
            resolve(results);
        });
    });
};
exports.getAllUsers = getAllUsers;
// Servicio para crear un nuevo usuario
const createUser = (nombre, email, contrasena) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO usuarios (nombre, email, contrasena) VALUES (?, ?, ?)';
        db_1.default.query(query, [nombre, email, contrasena], (err, results) => {
            if (err)
                return reject(err);
            resolve(results);
        });
    });
};
exports.createUser = createUser;
// Servicio para actualizar un usuario
const updateUser = (id, nombre, email, contrasena) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE usuarios SET nombre = ?, email = ?, contrasena = ? WHERE id = ?';
        db_1.default.query(query, [nombre, email, contrasena, id], (err, results) => {
            if (err)
                return reject(err);
            resolve(results);
        });
    });
};
exports.updateUser = updateUser;
// Servicio para eliminar un usuario
const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM usuarios WHERE id = ?';
        db_1.default.query(query, [id], (err, results) => {
            if (err)
                return reject(err);
            resolve(results);
        });
    });
};
exports.deleteUser = deleteUser;
