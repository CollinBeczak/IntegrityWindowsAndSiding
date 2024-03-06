import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";
import slide1 from "../assets//slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

interface Service {
  name: string;
  description: string;
  images: any;
}

const services: Service[] = [
  {
    name: "Integrity's Premium Services",
    description:
      "Exclusive Alside dealer offering lifetime warranty custom measured-to-fit Premium Vinyl Window & Patio door installation, " +
      "Premium Vinyl Siding installation, Premium Roofing, decking, and patio Builds.",
    images: [slide1, slide2, slide3],
  },
];

const ServiceCards: React.FC = () => {
  const settings = {
    infinite: true,
    accessibility: false,
    arrows: false,
    autoplay: true,
    swipeToSlide: false,
    dots: false,
    draggable: false,
    swipe: false,
    sync: true,
    speed: 2400,
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
              {service.images.map((image: any, index: any) => (
                <Box key={index}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: 400,
                    }}
                  >
                    <Image
                      src={image}
                      placeholder="blur"
                      alt={`Image ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                    />
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
                padding: 6,
                paddingX: { xs: 2, md: 4 },
                zIndex: 1,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  width: "100%",
                  height: "100%",
                  maxWidth: 1000,
                  padding: 3,
                  borderRadius: "20px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: 20, sm: 28 },
                      fontFamily: "Geologica, sans-serif",
                      fontWeight: 700,
                      textShadow: "0px 0px 4px rgba(255,255,255,1)",
                    }}
                    color="primary"
                    mb={2}
                    textAlign="center"
                  >
                    {service.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 14, sm: 18 },
                      fontWeight: 400,
                      maxWidth: 600,
                      margin: "auto",
                      textShadow: "0px 0px 4px rgba(255,255,255,1)",
                    }}
                    color="black"
                  >
                    {service.description}
                  </Typography>
                  <Box>
                    <Box sx={{ marginY: 2 }}>
                      <Button href="/services" variant="contained" sx={{ color: "white" }}>
                        <Typography
                          sx={{
                            fontSize: { xs: 11, sm: 13 },
                            fontWeight: 900,
                          }}
                        >
                          Learn More
                        </Typography>
                      </Button>
                    </Box>
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
