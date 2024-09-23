const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title for the event'],
    },
    description: {
        type: String,
        required: [true, 'Please add a description for the event'],
    },
    date: {
        type: Date,
        required: [true, 'Please add a date for the event'],
    },
    location: {
        type: String,
        required: [true, 'Please add a location for the event'],
    },
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Event', eventSchema);
