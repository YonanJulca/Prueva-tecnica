import db from '../../config/db';
import { RowDataPacket, OkPacket } from 'mysql2';

// Interfaz para definir el tipo de tarea
interface Tarea {
  id: number;
  usuario_id: number;
  titulo: string;
  descripcion: string;
  estado: string;
  fecha_creacion: Date;
}

// Servicio obtener todas las tareas
export const getAllTasks = (): Promise<Tarea[]> => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM tareas', (error, resultado: RowDataPacket[]) => {
      if (error) return reject(error); // Si hay error, se rechaza 
      resolve(resultado as Tarea[]); // Si es exitoso
    });
  });
};

// Servicio crear una nueva tarea
export const createTask = (
  usuario_id: number,
  titulo: string,
  descripcion: string,
  estado: string
): Promise<OkPacket> => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO tareas (usuario_id, titulo, descripcion, estado) VALUES (?, ?, ?, ?)';
    db.query(query, [usuario_id, titulo, descripcion, estado], (error, resultado: OkPacket) => {
      if (error) return reject(error);
      resolve(resultado);
    });
  });
};

// Servicio actualizar una tarea
export const updateTask = (
  id: number,
  usuario_id: number,
  titulo: string,
  descripcion: string,
  estado: string
): Promise<OkPacket> => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE tareas SET usuario_id = ?, titulo = ?, descripcion = ?, estado = ? WHERE id = ?';
    db.query(query, [usuario_id, titulo, descripcion, estado, id], (error, resultado: OkPacket) => {
      if (error) return reject(error);
      resolve(resultado);
    });
  });
};

// Servicio eliminar una tarea
export const deleteTask = (id: number): Promise<OkPacket> => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM tareas WHERE id = ?';
    db.query(query, [id], (error, resultado: OkPacket) => {
      if (error) return reject(error);
      resolve(resultado);
    });
  });
};
