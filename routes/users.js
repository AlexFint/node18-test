import { Router } from 'express';
import { getUsers, createUser } from '../services/userService.js';

const router = Router();

/**
 * GET /api/users
 * Retorna la lista de usuarios
 */
router.get('/', async (_req, res) => {
  const users = await getUsers();
  res.json({ data: users });
});

/**
 * POST /api/users
 * Crea un usuario nuevo a partir de un body JSON
 */
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  const newUser = await createUser({ name, email });
  res.status(201).json({ data: newUser });
});

export default router;
