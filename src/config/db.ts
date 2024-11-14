 import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',        
  password: 'yonan',   
  database: 'julca'    
});

connection.connect((error) => {
  if (error) {
    console.error('Error de conexión a MySQL: ' + error.stack); // Muestra el error si la conexión falla
    return;
    return;
  }
  console.log('Conectado a MySQL con el ID ' + connection.threadId); // Muestra el ID de la conexión
});

export default connection;
