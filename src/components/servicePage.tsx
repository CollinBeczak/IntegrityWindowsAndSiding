"use client";

import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Service {
  name: string;
  description: string;
  images: any;
}

interface Page {
  title: string;
  titleImage: any;
  description: string;
  learnMore: boolean;
  types: Service[];
}

interface ServicesPageProps {
  page: Page;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ page }) => {
  const settings = {
    infinite: true,
    accessibility: false,
    arrows: false,
    autoplay: true,
    swipeToSlide: false,
    dots: false,
    sync: true,
    speed: 3000,
    autoplaySpeed: 12000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
  };

  return (
    <Box>
      <Box
        id="top"
        sx={{
          position: "relative",
          height: "650px",
          textAlign: "center",
          color: "white",
          overflow: "hidden",
          mb: 2,
          mt: { xs: 0, md: 0 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={page.titleImage}
          alt="image"
          fill
          style={{ objectFit: "cover" }}
          priority={true}
        />
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
            padding: "0 20px",
          }}
        >
          <Box maxWidth={1200}>
            <Typography variant="h3" gutterBottom>
              {page.title}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {page.description}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box px={2}>
        <Box>
          {page.types.map((service, index) => (
            <Box key={index} width={1} mb={5}>
              <Box
                id={service.name.toLowerCase().replace(/[^a-zA-Z0-9#]+/g, "_")}
                sx={{
                  position: "relative",
                  top: "-124px", // Adjust this value to change the offset
                }}
              ></Box>
              <Box
                id={service.name.replace(/\s+/g, "-").toLowerCase()}
                data-testid={service.name.replace(/\s+/g, "-").toLowerCase()}
                margin="auto"
                marginY={10}
                maxWidth={1200}
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                <Box sx={{ display: { md: "flex" } }}>
                  <Box width={"100%"} maxWidth={500} height={300} margin={"auto"}>
                    <Slider {...settings}>
                      {service.images.map((image: any, index: any) => (
                        <Box
                          key={index}
                          sx={{
                            position: "relative",
                            width: "100%",
                            height: 300,
                          }}
                        >
                          <Image
                            src={image}
                            alt={`Image ${index + 1}`}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            loading="lazy"
                          />
                        </Box>
                      ))}
                    </Slider>
                  </Box>
                  <Box
                    textAlign="center"
                    sx={{ ml: { md: 2 }, textAlign: { xs: "center", md: "left" } }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "h5.fontSize", sm: "h4.fontSize" },
                        marginTop: { xs: 2, md: 0 },
                        textAlign: { xs: "center", md: "left" },
                      }}
                      gutterBottom
                    >
                      {service.name}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      {service.description}
                    </Typography>
                    {page.learnMore && (
                      <Box sx={{ marginY: 2 }}>
                        <Button
                          href={`/services/${service.name
                            .toLowerCase()
                            .replace(/- /g, "premium_vinyl_siding#")
                            .replace(/[^a-zA-Z0-9#]+/g, "_")}`}
                          variant="contained"
                          sx={{ color: "white" }}
                        >
                          Learn More
                        </Button>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesPage;
