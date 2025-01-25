// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <AppBar position="static" style={{ backgroundColor: "#2E3B55" }}>
//       <Toolbar>
//         <Typography variant="h6" style={{ flexGrow: 1 }}>
//           Placement Portal
//         </Typography>
//         <Button color="inherit" component={Link} to="/">
//           Home
//         </Button>
//         <Button color="inherit" component={Link} to="/admin-dashboard">
//           Admin Dashboard
//         </Button>
//         <Button color="inherit" component={Link} to="/student-dashboard">
//           Student Dashboard
//         </Button>
//         <Button color="inherit" component={Link} to="/student-registration">
//         Register
//           </Button>

//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#2E3B55" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Placement Portal
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/admin-dashboard">
          Admin Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/student-dashboard">
          Student Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/student-registration">
          Register
        </Button>

        {/* Placement Section */}
        <Button color="inherit" component={Link} to="/placed-students-dashboard">
          Placed Students
        </Button>
         <Button color="inherit" component={Link} to="/materials">
          Materials
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
