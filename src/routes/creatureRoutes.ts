import { Router } from 'express';
import {
  creationPage,
  creationPost,
  editCreature,
  editPage,
  getAllCreatures,
  obliterateCreature,
  oneCreature,
} from '../controllers/creatureController';

const router = Router();

// Get all creatures
router.get('/', getAllCreatures);

// Add a creature
    // GET
    router.get('/add', creationPage);

    // POST
    router.post('/add', creationPost);

// Edit a creature
    // GET
    router.get('/edit/:creatureId', editPage);

    // POST
    router.post('/edit/:creatureId', editCreature);

// Cast creature into oblivion
router.post('/delete/:creatureId', obliterateCreature);

// Get a single creature
router.get('/:creatureId', oneCreature);

export default router;
