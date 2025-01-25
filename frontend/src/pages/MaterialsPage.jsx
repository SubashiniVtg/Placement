import React from "react";
import { Container, Typography, Grid, Button, Paper, Box } from "@mui/material";
import { Link } from "react-router-dom";

const MaterialsPage = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
      <Paper elevation={3} style={{ padding: "2rem", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Placement Preparation Materials
        </Typography>
        <Typography variant="subtitle1" style={{ marginBottom: "1.5rem" }}>
          Here you can find various materials and resources to help you with your placement preparation.
        </Typography>

        {/* Aptitude Section */}
        <Box style={{ marginBottom: "2rem" }}>
          <Typography variant="h5" gutterBottom>
            Aptitude Preparation
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                component={Link}
                to="https://www.geeksforgeeks.org/aptitude-questions-and-answers/"
                target="_blank"
              >
                GeeksforGeeks Aptitude Questions
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                component={Link}
                to="https://www.indiabix.com/"
                target="_blank"
              >
                IndiaBix Aptitude Practice
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Programming Section */}
        <Box style={{ marginBottom: "2rem" }}>
          <Typography variant="h5" gutterBottom>
            Programming Resources
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                component={Link}
                to="https://leetcode.com/"
                target="_blank"
              >
                LeetCode
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                component={Link}
                to="https://www.hackerrank.com/domains/tutorials/10-days-of-javascript"
                target="_blank"
              >
                HackerRank JavaScript Tutorials
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Interview Preparation Section */}
        <Box style={{ marginBottom: "2rem" }}>
          <Typography variant="h5" gutterBottom>
            Interview Preparation
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                component={Link}
                to="https://www.careercup.com/"
                target="_blank"
              >
                CareerCup Interview Questions
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                component={Link}
                to="https://www.interviewbit.com/courses/"
                target="_blank"
              >
                InterviewBit Courses
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Add more resources as needed */}

      </Paper>
    </Container>
  );
};

export default MaterialsPage;
