//Create a person
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const personSchema = new Schema({
    name: { type: String, required: true },
    phone: Number,
    favoriteFoods: Array,
});
module.exports = mongoose.model("Person", personSchema);
