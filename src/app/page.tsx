"use client";

import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent, Rating } from "@mui/material";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import houseImage from "./assets/filler-house-img.jpeg";
import ServiceCards from "./components/servicesSlideshow";
import ShowcaseCards from "./components/showcaseSlideShow";

interface Review {
  name: string;
  rating: number;
  text: string;
}

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: "85vh",
          textAlign: "center",
          color: "white",
          overflow: "hidden",
        }}
      >
        <Image src={houseImage} alt="image" layout="fill" objectFit="cover" loading="eager" />
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
          <Typography variant="h2" gutterBottom>
            Integrity Siding and Window
          </Typography>
          <Typography variant="h5" gutterBottom>
            Located in Kansas, we specialize in replacing siding and windows and other services.
          </Typography>
          <Box sx={{ margin: 1, display: "flex" }}>
            <Button
              href="/services"
              variant="outlined"
              color="primary"
              sx={{ margin: 1, display: "flex" }}
            >
              View all services
            </Button>
            <Button href="/contact" variant="contained" color="primary" sx={{ margin: 1 }}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>
      <Box maxWidth={1200} margin="auto">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            padding: 3,
          }}
        >
          <Box sx={{ flex: 1, marginBottom: { xs: 5, md: 0 }, marginRight: { xs: 0, md: 3 } }}>
            <Typography variant="h4" my={2} textAlign={{ xs: "center", md: "left" }}>
              Integrity Siding and window
            </Typography>
            <Typography variant="subtitle1" color="black" textAlign={{ xs: "center", md: "left" }}>
              We pride ourselves on our highly competitive pricing and devoted approach to
              accommodate our customers. We identify the needs and improvements that produce greater
              efficiency – which save energy and money. We pride ourselves on our highly competitive
              pricing and devoted approach to accommodate our customers. We identify the needs and
              improvements that produce greater efficiency – which save energy and money. We pride
              ourselves on our highly competitive pricing and devoted approach to accommodate our
              customers. We identify the needs and improvements that produce greater efficiency –
              which save energy and money.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <ServiceCards />
      </Box>

      <Box margin="20px 8px 40px">
        <Box>
          <Box>
            <div className="elementor-widget-container">
              <div className="elementor-custom-embed">
                <iframe
                  loading="lazy"
                  src="https://maps.google.com/maps?q=integrity%20siding%20and%20window%2066062&amp;t=m&amp;z=6&amp;output=embed&amp;iwloc=near"
                  title="2012 E Prairie Circle A, Olathe, Kansas 66062"
                  aria-label="2012 E Prairie Circle A, Olathe, Kansas 66062"
                  style={{ width: "100%", height: "400px", border: "0" }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Box>
        </Box>

        <Box maxWidth={1200} margin="auto" my={4} textAlign="center">
          <Grid container justifyContent="center" spacing={3}>
            {reviews.map((review, index) => (
              <Grid key={index} item xs={12} md={index < 3 ? 4 : 2}>
                <ReviewCard {...review} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box>
          <ShowcaseCards />
        </Box>
      </Box>
    </Box>
  );
};

const ReviewCard: React.FC<Review> = ({ name, rating, text }) => {
  return (
    <Card
      sx={{
        height: { xs: "auto", md: 300 },
        overflowY: "auto",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "12px",
      }}
    >
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Rating name="read-only" value={rating} readOnly />
        <Typography variant="body1" gutterBottom textAlign={"left"}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

const reviews: Review[] = [
  {
    name: "Molly R",
    rating: 5,
    text: "I had Integrity install 9 windows. Jeff the owner was great to work with from the get-go. Daniel and his helper did the install and did an awesome job. Jeff even came out after the install when I had a small problem with a window. I highly recommend them!",
  },
  {
    name: "Julie H",
    rating: 5,
    text: "We Cant say enough good things about Integrity Windows and Siding. we just replaced all of our 50 yr old windows and the whole process was a wonderful experience. Donny was easy to work with, he stayed in our budget, he was professional and gave us suggestions. the installation crew were fabulous at their job. we were super impressed with their work. they performed a miracle replacing our dry rot sills . they are craftsmen, we’re professional, and cleaned up. i highly recommend Integrity windows and siding",
  },
  {
    name: "Mammoth T",
    rating: 5,
    text: "Professional, excellent service. It's hard to find a contractor this good. We appreciate quality work and timeliness.",
  },
];

export default Home;
