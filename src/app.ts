import express from 'express';
import userRoutes from './modules/user/user.routes';
import taskRoutes from './modules/task/task.routes';

const app = express();
const PORT = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Rutas
app.use('/usuarios', userRoutes);
app.use('/tareas', taskRoutes);

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

