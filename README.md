# node18-test
node-test

## 1. Corregir y/o mejorar el código actual

## 2. Nuevas características a añadir

### 2.1. Endpoint de eliminación y actualización

- **DELETE** `/api/users/:id`: Elimina un usuario por id.  
- **PUT** `/api/users/:id`: Actualiza el usuario por id (p. ej. actualizar nombre o email).

### 2.2. Paginación o filtrado

Agregar soporte de paginación en **GET** `/api/users`, por ejemplo con query params:  

Responder solo la página solicitada y agregar un objeto `meta` con el total de usuarios.

### 2.3. Middleware de Logs

Crear un pequeño middleware que imprima en consola el método, la ruta y la hora de la petición (logging básico).

### 2.4. Uso de variables de entorno

Por ejemplo, usar la librería **dotenv** y cargar un archivo `.env` con el `PORT` u otras configuraciones.

### 3. Opcional

Usar alguna librería de tests para asegurar la calidad del código.
