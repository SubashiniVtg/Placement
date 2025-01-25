// import React from "react";
// import { Container, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";

// const StudentDashboard = () => {
//   return (
//     <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
//       <Paper elevation={3} style={{ padding: "1.5rem" }}>
//         <Typography variant="h4" gutterBottom>
//           Student Dashboard
//         </Typography>
//         <List>
//           <ListItem>
//             <ListItemText primary="Name" />
//           </ListItem>
//           <ListItem>
//             <ListItemText primary="CGPA"/>
//           </ListItem>
//           <ListItem>
//             <ListItemText primary="Skills" />
//           </ListItem>
//         </List>
//       </Paper>
//     </Container>
//   );
// };

// export default StudentDashboard;

import React from "react";
import { Container, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";

const StudentDashboard = ({ studentData }) => {
  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Paper elevation={3} style={{ padding: "1.5rem" }}>
        <Typography variant="h4" gutterBottom>
          Student Dashboard
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Name" secondary={studentData.name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="CGPA" secondary={studentData.cgpa} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Skills" secondary={studentData.skills} />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default StudentDashboard;

