// import React, { useState } from "react";
// import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, Button, TextField, Paper } from "@mui/material";

// const PlacedStudentsDashboard = ({ placedStudents, onPlacedStudentSubmit }) => {
//   const [companyName, setCompanyName] = useState("");
//   const [studentName, setStudentName] = useState("");
//   const [packageDetails, setPackageDetails] = useState("");
//   const [videoLink, setVideoLink] = useState("");
//   const [suggestions, setSuggestions] = useState("");

//   const handleAddPlacedStudent = () => {
//     const newPlacedStudent = {
//       companyName,
//       studentName,
//       packageDetails,
//       videoLink,
//       suggestions,
//     };
//     onPlacedStudentSubmit(newPlacedStudent); // Pass the data back to App.js to update placed students
//     // Clear form fields after submission
//     setCompanyName("");
//     setStudentName("");
//     setPackageDetails("");
//     setVideoLink("");
//     setSuggestions("");
//   };

//   return (
//     <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
//       <Typography variant="h4" gutterBottom>
//         Placed Students Dashboard
//       </Typography>

//       <Paper elevation={3} style={{ padding: "2rem" }}>
//         <Typography variant="h6" gutterBottom>
//           Add New Placed Student
//         </Typography>
//         <TextField
//           label="Company Name"
//           variant="outlined"
//           fullWidth
//           value={companyName}
//           onChange={(e) => setCompanyName(e.target.value)}
//           style={{ marginBottom: "1rem" }}
//         />
//         <TextField
//           label="Student Name"
//           variant="outlined"
//           fullWidth
//           value={studentName}
//           onChange={(e) => setStudentName(e.target.value)}
//           style={{ marginBottom: "1rem" }}
//         />
//         <TextField
//           label="Package Details"
//           variant="outlined"
//           fullWidth
//           value={packageDetails}
//           onChange={(e) => setPackageDetails(e.target.value)}
//           style={{ marginBottom: "1rem" }}
//         />
//         <TextField
//           label="Video Link (Optional)"
//           variant="outlined"
//           fullWidth
//           value={videoLink}
//           onChange={(e) => setVideoLink(e.target.value)}
//           style={{ marginBottom: "1rem" }}
//         />
//         <TextField
//           label="Suggestions (Optional)"
//           variant="outlined"
//           fullWidth
//           value={suggestions}
//           onChange={(e) => setSuggestions(e.target.value)}
//           style={{ marginBottom: "1rem" }}
//         />
//         <Button 
//           variant="contained" 
//           color="primary" 
//           onClick={handleAddPlacedStudent}
//           fullWidth
//         >
//           Add Placed Student
//         </Button>
//       </Paper>

//       <Paper elevation={3} style={{ marginTop: "2rem", padding: "2rem" }}>
//         <Typography variant="h6" gutterBottom>
//           Placed Students List
//         </Typography>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Company Name</TableCell>
//               <TableCell>Student Name</TableCell>
//               <TableCell>Package</TableCell>
//               <TableCell>Video Link</TableCell>
//               <TableCell>Suggestions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {placedStudents.map((student, index) => (
//               <TableRow key={index}>
//                 <TableCell>{student.companyName}</TableCell>
//                 <TableCell>{student.studentName}</TableCell>
//                 <TableCell>{student.packageDetails}</TableCell>
//                 <TableCell><a href={student.videoLink} target="_blank" rel="noopener noreferrer">{student.videoLink}</a></TableCell>
//                 <TableCell>{student.suggestions}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>
//     </Container>
//   );
// };

// export default PlacedStudentsDashboard;

import React, { useState } from "react";
import { Container, Typography, TextField, Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const PlacedStudentsDashboard = ({ placedStudents, onPlacedStudentSubmit }) => {
  const [companyName, setCompanyName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [packageDetails, setPackageDetails] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [suggestions, setSuggestions] = useState("");

  const handleAddPlacedStudent = () => {
    const newPlacedStudent = {
      companyName,
      studentName,
      packageDetails,
      videoLink,
      suggestions,
    };
    onPlacedStudentSubmit(newPlacedStudent); // Update placed students in App.js
    // Clear form fields after submission
    setCompanyName("");
    setStudentName("");
    setPackageDetails("");
    setVideoLink("");
    setSuggestions("");
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Placed Students Dashboard
      </Typography>

      {/* Form to add new placed student */}
      <Paper elevation={3} style={{ padding: "2rem" }}>
        <Typography variant="h6" gutterBottom>
          Add New Placed Student
        </Typography>
        <TextField
          label="Company Name"
          variant="outlined"
          fullWidth
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Student Name"
          variant="outlined"
          fullWidth
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Package Details"
          variant="outlined"
          fullWidth
          value={packageDetails}
          onChange={(e) => setPackageDetails(e.target.value)}
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Video Link (Optional)"
          variant="outlined"
          fullWidth
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Suggestions (Optional)"
          variant="outlined"
          fullWidth
          value={suggestions}
          onChange={(e) => setSuggestions(e.target.value)}
          style={{ marginBottom: "1rem" }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleAddPlacedStudent}
          fullWidth
        >
          Add Placed Student
        </Button>
      </Paper>

      {/* Table to display placed students */}
      <Paper elevation={3} style={{ marginTop: "2rem", padding: "2rem" }}>
        <Typography variant="h6" gutterBottom>
          Placed Students List
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Package</TableCell>
              <TableCell>Video Link</TableCell>
              <TableCell>Suggestions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {placedStudents.map((student, index) => (
              <TableRow key={index}>
                <TableCell>{student.companyName}</TableCell>
                <TableCell>{student.studentName}</TableCell>
                <TableCell>{student.packageDetails}</TableCell>
                <TableCell>
                  <a href={student.videoLink} target="_blank" rel="noopener noreferrer">{student.videoLink}</a>
                </TableCell>
                <TableCell>{student.suggestions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default PlacedStudentsDashboard;
