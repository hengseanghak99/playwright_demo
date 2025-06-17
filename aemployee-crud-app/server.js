require('dotenv').config();
const express = require('express');
//const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('public/uploads'));
app.use(express.urlencoded({ extended: true }));


// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

//mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


app.use('/api/employees', require('./routes/employeeRoutes'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
