const Contact = require('../models/Contact');

// @desc    Send contact message
// @route   POST /api/contact
exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      message
    });

    res.status(201).json({ success: true, data: contact });
  } catch (err) {
    res.status(400).json({ success: false, message: "Failed to send message" });
  }
};