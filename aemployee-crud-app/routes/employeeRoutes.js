const express = require('express');
const router = express.Router();
const multer = require('multer');
const Employee = require('../models/employee');

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public/uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// Create
router.post('/', upload.single('photo'), async (req, res) => {
  const employee = new Employee({
    ...req.body,
    photo: req.file?.filename || ''
  });
  await employee.save();
  res.json(employee);
});

// Read all
router.get('/', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// Read one
router.get('/:id', async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
});

// Update
router.put('/:id', upload.single('photo'), async (req, res) => {
  const updatedData = { ...req.body };
  if (req.file) updatedData.photo = req.file.filename;
  const employee = await Employee.findByIdAndUpdate(req.params.id, updatedData, { new: true });
  res.json(employee);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
