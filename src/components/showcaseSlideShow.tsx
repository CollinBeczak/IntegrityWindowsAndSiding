import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";
import windowBefore1 from "../assets/windows/8.jpg";
import windowAfter1 from "../assets/windows/10.jpg";
import sidingAfter1 from "../assets/other/2.jpg";
import sidingBefore1 from "../assets/siding/4.jpg";

const services = [
  {
    name: "Integrity's Showcase",
    images: [
      { before: windowBefore1, after: windowAfter1 },
      { before: sidingBefore1, after: sidingAfter1 },
    ],
  },
];

const ServiceCards: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    new Array(services[0].images.length).fill(false),
  );

  const settings = {
    infinite: true,
    accessibility: false,
    arrows: false,
    autoplay: true,
    swipeToSlide: false,
    dots: false,
    sync: true,
    draggable: false,
    swipe: false,
    speed: 2400,
    autoplaySpeed: 12000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => handleSlideChange(index),
  };

  const handleSlideChange = (index: number) => {
    const newLoadedImages = [...loadedImages];
    newLoadedImages[index] = true;
    setLoadedImages(newLoadedImages);
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
                        placeholder="blur"
                        fill
                        style={{ objectFit: "cover" }}
                        loading="lazy"
                        onLoad={() => handleSlideChange(index)}
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
                        placeholder="blur"
                        fill
                        style={{ objectFit: "cover" }}
                        loading={loadedImages[index] ? "eager" : "lazy"}
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
                zIndex: 1,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  width: "auto",
                  maxWidth: "auto",
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
                    color="primary"
                    mb={2}
                    mx={2}
                    sx={{
                      fontSize: { xs: "h5.fontSize", sm: "h4.fontSize" },
                      fontWeight: 500,
                      fontFamily: "Geologica, sans-serif",
                    }}
                    textAlign="center"
                  >
                    {service.name}
                  </Typography>
                  <Box>
                    <Button
                      href="/showcase"
                      variant="contained"
                      sx={{ color: "white", paddingX: 3, paddingY: 1 }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: 11, sm: 13 },
                          fontWeight: 900,
                        }}
                      >
                        Check out our work
                      </Typography>
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
