const mongoose = require('mongoose'); 

const eventSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  summary: { type: String, required: false },
  location: { type: String, required: false },
  description: { type: String, required: false },
  start: { type: String, required: false },
  end: { type: String, required: false },
  reccurence: { type: Number, required: false },
  attendees: { type: String, required: false },
  reminders: {type: String, required: false }

});

module.exports = mongoose.model('Event', eventSchema);