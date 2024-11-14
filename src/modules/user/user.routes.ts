import { Router } from 'express';
import * as userController from './user.controller';

const router = Router(); // Crea una nueva instancia de un enrutador

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;

