import { Router } from "express";
import { creationPage, creationPost, editCreature, editPage, getAllCreatures, oneCreature } from "../controllers/creatureController";

const router = Router();

// Get all creatures
router.get('/', getAllCreatures)

// Get a single creature
router.get('/:creatureId', oneCreature)

// Add a creature
    // GET
    router.get('/add', creationPage)

    // POST
    router.post('/add', creationPost)

// Edit a creature
    // GET
    router.get('/edit/:creatureId', editPage)

    // POST
    router.post('/edit/:creatureId', editCreature)

// Cast creature into oblivion


export default router;