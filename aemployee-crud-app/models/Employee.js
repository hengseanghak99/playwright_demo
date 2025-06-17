const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  photo: String,
  name: String,
  sex: { type: String, enum: ['Male', 'Female'] },
  dateOfBirth: Date,
  position: String,
  salary: Number
});

module.exports = mongoose.model('Employee', employeeSchema);
