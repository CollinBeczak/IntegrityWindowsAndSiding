import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";
import slide1 from "../assets//Alside_Promenade_ContemporaryBeauty.jpg";
import slide2 from "../assets/Alside_SatinwoodSelect_Beauty3.jpg";
import slide3 from "../assets/deck.jpg";

interface Service {
  name: string;
  description: string;
  images: any;
}

const services: Service[] = [
  {
    name: "Premium Services",
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
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  width: "100%",
                  height: "100%",
                  maxWidth: 1000,
                  padding: 3,
                  borderRadius: "20px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "h5.fontSize", sm: "h4.fontSize" },
                      fontWeight: { xs: "h5.fontWeight", sm: "h4.fontWeight" },
                    }}
                    color="primary"
                    mb={2}
                    textAlign="center"
                  >
                    {service.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "subtitle1.fontSize", sm: "h6.fontSize", md: "h5.fontSize" },
                      fontWeight: {
                        xs: "subtitle1.fontWeight",
                        sm: "h6.fontWeight",
                        md: "h5.fontSize",
                      },
                    }}
                    color="black"
                  >
                    {service.description}
                  </Typography>
                </Box>
                <Box>
                  <Box sx={{ marginY: 2 }}>
                    <Button href="/services" variant="contained" sx={{ color: "white" }}>
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
