// server/controllers/contactController.js
const Contact = require('../models/contact');

const submitQuery = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        message: 'Please fill in all fields' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Please provide a valid email address' 
      });
    }

    // Create new contact query
    const contactQuery = new Contact({
      name,
      email,
      message
    });

    await contactQuery.save();

    res.status(200).json({ 
      message: 'Message received! We\'ll get back to you soon.',
      success: true
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ 
      message: 'Failed to submit your message. Please try again.',
      error: error.message 
    });
  }
};

// Optional: Get all contact queries (for admin)
const getAllQueries = async (req, res) => {
  try {
    const queries = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ queries });
  } catch (error) {
    console.error('Error fetching queries:', error);
    res.status(500).json({ 
      message: 'Failed to fetch queries',
      error: error.message 
    });
  }
};

// Optional: Update query status (for admin)
const updateQueryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const query = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!query) {
      return res.status(404).json({ message: 'Query not found' });
    }

    res.status(200).json({ 
      message: 'Status updated',
      query 
    });
  } catch (error) {
    console.error('Error updating status:', error);
    res.status(500).json({ 
      message: 'Failed to update status',
      error: error.message 
    });
  }
};

module.exports = { 
  submitQuery, 
  getAllQueries, 
  updateQueryStatus 
};
