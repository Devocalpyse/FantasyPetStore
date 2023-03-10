import { Router } from "express";
import { creationPage, getAllCreatures } from "../controllers/creatureController";

const router = Router();

// Get all creatures
router.get('/', getAllCreatures)

// Get a single creature


// Add a creature
    // GET
    router.get('/add', creationPage)

    // POST
    // router.post('/add', creationPost)

// Edit a creature
    // GET


    // POST


// Cast creature into oblivion


export default router;