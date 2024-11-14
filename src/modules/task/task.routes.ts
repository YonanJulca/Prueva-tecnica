import { Router } from 'express';
import * as taskController from './task.controller';

const router = Router(); // Crea una nueva instancia de un enrutador

router.get('/', taskController.getAllTasks);
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

export default router;
