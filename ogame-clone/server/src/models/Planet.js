const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    coordinates: {
        x: {
            type: Number,
            required: true,
        },
        y: {
            type: Number,
            required: true,
        },
    },
    resources: {
        metal: {
            type: Number,
            default: 0,
        },
        crystal: {
            type: Number,
            default: 0,
        },
        deuterium: {
            type: Number,
            default: 0,
        },
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    buildings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Building',
    }],
}, { timestamps: true });

const Planet = mongoose.model('Planet', planetSchema);

module.exports = Planet;