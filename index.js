import express from 'express';
import userRoutes from './routes/users.js';
import pokemonRoutes from './routes/pokemons.js';

const app = express();
const PORT = 3000;

// Config Express
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/pokemon', pokemonRoutes);

// Inicialización del servidor
app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});