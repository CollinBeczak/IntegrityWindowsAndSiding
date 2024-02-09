import React from "react";
import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";

const Home = () => {
  const summaryData = [{ image: require("./../Assets/filler-house-img.jpeg") }];

  return (
    <Box>
      <Box mb={4}>
        <CardMedia
          component="img"
          alt={` Image`}
          height="700"
          image={require("./../Assets/filler-house-img.jpeg")}
        />
      </Box>

      {/* Image Gallery */}
      <Box mt={4}>
        <Typography variant="h4" mb={2}>
          Image Gallery
        </Typography>
        <Grid container spacing={3}>
          {[1, 2, 3].map((index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={`Image ${index}`}
                  image={`https://via.placeholder.com/300?text=Image+${index}`}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
