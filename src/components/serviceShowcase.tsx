import React, { useState } from "react";
import {
  Box,
  Grid,
  Divider,
  Typography,
  Modal,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import windowBefore1 from "../assets/windows/Alside_Casement_Beauty4.jpg";
import windowBefore2 from "../assets/windows/Alside_Casement_Beauty5.jpg";
import windowBefore3 from "../assets/windows/Alside_Casement_Beauty6.jpg";
import windowAfter1 from "../assets/windows/Alside_Mezzo_Slider_Beauty2.jpg";
import windowAfter2 from "../assets/windows/Alside_Promenade_ClassicBeauty2.jpg";
import windowAfter3 from "../assets/windows/Alside_Promenade_ContemporaryBeauty.jpg";

const services = [
  {
    name: "Windows",
    description: "High-quality window replacement services.",
    progressImages: [
      { before: windowBefore1, after: windowAfter1 },
      { before: windowBefore2, after: windowAfter2 },
      { before: windowBefore3, after: windowAfter3 },
    ],
    images: [
      windowBefore1,
      windowAfter1,
      windowBefore2,
      windowAfter2,
      windowBefore3,
      windowAfter3,
      windowAfter2,
      windowBefore3,
    ],
  },
  {
    name: "Siding",
    description: "High-quality window replacement services.",
    progressImages: [
      { before: windowBefore1, after: windowAfter1 },
      { before: windowBefore2, after: windowAfter2 },
      { before: windowBefore3, after: windowAfter3 },
    ],
    images: [
      windowBefore1,
      windowAfter1,
      windowBefore2,
      windowAfter2,
      windowAfter2,
      windowBefore3,
      windowBefore3,
      windowAfter3,
    ],
  },
  {
    name: "Gutters",
    description: "High-quality window replacement services.",
    progressImages: [
      { before: windowBefore1, after: windowAfter1 },
      { before: windowBefore2, after: windowAfter2 },
      { before: windowBefore3, after: windowAfter3 },
    ],
    images: [
      windowBefore1,
      windowAfter1,
      windowBefore2,
      windowAfter2,
      windowAfter2,
      windowBefore3,
      windowBefore3,
      windowAfter3,
    ],
  },
  {
    name: "Trim",
    description: "High-quality window replacement services.",
    progressImages: [
      { before: windowBefore1, after: windowAfter1 },
      { before: windowBefore2, after: windowAfter2 },
      { before: windowBefore3, after: windowAfter3 },
    ],
    images: [
      windowBefore1,
      windowAfter1,
      windowBefore2,
      windowAfter2,
      windowAfter2,
      windowBefore3,
      windowBefore3,
      windowAfter3,
    ],
  },
  {
    name: "Doors",
    description: "High-quality window replacement services.",
    progressImages: [
      { before: windowBefore1, after: windowAfter1 },
      { before: windowBefore2, after: windowAfter2 },
      { before: windowBefore3, after: windowAfter3 },
    ],
    images: [
      windowBefore1,
      windowAfter1,
      windowBefore2,
      windowAfter2,
      windowAfter2,
      windowBefore3,
      windowBefore3,
      windowAfter3,
    ],
  },
  {
    name: "Roofing",
    description: "High-quality window replacement services.",
    progressImages: [
      { before: windowBefore1, after: windowAfter1 },
      { before: windowBefore2, after: windowAfter2 },
      { before: windowBefore3, after: windowAfter3 },
    ],
    images: [
      windowBefore1,
      windowAfter1,
      windowBefore2,
      windowAfter2,
      windowAfter2,
      windowBefore3,
      windowBefore3,
      windowAfter3,
    ],
  },
];

const ServiceCards = () => {
  const [loadedImages, setLoadedImages] = useState(
    new Array(services[0].progressImages.length).fill(false),
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleSlideChange = (index: number) => {
    const newLoadedImages = [...loadedImages];
    newLoadedImages[index] = true;
    setLoadedImages(newLoadedImages);
  };

  const settings = {
    infinite: true,
    accessibility: true,
    arrows: false,
    autoplay: true,
    dots: true,
    sync: true,
    speed: 3000,
    autoplaySpeed: 12000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
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

  const handleMenuItemClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setAnchorEl(null);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: { xs: 82, sm: 92, md: 64 },
          right: 0,
          zIndex: 999,
          textAlign: "center",
          borderRadius: "0 0 10px 10px",
        }}
      >
        <Button
          variant="contained"
          onClick={(event) => setAnchorEl(event.currentTarget)}
          sx={{
            color: "black",
            minWidth: "160px",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography sx={{ ml: 2, textDecoration: "none", color: "white" }}>Jump to</Typography>
          <ArrowDropDownIcon sx={{ color: "white" }} />
        </Button>
        <Menu
          id="services-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {services.map((service, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                handleMenuItemClick(service.name.replace(/\s+/g, "-").toLowerCase());
                handleMenuClose();
              }}
            >
              {service.name}
            </MenuItem>
          ))}
        </Menu>
      </Box>
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
                    >
                      <Image
                        src={image.before}
                        alt="Before"
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
                    >
                      <Image
                        src={image.after}
                        alt="After"
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
              <Box p={1} maxWidth={800} onClick={handleImageClick}>
                <Image src={selectedImage} alt="Selected" layout="responsive" loading="lazy" />
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
