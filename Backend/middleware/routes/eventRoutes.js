const express = require('express');
const router = express.Router();
const { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } = require('../controller/eventController');
const authenticate = require('../middleware/validatetoken'); // Ensure 'authenticate' is correct
const authorizedAdmin = require("../middleware/authorizedAdmin");
// Create a new event
router.post('/createEvent', authenticate,authorizedAdmin, createEvent);

// Get all events
router.get('/GetAllEvent', getAllEvents);

// Get event by ID
router.get('/GetEventById/:id', getEventById);

// Update an event
router.put('/UpdateEvent/:id', authenticate, authorizedAdmin,updateEvent);

// Delete an event
router.delete('/DeleteEvent/:id', authenticate,authorizedAdmin, deleteEvent);

module.exports = router;
