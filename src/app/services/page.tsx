"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import houseImage from "../assets/windows/Alside_Awning_Beauty3.jpg";

const Services = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: "50vh",
          textAlign: "center",
          color: "white",
          overflow: "hidden",
          mb: 80,
        }}
      >
        <Image src={houseImage} alt="image" layout="fill" objectFit="cover" />
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
            Services
          </Typography>
          <Typography variant="h5" gutterBottom>
            Specializing in Services
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
