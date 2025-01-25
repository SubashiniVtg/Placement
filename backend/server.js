// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');

// // Load environment variables
// dotenv.config();

// // Initialize Express app
// const app = express();

// // Middleware setup
// app.use(cors());
// app.use(bodyParser.json()); // This will parse incoming JSON request bodies

// // MongoDB connection
// mongoose.connect(process.env.MONGO)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
//     process.exit(1); // Exit the process if MongoDB connection fails
//   });

// // Define a schema for student registration data
// const studentSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   cgpa: { type: Number, required: true, min: 0, max: 10 },
//   skills: { type: String, required: true },
// });

// // Create a model for the student schema
// const Student = mongoose.model('Student', studentSchema);

// // POST route to handle student registration
// app.post('/api/register', async (req, res) => {
//   const { name, email, cgpa, skills } = req.body;

//   // Log the incoming request for debugging
//   console.log('Received data:', req.body);

//   // Validate the required fields
//   if (!name || !email || !cgpa || !skills) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   // Check if the student already exists
//   const existingStudent = await Student.findOne({ email });
//   if (existingStudent) {
//     return res.status(409).json({ message: 'Student with this email already exists' });
//   }

//   try {
//     // Create a new student document
//     const newStudent = new Student({ name, email, cgpa, skills });

//     // Save the document to MongoDB
//     await newStudent.save();

//     // Respond with success
//     res.status(201).json({ message: 'Student registered successfully' });
//   } catch (error) {
//     console.error('Error registering student:', error);

//     // Respond with a server error
//     res.status(500).json({ message: 'Error registering student', error });
//   }
// });

// // Server setup
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
