import db from '../../config/db';
import { RowDataPacket, OkPacket } from 'mysql2';

// Interfaz para definir el tipo de usuario
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  contrasena: string;
  fecha_creacion: Date;
}

// Servicio para obtener todos los usuarios
export const getAllUsers = (): Promise<Usuario[]> => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM usuarios', (error, resultado: RowDataPacket[]) => {
      if (error) return reject(error);
      resolve(resultado as Usuario[]);
    });
  });
};

// Servicio para crear un nuevo usuario
export const createUser = (
  nombre: string,
  email: string,
  contrasena: string
): Promise<OkPacket> => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO usuarios (nombre, email, contrasena) VALUES (?, ?, ?)';
    db.query(query, [nombre, email, contrasena], (error, resultado: OkPacket) => {
      if (error) return reject(error);
      resolve(resultado);
    });
  });
};

// Servicio para actualizar un usuario
export const updateUser = (
  id: number,
  nombre: string,
  email: string,
  contrasena: string
): Promise<OkPacket> => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE usuarios SET nombre = ?, email = ?, contrasena = ? WHERE id = ?';
    db.query(query, [nombre, email, contrasena, id], (error, resultado: OkPacket) => {
      if (error) return reject(error);
      resolve(resultado);
    });
  });
};

// Servicio para eliminar un usuario
export const deleteUser = (id: number): Promise<OkPacket> => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM usuarios WHERE id = ?';
    db.query(query, [id], (error, resultado: OkPacket) => {
      if (error) return reject(error);
      resolve(resultado);
    });
  });
};
