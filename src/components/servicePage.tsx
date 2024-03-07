import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Service {
  name: string;
  description: string;
  images: any;
  link: string;
}

interface Page {
  title: string;
  titleImage: any;
  description: string;
  learnMore: boolean;
  route: string;
  types: Service[];
}

interface ServicesPageProps {
  page: Page;
}

const ServicePage: React.FC<ServicesPageProps> = ({ page }) => {
  const settings = {
    infinite: true,
    arrows: false,
    autoplay: true,
    swipeToSlide: false,
    dots: true,
    sync: true,
    speed: 2400,
    autoplaySpeed: 12000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    swipe: false,
  };

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          color: "white",
          overflow: "hidden",
          mb: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: { xs: "auto", sm: page.description ? "650px" : "250px" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        >
          <Image
            src={page.titleImage}
            placeholder="blur"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1200,
            paddingY: 6,
            paddingX: 4,
            width: "100%",
            "& > *": {
              textShadow: "3px 1.5px 3px rgba(0,0,0,1)",
            },
          }}
        >
          <Typography
            textAlign="center"
            gutterBottom
            sx={{
              marginBottom: 2,
              fontSize: { xs: 24, sm: 30 },
              fontFamily: "Comfortaa, sans-serif",
              fontWeight: 900,
              textShadow: "3px 1.5px 3px rgba(0,0,0,1)",
            }}
          >
            {page.title}
          </Typography>
          <Typography
            textAlign="center"
            maxWidth={1000}
            mb={5}
            gutterBottom
            sx={{
              margin: "auto",
              fontSize: { xs: 16, sm: 20 },
              fontFamily: "Geologica, sans-serif",
              fontWeight: 500,
              textShadow: "3px 1.5px 3px rgba(0,0,0,1)",
            }}
          >
            {page.description}
          </Typography>
        </Box>
      </Box>

      <Box px={4}>
        <Box>
          {page.types.map((service, index) => (
            <Box key={index} width={1} mb={5}>
              <Box
                id={service.name.toLowerCase().replace(/[^a-zA-Z0-9#]+/g, "_")}
                sx={{
                  position: "relative",
                  top: "-124px",
                }}
              ></Box>
              <Box
                id={service.name.replace(/\s+/g, "-").toLowerCase()}
                data-testid={service.name.replace(/\s+/g, "-").toLowerCase()}
                margin="auto"
                sx={{
                  maxWidth: { sm: 700, lg: 1200 },
                  marginY: { xs: 5, sm: 10 },
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                <Box sx={{ display: { lg: "flex" } }}>
                  <Box
                    width={"100%"}
                    maxWidth={500}
                    sx={{ height: { xs: 250, lg: 300 }, margin: { xs: "auto", lg: "inherit" } }}
                  >
                    <Slider {...settings}>
                      {service.images.map((image: any, index: any) => (
                        <Box
                          key={index}
                          sx={{
                            position: "relative",
                            width: "100%",
                            height: { xs: 250, lg: 300 },
                          }}
                        >
                          <Image
                            src={image}
                            placeholder="blur"
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
                    sx={{ ml: { lg: 3 }, textAlign: { xs: "center", lg: "left" } }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: 20, md: 24, lg: 28 },
                        marginTop: { xs: 4, lg: 0 },
                        textAlign: { xs: "center", lg: "left" },
                        fontFamily: "Comfortaa, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {service.name}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      margin={"auto"}
                      sx={{
                        fontFamily: "Geologica, sans-serif",
                        fontSize: { xs: 15, md: 16, lg: 18 },
                        fontWeight: 300,
                      }}
                    >
                      {service.description}
                    </Typography>
                    {page.learnMore && (
                      <Box sx={{ marginY: 2 }}>
                        <Button
                          href={`/services/${service.link}`}
                          variant="contained"
                          sx={{ color: "white" }}
                        >
                          <Typography
                            sx={{
                              fontSize: { xs: 13, sm: 15 },
                              fontWeight: 600,
                              fontFamily: "Geologica, sans-serif",
                            }}
                          >
                            Learn More
                          </Typography>
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

export default ServicePage;
