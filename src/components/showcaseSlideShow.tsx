import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";
import windowBefore1 from "../assets/windows/Alside_Casement_Beauty4.jpg";
import windowBefore2 from "../assets/windows/Alside_Casement_Beauty5.jpg";
import windowBefore3 from "../assets/windows/Alside_Casement_Beauty6.jpg";
import windowAfter1 from "../assets/windows/Alside_Mezzo_Slider_Beauty2.jpg";
import windowAfter2 from "../assets/windows/Alside_Promenade_ClassicBeauty2.jpg";
import windowAfter3 from "../assets/windows/Alside_Promenade_ContemporaryBeauty.jpg";

const services = [
  {
    name: "OUR SHOWCASE",
    images: [
      { before: windowBefore1, after: windowAfter1 },
      { before: windowBefore2, after: windowAfter2 },
      { before: windowBefore3, after: windowAfter3 },
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
    speed: 3000,
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
                      fontWeight: "bold",
                      fontFamily: "Comfortaa, sans-serif",
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
                      Check out our work
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
