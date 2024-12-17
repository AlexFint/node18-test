import { Router } from 'express';
import { getPokemon } from '../services/pokemonService.js';

const router = Router();
/**
 * POST /api/pokemon
 * Trae pokemon de otra API externa
 */
router.get('/', async (_req, res) => {
    const data = await getPokemon();
    res.status(200).json(data);
});

export default router;
