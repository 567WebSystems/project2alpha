const mongoose = require('mongoose'); 

const eventSchema = mongoose.Schema({
  summary: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: false },
  start: { type: String, required: true },
  end: { type: String, required: true },
  reccurence: { type: Number, required: true },
  attendees: { type: String, required: false },
  reminders: {type: String, required: false }

});

module.exports = mongoose.model('Event', eventSchema);