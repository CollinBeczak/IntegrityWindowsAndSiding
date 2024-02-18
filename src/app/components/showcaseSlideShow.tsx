import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";
import windowBefore1 from "../assets/windows/Alside_Casement_Beauty4.jpg";
import windowBefore2 from "../assets/windows/Alside_Casement_Beauty5.jpg";
import windowBefore3 from "../assets/windows/Alside_Casement_Beauty6.jpg";
import windowAfter1 from "../assets/windows/Alside_Mezzo_Slider_Beauty2.jpg";
import windowAfter2 from "../assets/windows/Alside_Promenade_ClassicBeauty2.jpg";
import windowAfter3 from "../assets/windows/Alside_Promenade_ContemporaryBeauty.jpg";

interface Service {
  name: string;
  description: string;
  images: { before: any; after: any }[];
}

const services: Service[] = [
  {
    name: "Showcase",
    description: "High-quality window replacement services.",
    images: [
      { before: windowBefore1, after: windowAfter1 },
      { before: windowBefore2, after: windowAfter2 },
      { before: windowBefore3, after: windowAfter3 },
    ],
  },
];

const ServiceCards: React.FC = () => {
  const settings = {
    infinite: true,
    accessibility: false,
    arrows: false,
    autoplay: true,
    dots: false,
    sync: true,
    speed: 3000,
    autoplaySpeed: 12000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {services.map((service, serviceIndex) => (
        <Box key={serviceIndex}>
          <Box position="relative">
            <Slider {...settings}>
              {service.images.map((image, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    display: "flex",

                    position: "relative",
                    height: 400,
                  }}
                >
                  <Box height="100%" sx={{ display: { md: "flex" } }}>
                    <Box
                      sx={{
                        position: "relative",
                        width: { xs: "100%", md: "50%" },
                        height: { xs: "50%", md: "100%" },
                      }}
                    >
                      <Image
                        src={image.before}
                        alt="Before"
                        layout="fill"
                        objectFit="cover"
                        loading="eager"
                      />
                    </Box>
                    <Box
                      sx={{
                        position: "relative",
                        width: { xs: "100%", md: "50%" },
                        height: { xs: "50%", md: "100%" },
                      }}
                    >
                      <Image
                        src={image.after}
                        alt="After"
                        layout="fill"
                        objectFit="cover"
                        loading="eager"
                      />
                    </Box>
                  </Box>
                </Box>
              ))}
            </Slider>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 4,
                paddingX: { xs: 2, md: 4 },
                paddingBottom: 6,
                zIndex: 1,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  width: "100%",
                  height: "100%",
                  maxWidth: 1200,
                  padding: 3,
                  borderRadius: "20px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="h3" color="primary" mb={2} textAlign="center">
                    {service.name}
                  </Typography>
                  <Typography variant="h6" color="black">
                    {service.description}
                  </Typography>
                </Box>
                <Box>
                  <Box sx={{ marginBottom: 2 }}>
                    <Button variant="contained" sx={{ color: "white" }}>
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ServiceCards;
