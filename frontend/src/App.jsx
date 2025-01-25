// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Home from "./pages/Home";
// // import AdminDashboard from "./pages/AdminDashboard";
// // import StudentDashboard from "./pages/StudentDashboard";
// // import StudentRegistration from "./pages/StudentRegistration";

// // const App = () => {
// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/admin-dashboard" element={<AdminDashboard />} />
// //         <Route path="/student-dashboard" element={<StudentDashboard />} />
// //         <Route path="/student-registration" element={<StudentRegistration />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import AdminDashboard from "./pages/AdminDashboard";
// import StudentDashboard from "./pages/StudentDashboard";
// import StudentRegistration from "./pages/StudentRegistration";
// import PlacedStudentsDashboard from "./pages/PlacedStudentsDashboard";
// import MaterialsPage from "./pages/MaterialsPage" ;// Placed Students Dashboard

// const App = () => {
//   const [studentData, setStudentData] = useState(null); // Store the student data
//   const [placedStudents, setPlacedStudents] = useState([]); // Store the placed students' data

//   // Function to handle form submission from StudentRegistration
//   const handleStudentDataSubmit = (data) => {
//     setStudentData(data); // Update the state with the student data
//   };

//   // Function to handle adding a placed student
//   const handlePlacedStudentSubmit = (data) => {
//     setPlacedStudents((prev) => [...prev, data]); // Add new placed student to the array
//   };

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />

//         {/* Student Dashboard route: Passed data will be shown here */}
//         <Route 
//           path="/student-dashboard" 
//           element={studentData ? <StudentDashboard studentData={studentData} /> : <Navigate to="/student-registration" />} 
//         />

//         {/* Student Registration route: Form will be here */}
//         <Route 
//           path="/student-registration" 
//           element={<StudentRegistration onSubmit={handleStudentDataSubmit} />} 
//         />
        
//         {/* Placed Students Dashboard route: Shows placed students and allows uploading videos */}
//         <Route 
//           path="/placed-students-dashboard" 
//           element={
//             <PlacedStudentsDashboard 
//               placedStudents={placedStudents} 
//               onPlacedStudentSubmit={handlePlacedStudentSubmit} 
//             />
//           }
//         />
//       </Routes>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/materials" element={<MaterialsPage />} /> {/* New route */}
//         {/* Add other routes as needed */}
//       </Routes>
    
//     </Router>
//   );
// };

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import StudentRegistration from "./pages/StudentRegistration";
import PlacedStudentsDashboard from "./pages/PlacedStudentsDashboard";
import MaterialsPage from "./pages/MaterialsPage"; // Materials Page route

const App = () => {
  const [studentData, setStudentData] = useState(null); // Store the student data
  const [placedStudents, setPlacedStudents] = useState([]); // Store the placed students' data

  // Function to handle form submission from StudentRegistration
  const handleStudentDataSubmit = (data) => {
    setStudentData(data); // Update the state with the student data
  };

  // Function to handle adding a placed student
  const handlePlacedStudentSubmit = (data) => {
    setPlacedStudents((prev) => [...prev, data]); // Add new placed student to the array
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* Student Dashboard route: Passed data will be shown here */}
        <Route
          path="/student-dashboard"
          element={
            studentData ? (
              <StudentDashboard studentData={studentData} />
            ) : (
              <Navigate to="/student-registration" />
            )
          }
        />

        {/* Student Registration route: Form will be here */}
        <Route
          path="/student-registration"
          element={<StudentRegistration onSubmit={handleStudentDataSubmit} />}
        />

        {/* Placed Students Dashboard route: Shows placed students */}
        <Route
          path="/placed-students-dashboard"
          element={
            <PlacedStudentsDashboard
              placedStudents={placedStudents}
              onPlacedStudentSubmit={handlePlacedStudentSubmit}
            />
          }
        />

        {/* Materials Page route: Shows links to study materials */}
        <Route path="/materials" element={<MaterialsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
