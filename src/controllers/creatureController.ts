import { RequestHandler } from "express";
import { Creature } from "../models/Creature";

// Home redirect
export const redirect: RequestHandler = (req, res, next) => {
    res.redirect('/creatures')
}

// Get all creatures
export const getAllCreatures: RequestHandler = async (req, res, next) => {
    let creatures: Creature[] = await Creature.findAll()
    res.render('allCreatures', { creatures, title: "The Compendium of Creatures" })
}

// Get a single creature
export const oneCreature: RequestHandler =async (req, res, next) => {
    let searchId = req.params.creatureId;
    let searchItem: Creature | null = await Creature.findByPk(searchId)

    if (searchItem) {
        res.render('creatureDetail', { creature: searchItem, title: searchItem.name })
    } else {
        res.status(404).render('error', { message: 'No creature like that exists.', title: "Error 404 - Creature not found"})
    }
}

// Add a creature
    // GET
    export const creationPage: RequestHandler = async (req, res, next) => {
        res.render('addCreature', {
            title: "Creature Summoning"
        });
    }

    // POST
    export const creationPost: RequestHandler = async (req, res, next) => {
        let newCreature: Creature = req.body;
        await Creature.create(newCreature)
        res.redirect('/creatures')
    }


// Edit a creature
    // GET


    // POST


// Cast creature into oblivion