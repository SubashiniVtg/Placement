


import React from "react";
import { Container, Typography, Button, Grid, Paper, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

// Styled components using MUI's `styled` API
const Root = styled(Container)(({ theme }) => ({
  marginTop: "2rem",
  padding: "2rem",
  textAlign: "center",
  backgroundColor: "#f7f7f7",
  borderRadius: "8px",
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#1976d2",
  marginBottom: "1rem",
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  marginBottom: "2rem",
  color: "#555",
}));

const CollegeInfo = styled(Box)(({ theme }) => ({
  backgroundColor: "#e3f2fd",
  padding: "1.5rem",
  borderRadius: "8px",
  marginBottom: "2rem",
}));

const CollegeLogo = styled("img")({
  width: "100%",
  maxWidth: "300px",
  borderRadius: "8px",
});

const CollegeDetails = styled(Typography)(({ theme }) => ({
  marginTop: "1rem",
  textAlign: "left",
}));

const ButtonGroup = styled(Grid)(({ theme }) => ({
  marginTop: "1rem",
}));

const Home = () => {
  return (
    <Root maxWidth="lg">
      <Paper elevation={3} style={{ padding: "2rem", textAlign: "center" }}>
        <Heading variant="h4" gutterBottom>
          Welcome to the Placement Portal
        </Heading>
        <SubHeading variant="subtitle1">
          Streamline your college placement experience with our efficient platform.
        </SubHeading>

        {/* College Details Section */}
        <CollegeInfo>
          <Typography variant="h5" gutterBottom>
            About Velammal College of Engineering and Technology
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <CollegeLogo
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzBMUfncnzXp7NNmO7gh_FUCb5Rw7pL7xPqA&s" // Replace with actual logo URL
                alt="Velammal College Logo"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CollegeDetails variant="body1">
                Velammal College of Engineering and Technology, established in 2008, is a renowned educational institution located in Madurai, Tamil Nadu. It offers a wide range of undergraduate and postgraduate courses in engineering and technology. The college is committed to providing high-quality education, fostering innovation, and ensuring that students are well-prepared for successful careers.
              </CollegeDetails>
              <CollegeDetails variant="body1">
                The college is equipped with state-of-the-art infrastructure and industry partnerships to ensure that students are industry-ready by the time they graduate.
              </CollegeDetails>
            </Grid>
          </Grid>
        </CollegeInfo>

       
        

        {/* Register Button */}
        <Grid item>
          <Button variant="contained" color="secondary" component={Link} to="/student-registration">
            Register as Student
          </Button>
        </Grid>
      </Paper>
    </Root>
  );
};

export default Home;
