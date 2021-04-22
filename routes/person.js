const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

//Create and Save a Record of a Model:
router.post("/", async (req, res) => {
    try {
        const { name, age, favoriteFoods } = req.body;
        if (!name) {
            return res.status(400).send("name is required");
        }
        const person = new Person({ name, age, favoriteFoods });
        await person.save();
        res.status(200).send({ msg: "person added", person });
    } catch (error) {
        res.status(500).send("error");
    }
});
//Use model.find() to Search Your Database
//get
router.get("/", async (req, res) => {
    try {
        const persons = await Person.find();
        res.status(200).send({ msg: "All contacts", persons });
    } catch (error) {
        res.status(500).send("impossible to get persons");
    }
});
