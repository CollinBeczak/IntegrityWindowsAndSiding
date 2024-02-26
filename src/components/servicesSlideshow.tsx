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
  images: any;
}

const services: Service[] = [
  {
    name: "Premium Services",
    description:
      "Exclusive Alside dealer offering lifetime warranty custom measured-to-fit Premium Vinyl Window & Patio door installation, " +
      "Premium Vinyl Siding installation, Premium Roofing, decking, and patio Builds.",
    images: [windowBefore1, windowBefore2, windowBefore3, windowAfter1, windowAfter2, windowAfter3],
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
                padding: 4,
                paddingX: { xs: 2, md: 4 },
                paddingBottom: 6,
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
