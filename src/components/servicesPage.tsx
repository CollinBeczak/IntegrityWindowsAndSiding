import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

interface Service {
  name: string;
  description: string;
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

const ServicesPage: React.FC<ServicesPageProps> = ({ page }) => {
  const [currentSlideshowIndex, setCurrentSlideshowIndex] = useState(0);

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
    afterChange: (currentIndex: number) => setCurrentSlideshowIndex(currentIndex),
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
          minHeight: { xs: "auto", sm: "650px" },
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
            paddingX: 3,
            width: "100%",
            "& > *": {
              textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
            },
          }}
        >
          <Typography sx={{ fontSize: { xs: 25, sm: 46 } }} gutterBottom>
            {page.title}
          </Typography>
          <Typography sx={{ fontSize: { xs: 17, sm: 24 } }} gutterBottom>
            {page.description}
          </Typography>
        </Box>
      </Box>

      <Box px={2}>
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
                maxWidth={1200}
                sx={{ marginY: { xs: 5, sm: 10 }, textAlign: { xs: "center", lg: "left" } }}
              >
                <Box sx={{ display: { lg: "flex" } }}>
                  <Box
                    textAlign="center"
                    sx={{ ml: { lg: 3 }, textAlign: { xs: "center", lg: "left" } }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "h5.fontSize", sm: "h4.fontSize" },
                        marginTop: { xs: 4, lg: 0 },
                        textAlign: { xs: "center", lg: "left" },
                      }}
                      gutterBottom
                    >
                      {service.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" margin={"auto"}>
                      {service.description}
                    </Typography>
                    {page.learnMore && (
                      <Box sx={{ marginY: 2 }}>
                        <Button
                          href={`/services/${service.name
                            .toLowerCase()
                            .replace(/- /g, `${page.route}#`)
                            .replace(/[^a-zA-Z0-9#]+/g, "_")}`}
                          variant="contained"
                          sx={{ color: "white" }}
                        >
                          Learn More
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

export default ServicesPage;
