import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
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
  subtitle: string;
  subDescription: string;
  types: Service[];
}

interface ServicesPageProps {
  page: Page;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ page }) => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 180;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const settings: SliderSettings = {
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
    <Box>
      <Box
        id="top"
        sx={{
          position: "relative",
          height: "650px",
          textAlign: "center",
          color: "white",
          overflow: "hidden",
          mb: 10,
          mt: { xs: 2, md: 0 },
        }}
      >
        <Image src={page.titleImage} alt="image" layout="fill" objectFit="cover" loading="lazy" />
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
          <Box sx={{ display: { xs: "block", md: "flex" } }}>
            {page.types.map((service, index) => (
              <Button
                key={index}
                variant="contained"
                onClick={() => handleClick(service.name.replace(/\s+/g, "-").toLowerCase())}
                sx={{
                  display: "flex",
                  marginY: 2,
                  margin: { md: 4 },
                  color: "white",
                  width: "220px",
                  alignItems: "center",
                }}
              >
                <Typography component="span" style={{ textDecoration: "none", color: "inherit" }}>
                  {service.name}
                </Typography>
                <ArrowDropDownIcon />
              </Button>
            ))}
          </Box>
        </Box>
      </Box>

      <Box margin="auto" marginY={10} maxWidth={1200}>
        <Typography variant="h4" gutterBottom>
          {page.subtitle}
        </Typography>
        <Typography variant="body1" color="black">
          {page.subDescription}
        </Typography>
      </Box>

      <Box>
        {page.types.map((service, index) => (
          <Box key={index} width={1} mb={5}>
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
                    variant="h4"
                    sx={{ marginTop: { xs: 2, md: 0 }, textAlign: { xs: "center", md: "left" } }}
                    gutterBottom
                  >
                    {service.name}
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesPage;

interface SliderSettings {
  infinite: boolean;
  accessibility: boolean;
  arrows: boolean;
  autoplay: boolean;
  dots: boolean;
  speed: number;
  sync: boolean;
  autoplaySpeed: number;
  slidesToShow: number;
  slidesToScroll: number;
}
