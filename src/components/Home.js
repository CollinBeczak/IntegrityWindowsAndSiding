import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <Box>
      {" "}
      <Box
        sx={{
          position: "relative",
          height: "85vh",
          textAlign: "center",
          color: "white",
          overflow: "hidden",
          backgroundImage: `url(${require("./../Assets/filler-house-img.jpeg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mb: 20,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" gutterBottom>
            Integrity Siding and Windows
          </Typography>
          <Typography variant="h5" gutterBottom>
            Located in Kansas, we specialize in replacing siding and windows and other services.
          </Typography>
          <Box sx={{ margin: 1, display: "flex" }}>
            <Button variant="outlined" color="primary" sx={{ margin: 1, display: "flex" }}>
              View all services
            </Button>
            <Button variant="contained" color="primary" sx={{ margin: 1 }}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>About us</Box>
      <Box>jbasdklf kja sdkjf klaj dskljfkjla dsljfkjadskjflka dslkjfjklads kljf lkjadsf</Box>
      <Box>Our services</Box>
      <Box>windows</Box>
      <Box>siding</Box>
      <Box>doors</Box>
      <Box>gutters</Box>
      <Box>trim</Box>
      <Box>Roofing</Box>
    </Box>
  );
};

export default Home;
