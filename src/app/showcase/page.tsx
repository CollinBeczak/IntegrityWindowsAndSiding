"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import houseImage from "../../assets/windows/casement2.jpg";
import ShowcaseCards from "../../components/serviceShowcase";

const Showcase = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: "20vh",
          textAlign: "center",
          color: "white",
          overflow: "hidden",
        }}
      >
        <Image
          src={houseImage}
          alt="image"
          fill
          style={{ objectFit: "cover" }}
          placeholder="blur"
          loading="lazy"
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textShadow: "3px 1.5px 3px rgba(0,0,0,1)",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: 900, fontFamily: "Comfortaa, sans-serif" }}
          >
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
