import { Request, Response } from 'express';
import * as userService from './user.service';


// Obtener todo el usuario
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users); // Responde con éxito
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios' }); // Responde con error si algo falla
  }
};


// Crear un nuevo usuario
export const createUser = async (req: Request, res: Response) => {
  try {
    const { nombre, email, contrasena } = req.body;
    await userService.createUser(nombre, email, contrasena);
    res.status(201).json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear usuario' });
  }
};

// Actualizar un usuario
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, email, contrasena } = req.body;
    await userService.updateUser(Number(id), nombre, email, contrasena);
    res.json({ message: 'Usuario actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar usuario' });
  }
};

// Eliminar un usuario
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(Number(id));
    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar usuario' });
  }
};
