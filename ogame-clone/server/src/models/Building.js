const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    level: {
        type: Number,
        required: true,
        default: 1,
    },
    cost: {
        metal: {
            type: Number,
            required: true,
        },
        crystal: {
            type: Number,
            required: true,
        },
        deuterium: {
            type: Number,
            required: true,
        },
    },
    production: {
        metal: {
            type: Number,
            required: true,
        },
        crystal: {
            type: Number,
            required: true,
        },
        deuterium: {
            type: Number,
            required: true,
        },
    },
});

const Building = mongoose.model('Building', buildingSchema);

module.exports = Building;