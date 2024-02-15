import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent, Rating } from "@mui/material";
import Image from "next/image";
import houseImage from "./assets/filler-house-img.jpeg";

interface Service {
  name: string;
  description: string;
  beforeImage: any;
  afterImage: any;
}

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
          mb: 20,
        }}
      >
        <Image src={houseImage} alt="image" layout="fill" objectFit="cover" />
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
            Integrity Siding and Windows
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
      <Box>
        <Typography variant="h3" gutterBottom>
          About us
        </Typography>
        <Typography variant="body1">
          Welcome to Integrity Siding and Windows! We are a trusted provider of siding and window
          replacement services in Kansas.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h3" gutterBottom>
          Our services
        </Typography>
        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid key={service.name} item xs={6}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={3}>
          {reviews.map((review, index) => (
            <Grid key={index} item xs={12} md={index < 3 ? 4 : 2}>
              <ReviewCard {...review} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        color: "white",
        overflow: "hidden",
        height: 400,
      }}
    >
      <Image
        src={service.beforeImage}
        alt={`${service.name} before`}
        layout="fill"
        objectFit="cover"
      />
      <Typography variant="h4">{service.name} Before</Typography>
      <Typography variant="body1">{service.description}</Typography>
    </Box>
  );
};

const ReviewCard: React.FC<Review> = ({ name, rating, text }) => {
  return (
    <Card variant="outlined" sx={{ maxHeight: 200, overflowY: "auto" }}>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Rating name="read-only" value={rating} readOnly />
        <Typography variant="body1" gutterBottom>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

const services: Service[] = [
  {
    name: "Windows",
    description: "We offer high-quality window replacement services.",
    beforeImage: houseImage,
    afterImage: houseImage,
  },
  {
    name: "Siding",
    description:
      "Our siding replacement services can transform the appearance of your home's exterior.",
    beforeImage: houseImage,
    afterImage: houseImage,
  },
  // Add more services as needed
];

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
