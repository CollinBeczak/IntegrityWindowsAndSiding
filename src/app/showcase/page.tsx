"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import houseImage from "../../assets/windows/Alside_Awning_Beauty3.jpg";
import ShowcaseCards from "../../components/serviceShowcase";

const Showcase = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: "30vh",
          textAlign: "center",
          color: "white",
          overflow: "hidden",
        }}
      >
        <Image src={houseImage} alt="image" layout="fill" objectFit="cover" loading="lazy" />
        <Box
          sx={{
            position: "absolute",
            top: 10,
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
            Showcase
          </Typography>
        </Box>
      </Box>
      <Box>
        <ShowcaseCards />
      </Box>
    </Box>
  );
};

export default Showcase;
