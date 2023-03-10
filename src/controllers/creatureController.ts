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


// Add a creature
    // GET
    export const creationPage: RequestHandler = async (req, res, next) => {
        res.render('addCreature');
    }

    // POST


// Edit a creature
    // GET


    // POST


// Cast creature into oblivion