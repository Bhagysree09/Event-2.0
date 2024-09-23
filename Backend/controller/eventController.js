const Event = require("../models/eventModel");

// Create an event
const createEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;

    const newEvent = await Event.create({
      title,
      description,
      date,
      location,
      organizer: req.user._id, // assuming authenticated user
    });

    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("organizer", "name email");
    res.json(events);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get event by ID
const getEventById = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id).populate("organizer", "name email");
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an event
const updateEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an event
const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
