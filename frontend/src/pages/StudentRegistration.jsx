// import React, { useState } from "react";
// import API from '../utils/api';
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Grid,
//   Paper,
// } from "@mui/material";

// const StudentRegistration = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     cgpa: "",
//     skills: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Student Data Submitted: ", formData);
//     try {
//       const response = await fetch('http://localhost:5000/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
  
//       if (response.ok) {
//         const result = await response.json();
//         alert(result.message || "Registration Successful!");
//         setFormData({ name: "", email: "", cgpa: "", skills: "" });
//       } else {
//         const error = await response.json();
//         alert(error.message || "Registration failed.");
//       }
//     } catch (error) {
//       console.error('Error submitting data:', error);
//       alert('An error occurred during registration.');
//     }
//     // You can replace this with an API call to save the data
//     alert("Registration Successful!");
//     setFormData({ name: "", email: "", cgpa: "", skills: "" });
//   };

//   return (
//     <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
//       <Paper elevation={3} style={{ padding: "2rem" }}>
//         <Typography variant="h4" gutterBottom>
//           Student Registration
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <TextField
//                 label="Full Name"
//                 variant="outlined"
//                 fullWidth
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Email"
//                 variant="outlined"
//                 fullWidth
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="CGPA"
//                 variant="outlined"
//                 fullWidth
//                 name="cgpa"
//                 type="number"
//                 inputProps={{ step: "0.1", min: "0", max: "10" }}
//                 value={formData.cgpa}
//                 onChange={handleChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Skills (e.g., React, Java)"
//                 variant="outlined"
//                 fullWidth
//                 name="skills"
//                 value={formData.skills}
//                 onChange={handleChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//               >
//                 Register
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default StudentRegistration;
// import React, { useState } from "react";
// import { Container, TextField, Button, Typography, Grid, Paper } from "@mui/material";
// import { useNavigate } from "react-router-dom"; // To programmatically navigate after submission

// const StudentRegistration = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     cgpa: "",
//     skills: "",
//   });
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Student Data Submitted: ", formData);

//     // Pass the form data to the parent (App) through onSubmit prop
//     if (onSubmit) {
//       onSubmit(formData);
//     }

//     // Navigate to the student dashboard after successful registration
//     navigate("/student-dashboard");

//     // Optionally, you can also send the data to an API here
//     try {
//       const response = await fetch('http://localhost:5000/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         alert(result.message || "Registration Successful!");
//         setFormData({ name: "", email: "", cgpa: "", skills: "" });
//       } else {
//         const error = await response.json();
//         alert(error.message || "Registration failed.");
//       }
//     } catch (error) {
//       console.error('Error submitting data:', error);
//       alert('An error occurred during registration.');
//     }
//   };

//   return (
//     <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
//       <Paper elevation={3} style={{ padding: "2rem" }}>
//         <Typography variant="h4" gutterBottom>
//           Student Registration
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <TextField
//                 label="Full Name"
//                 variant="outlined"
//                 fullWidth
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Email"
//                 variant="outlined"
//                 fullWidth
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="CGPA"
//                 variant="outlined"
//                 fullWidth
//                 name="cgpa"
//                 type="number"
//                 inputProps={{ step: "0.1", min: "0", max: "10" }}
//                 value={formData.cgpa}
//                 onChange={handleChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Skills (e.g., React, Java)"
//                 variant="outlined"
//                 fullWidth
//                 name="skills"
//                 value={formData.skills}
//                 onChange={handleChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button type="submit" variant="contained" color="primary" fullWidth>
//                 Register
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default StudentRegistration;
import React, { useState } from "react";
import { Container, TextField, Button, Typography, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StudentRegistration = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cgpa: "",
    skills: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save to localStorage
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(formData);
    localStorage.setItem("students", JSON.stringify(students));

    // Pass the form data to parent
    if (onSubmit) {
      onSubmit(formData);
    }

    // Navigate to the student dashboard
    navigate("/student-dashboard");

    // Optionally, you can send the data to an API here if needed
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Paper elevation={3} style={{ padding: "2rem" }}>
        <Typography variant="h4" gutterBottom>
          Student Registration
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="CGPA"
                variant="outlined"
                fullWidth
                name="cgpa"
                type="number"
                inputProps={{ step: "0.1", min: "0", max: "10" }}
                value={formData.cgpa}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Skills (e.g., React, Java)"
                variant="outlined"
                fullWidth
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default StudentRegistration;
