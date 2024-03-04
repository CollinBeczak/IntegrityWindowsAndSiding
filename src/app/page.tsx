"use client";

import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent, Rating } from "@mui/material";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeImage from "../assets/landingImage.jpg";
import ServiceCards from "../components/servicesSlideshow";
import ShowcaseCards from "../components/showcaseSlideShow";

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
          color: "white",
          overflow: "hidden",
        }}
      >
        <Image
          src={homeImage}
          alt="image"
          placeholder="blur"
          fill
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
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
          <Typography
            width={"100%"}
            maxWidth={1000}
            textAlign="center"
            variant="h4"
            gutterBottom
            sx={{
              marginTop: 1,
              marginBottom: 5,
              fontFamily: "Comfortaa, sans-serif",
              fontWeight: "bold",
              textShadow: "4px 4px 8px rgba(0,0,0,0.5)",
            }}
          >
            Integrity Siding and Window
          </Typography>
          <Typography
            textAlign="center"
            variant="h5"
            maxWidth={1000}
            mb={5}
            gutterBottom
            sx={{
              fontFamily: "Comfortaa, sans-serif",
              fontWeight: "bold",
              textShadow: "4px 4px 8px rgba(0,0,0,0.5)",
            }}
          >
            Local family-owned company with over 30 years of construction, and remodel experience
            with commercial and residential properties. Commercial class-A contractor proudly
            serving all of Kansas, Oklahoma, and Missouri.
          </Typography>
          <Box
            sx={{
              fontFamily: "Comfortaa, sans-serif",
              fontWeight: "bold",
              width: "100%",
              maxWidth: 1000,
              textAlign: "center",
            }}
          >
            <Button
              href="/services"
              variant="contained"
              color="primary"
              sx={{
                fontFamily: "Comfortaa, sans-serif",
                fontWeight: 900,
                margin: 1,
                color: "white",
              }}
            >
              View all services
            </Button>
            <Button
              href="/contact"
              variant="contained"
              color="inherit"
              sx={{
                fontFamily: "Comfortaa, sans-serif",
                fontWeight: 900,
                margin: 1,
                color: "text.primary",
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>
      <Box mt={5}>
        <ServiceCards />
      </Box>

      <Box margin="30px 10px 40px">
        <div className="elementor-widget-container">
          <div className="elementor-custom-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1639108.802772688!2d-97.42347040198965!3d36.64120250408655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bae1ff91ad00ff%3A0x5e36118f71c67f8a!2sIntegrity%20Siding%20%26%20Window!5e0!3m2!1sen!2sus!4v1708289182931!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ width: "100%", border: "0" }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <Box maxWidth={1200} margin="auto" my={4} textAlign="center">
          <Grid container justifyContent="center" spacing={3}>
            {reviews.map((review, index) => (
              <Grid key={index} item xs={12} md={index < 3 ? 4 : 2}>
                <ReviewCard {...review} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box mb={5}>
        <ShowcaseCards />
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
