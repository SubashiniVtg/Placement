// // import React, { useState, useEffect } from "react";
// // import { Container, Typography, TextField, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

// // const AdminDashboard = () => {
// //   const [students, setStudents] = useState([]);
// //   const [search, setSearch] = useState("");

// //   // Fetch students (mock data for now)
// //   useEffect(() => {
// //     setStudents([
// //       { id: 1, name: "Alice", cgpa: 9.0, skills: "React, Node.js" },
// //       { id: 2, name: "Bob", cgpa: 8.5, skills: "Java, Spring Boot" },
// //     ]);
// //   }, []);

// //   // Filter students based on the search
// //   const filteredStudents = students.filter((student) =>
// //     student.name.toLowerCase().includes(search.toLowerCase())
// //   );

// //   return (
// //     <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
// //       <Typography variant="h4" gutterBottom>
// //         Admin Dashboard
// //       </Typography>
// //       <TextField
// //         label="Search by Name"
// //         variant="outlined"
// //         fullWidth
// //         margin="normal"
// //         value={search}
// //         onChange={(e) => setSearch(e.target.value)}
// //       />
// //       <Paper elevation={3} style={{ marginTop: "1rem" }}>
// //         <Table>
// //           <TableHead>
// //             <TableRow>
// //               <TableCell>Name</TableCell>
// //               <TableCell>CGPA</TableCell>
// //               <TableCell>Skills</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {filteredStudents.map((student) => (
// //               <TableRow key={student.id}>
// //                 <TableCell>{student.name}</TableCell>
// //                 <TableCell>{student.cgpa}</TableCell>
// //                 <TableCell>{student.skills}</TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </Paper>
// //     </Container>
// //   );
// // };

// // export default AdminDashboard;

// // import React, { useState, useEffect } from "react";
// // import { Container, Typography, TextField, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

// // const AdminDashboard = () => {
// //   const [students, setStudents] = useState([]);
// //   const [search, setSearch] = useState("");

// //   // Fetch students from localStorage
// //   useEffect(() => {
// //     const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
// //     setStudents(storedStudents);
// //   }, []);

// //   // Filter students based on the search input
// //   const filteredStudents = students.filter((student) =>
// //     student.name.toLowerCase().includes(search.toLowerCase())
// //   );

// //   return (
// //     <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
// //       <Typography variant="h4" gutterBottom>
// //         Admin Dashboard
// //       </Typography>
// //       <TextField
// //         label="Search by Name"
// //         variant="outlined"
// //         fullWidth
// //         margin="normal"
// //         value={search}
// //         onChange={(e) => setSearch(e.target.value)}
// //       />
// //       <Paper elevation={3} style={{ marginTop: "1rem" }}>
// //         <Table>
// //           <TableHead>
// //             <TableRow>
// //               <TableCell>Name</TableCell>
// //               <TableCell>CGPA</TableCell>
// //               <TableCell>Skills</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {filteredStudents.map((student) => (
// //               <TableRow key={student.name}>
// //                 <TableCell>{student.name}</TableCell>
// //                 <TableCell>{student.cgpa}</TableCell>
// //                 <TableCell>{student.skills}</TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </Paper>
// //     </Container>
// //   );
// // };

// // export default AdminDashboard;
// // import React, { useState, useEffect } from "react";
// // import { Container, Typography, TextField, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

// // const AdminDashboard = () => {
// //   const [students, setStudents] = useState([]);
// //   const [searchName, setSearchName] = useState("");
// //   const [searchCgpa, setSearchCgpa] = useState("");
// //   const [searchSkills, setSearchSkills] = useState("");

// //   // Fetch students from localStorage
// //   useEffect(() => {
// //     const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
// //     setStudents(storedStudents);
// //   }, []);

// //   // Filter students based on the search inputs for Name, CGPA, and Skills
// //   const filteredStudents = students.filter((student) => {
// //     const isNameMatch = student.name.toLowerCase().includes(searchName.toLowerCase());
// //     const isCgpaMatch = searchCgpa ? student.cgpa.toString().includes(searchCgpa) : true;
// //     const isSkillsMatch = searchSkills ? student.skills.toLowerCase().includes(searchSkills.toLowerCase()) : true;
    
// //     return isNameMatch && isCgpaMatch && isSkillsMatch;
// //   });

// //   return (
// //     <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
// //       <Typography variant="h4" gutterBottom>
// //         Admin Dashboard
// //       </Typography>

// //       {/* Search Filters */}
// //       <Grid container spacing={3}>
// //         <Grid item xs={12} sm={4}>
// //           <TextField
// //             label="Search by Name"
// //             variant="outlined"
// //             fullWidth
// //             value={searchName}
// //             onChange={(e) => setSearchName(e.target.value)}
// //           />
// //         </Grid>
// //         <Grid item xs={12} sm={4}>
// //           <TextField
// //             label="Search by CGPA"
// //             variant="outlined"
// //             fullWidth
// //             value={searchCgpa}
// //             onChange={(e) => setSearchCgpa(e.target.value)}
// //           />
// //         </Grid>
// //         <Grid item xs={12} sm={4}>
// //           <TextField
// //             label="Search by Skills"
// //             variant="outlined"
// //             fullWidth
// //             value={searchSkills}
// //             onChange={(e) => setSearchSkills(e.target.value)}
// //           />
// //         </Grid>
// //       </Grid>

// //       {/* Table Displaying Students */}
// //       <Paper elevation={3} style={{ marginTop: "1rem" }}>
// //         <Table>
// //           <TableHead>
// //             <TableRow>
// //               <TableCell>Name</TableCell>
// //               <TableCell>CGPA</TableCell>
// //               <TableCell>Skills</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {filteredStudents.map((student) => (
// //               <TableRow key={student.name}>
// //                 <TableCell>{student.name}</TableCell>
// //                 <TableCell>{student.cgpa}</TableCell>
// //                 <TableCell>{student.skills}</TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </Paper>
// //     </Container>
// //   );
// // };

// // export default AdminDashboard;
// import React, { useState, useEffect } from "react";
// import { Container, Typography, TextField, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

// const AdminDashboard = () => {
//   const [students, setStudents] = useState([]);
//   const [searchName, setSearchName] = useState("");
//   const [searchCgpa, setSearchCgpa] = useState("");
//   const [searchSkills, setSearchSkills] = useState("");

//   // Fetch students from localStorage
//   useEffect(() => {
//     const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
//     setStudents(storedStudents);
//   }, []);

//   // Filter students based on the search inputs for Name, CGPA, and Skills
//   const filteredStudents = students.filter((student) => {
//     const isNameMatch = student.name.toLowerCase().includes(searchName.toLowerCase());
//     const isCgpaMatch =
//       searchCgpa
//         ? student.cgpa.toString().includes(searchCgpa) // Ensure both are strings for partial match
//         : true;
//     const isSkillsMatch = searchSkills
//       ? student.skills.toLowerCase().includes(searchSkills.toLowerCase())
//       : true;

//     return isNameMatch && isCgpaMatch && isSkillsMatch;
//   });

//   return (
//     <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
//       <Typography variant="h4" gutterBottom>
//         Admin Dashboard
//       </Typography>

//       {/* Search Filters */}
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             label="Search by Name"
//             variant="outlined"
//             fullWidth
//             value={searchName}
//             onChange={(e) => setSearchName(e.target.value)}
//           />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             label="Search by CGPA"
//             variant="outlined"
//             fullWidth
//             value={searchCgpa}
//             onChange={(e) => setSearchCgpa(e.target.value)}
//             type="number"
//           />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             label="Search by Skills"
//             variant="outlined"
//             fullWidth
//             value={searchSkills}
//             onChange={(e) => setSearchSkills(e.target.value)}
//           />
//         </Grid>
//       </Grid>

//       {/* Table Displaying Students */}
//       <Paper elevation={3} style={{ marginTop: "1rem" }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>CGPA</TableCell>
//               <TableCell>Skills</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredStudents.map((student) => (
//               <TableRow key={student.name}>
//                 <TableCell>{student.name}</TableCell>
//                 <TableCell>{student.cgpa}</TableCell>
//                 <TableCell>{student.skills}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>
//     </Container>
//   );
// };

// export default AdminDashboard;
import React, { useState, useEffect } from "react";
import { Container, Typography, TextField, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchCgpa, setSearchCgpa] = useState("");
  const [searchSkills, setSearchSkills] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Default username and password
  const defaultUsername = "admin";
  const defaultPassword = "password123";

  // Check login credentials
  const handleLogin = () => {
    if (username === defaultUsername && password === defaultPassword) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  // Fetch students from localStorage
  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(storedStudents);
  }, []);

  // Filter students based on the search inputs for Name, CGPA, and Skills
  const filteredStudents = students.filter((student) => {
    const isNameMatch = student.name.toLowerCase().includes(searchName.toLowerCase());
    const isCgpaMatch =
      searchCgpa
        ? student.cgpa.toString().includes(searchCgpa) // Ensure both are strings for partial match
        : true;
    const isSkillsMatch = searchSkills
      ? student.skills.toLowerCase().includes(searchSkills.toLowerCase())
      : true;

    return isNameMatch && isCgpaMatch && isSkillsMatch;
  });

  return (
    <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
      {!isLoggedIn ? (
        // Login Form
        <div>
          <Typography variant="h4" gutterBottom>
            Admin Login
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleLogin} style={{ marginTop: "1rem" }}>
            Login
          </Button>
        </div>
      ) : (
        // Admin Dashboard
        <div>
          <Typography variant="h4" gutterBottom>
            Admin Dashboard
          </Typography>

          {/* Search Filters */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Search by Name"
                variant="outlined"
                fullWidth
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Search by CGPA"
                variant="outlined"
                fullWidth
                value={searchCgpa}
                onChange={(e) => setSearchCgpa(e.target.value)}
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Search by Skills"
                variant="outlined"
                fullWidth
                value={searchSkills}
                onChange={(e) => setSearchSkills(e.target.value)}
              />
            </Grid>
          </Grid>

          {/* Table Displaying Students */}
          <Paper elevation={3} style={{ marginTop: "1rem" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>CGPA</TableCell>
                  <TableCell>Skills</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.name}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.cgpa}</TableCell>
                    <TableCell>{student.skills}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      )}
    </Container>
  );
};

export default AdminDashboard;
