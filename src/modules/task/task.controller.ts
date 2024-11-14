import { Request, Response } from 'express';
import * as taskService from './task.service';


// Obtener todas las tareas
export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks); // Responde con éxito
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tareas' }); // Responde con error si algo falla
  }
};


// Crear una nueva tarea
export const createTask = async (req: Request, res: Response) => {
  try {
    const { usuario_id, titulo, descripcion, estado } = req.body;
    await taskService.createTask(usuario_id, titulo, descripcion, estado);
    res.status(201).json({ message: 'Tarea creada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear tarea' });
  }
};

// Actualizar una tarea existente
export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { usuario_id, titulo, descripcion, estado } = req.body;
    await taskService.updateTask(Number(id), usuario_id, titulo, descripcion, estado);
    res.json({ message: 'Tarea actualizada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar tarea' });
  }
};

// Eliminar una tarea
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await taskService.deleteTask(Number(id));
    res.json({ message: 'Tarea eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar tarea' });
  }
};
