import React, { useState } from "react";
import { Box, Grid, Divider, Typography, Modal, Fade, IconButton } from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import sidingBefore1 from "../assets/siding/before1.jpg";
import sidingAfter1 from "../assets/siding/after1.jpg";
import windowBefore1 from "../assets/windows/before1.jpg";
import windowAfter1 from "../assets/windows/after1.jpg";
import outdoor1 from "../assets/outdoor/1.jpg";
import outdoor2 from "../assets/outdoor/2.jpg";
import outdoor3 from "../assets/outdoor/3.jpg";
import outdoor4 from "../assets/outdoor/4.jpg";
import outdoor5 from "../assets/outdoor/5.jpg";
import outdoor6 from "../assets/outdoor/6.jpg";
import outdoor7 from "../assets/outdoor/7.jpg";
import outdoor8 from "../assets/outdoor/8.jpg";
import outdoor9 from "../assets/outdoor/9.jpg";
import outdoor10 from "../assets/outdoor/10.jpg";
import window1 from "../assets/windows/1.jpg";
import window2 from "../assets/windows/2.jpg";
import window3 from "../assets/windows/3.jpg";
import window4 from "../assets/windows/4.jpg";
import window5 from "../assets/windows/5.jpg";
import window6 from "../assets/windows/6.jpg";
import window7 from "../assets/windows/7.jpg";
import window8 from "../assets/windows/8.jpg";
import window9 from "../assets/windows/9.jpg";
import window10 from "../assets/windows/10.jpg";
// import roof1 from "../assets/roofing/1.jpg";
// import roof2 from "../assets/roofing/2.jpg";
// import roof3 from "../assets/roofing/3.jpg";
// import roof4 from "../assets/roofing/4.jpg";
// import roof5 from "../assets/roofing/5.jpg";
// import roof6 from "../assets/roofing/6.jpg";
// import roof7 from "../assets/roofing/7.jpg";
// import roof8 from "../assets/roofing/8.jpg";
// import roof9 from "../assets/roofing/9.jpg";
// import roof10 from "../assets/roofing/9.jpg";
import siding1 from "../assets/siding/1.jpg";
import siding2 from "../assets/siding/2.jpg";
import siding3 from "../assets/siding/3.jpg";
import siding4 from "../assets/siding/4.jpg";
import siding5 from "../assets/siding/5.jpg";
import siding6 from "../assets/siding/6.jpg";
import siding7 from "../assets/siding/7.jpg";
import siding8 from "../assets/siding/8.jpg";

const services = [
  {
    name: "Premium Vinyl Window",
    description: "High-quality window replacement services.",
    progressImages: [
      { before: windowBefore1, after: windowAfter1 },
      { before: sidingBefore1, after: sidingAfter1 },
    ],
    images: [
      window1,
      window2,
      window3,
      window4,
      window5,
      window6,
      window7,
      window8,
      window9,
      window10,
    ],
  },
  {
    name: "Premium Vinyl Siding",
    description: "High-quality window replacement services.",
    progressImages: [
      { before: windowBefore1, after: windowAfter1 },
      { before: windowBefore1, after: windowAfter1 },
    ],
    images: [siding1, siding2, siding3, siding4, siding5, siding6, siding7, siding8],
  },
  // {
  //   name: "Premium Roofing",
  //   description: "High-quality window replacement services.",
  //   progressImages: [
  //     { before: sidingBefore1, after: sidingAfter1 },
  //     { before: sidingBefore1, after: sidingAfter1 },
  //   ],
  //   images: [windowAfter1, windowAfter1],
  // },
  {
    name: "Premium Outdoor Living",
    description: "High-quality window replacement services.",
    progressImages: [
      { before: windowBefore1, after: windowAfter1 },
      { before: sidingBefore1, after: sidingAfter1 },
    ],
    images: [
      outdoor1,
      outdoor2,
      outdoor3,
      outdoor4,
      outdoor5,
      outdoor6,
      outdoor7,
      outdoor8,
      outdoor9,
      outdoor10,
    ],
  },
];

const ServiceCards = () => {
  const [loadedImages, setLoadedImages] = useState(
    new Array(services[0].progressImages.length).fill(false),
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleSlideChange = (index: number) => {
    const newLoadedImages = [...loadedImages];
    newLoadedImages[index] = true;
    setLoadedImages(newLoadedImages);
  };

  const settings = {
    infinite: true,
    accessibility: false,
    arrows: false,
    autoplay: true,
    dots: true,
    sync: true,
    speed: 2400,
    autoplaySpeed: 12000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    draggable: false,
    swipe: false,
    afterChange: (index: number) => handleSlideChange(index),
  };

  const openModal = (image: any) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleImageClick = (event: any) => {
    event.stopPropagation();
  };

  return (
    <>
      {services.map((service, serviceIndex) => (
        <Box key={serviceIndex} id={service.name.replace(/\s+/g, "-").toLowerCase()}>
          <Divider
            sx={{
              marginBottom: 1,
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
            }}
          />
          <Typography variant="h4" sx={{ textAlign: "center", marginY: 2 }}>
            Integrity&apos;s {service.name}
          </Typography>
          <Box position="relative" m={2}>
            <Slider {...settings}>
              {service.progressImages.map((image, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    display: "flex",
                    position: "relative",
                    height: 400,
                    borderRadius: "16px",
                  }}
                >
                  <Box height="100%" sx={{ display: { sm: "flex" } }}>
                    <Box
                      sx={{
                        position: "relative",
                        width: { xs: "100%", sm: "50%" },
                        height: { xs: "50%", sm: "100%" },
                        paddingRight: { xs: 0, sm: 1 },
                        paddingTop: { xs: 1, sm: 0 },
                      }}
                      onClick={() => openModal(image.before)}
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
                      <Typography
                        variant="body1"
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          color: "white",
                          width: 100,
                          textAlign: "center",
                          paddingY: 1,
                          paddingX: 3,
                          borderRadius: "0 0 0 4px",
                        }}
                      >
                        Before
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        position: "relative",
                        width: { xs: "100%", sm: "50%" },
                        height: { xs: "50%", sm: "100%" },
                        paddingLeft: { xs: 0, sm: 1 },
                        paddingBottom: { xs: 1, sm: 0 },
                        borderBottomLeftRadius: { sm: "4px" },
                      }}
                      onClick={() => openModal(image.after)}
                    >
                      <Image
                        src={image.after}
                        alt="After"
                        placeholder="blur"
                        fill
                        style={{ objectFit: "cover" }}
                        loading={loadedImages[index] ? "eager" : "lazy"}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          color: "white",
                          width: 100,
                          textAlign: "center",
                          paddingY: 1,
                          paddingX: { xs: 1, sm: 3 },
                          borderRadius: "0 0 0 4px",
                        }}
                      >
                        After
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
          <Grid container justifyContent="center" spacing={2} p={2}>
            {service.images.map((image, index) => (
              <Grid key={index} item xs={6} md={4} lg={3} onClick={() => openModal(image)}>
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                    width: "100%",
                    paddingBottom: "75%",
                  }}
                >
                  <Image
                    src={image}
                    alt="Additional"
                    placeholder="blur"
                    fill
                    loading="lazy"
                    style={{
                      borderRadius: "8px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
      <Modal open={modalOpen} onClick={closeModal}>
        <Fade in={modalOpen}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box position="relative">
              <Box p={1} onClick={handleImageClick}>
                <Image
                  src={selectedImage}
                  alt="Selected"
                  placeholder="blur"
                  style={{
                    height: "auto",
                    maxHeight: "800px",
                    width: "100%",
                    maxWidth: "1000px",
                  }}
                  loading="lazy"
                />
              </Box>
              <IconButton
                onClick={closeModal}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  position: "absolute",
                  top: 10,
                  right: 10,
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ServiceCards;
