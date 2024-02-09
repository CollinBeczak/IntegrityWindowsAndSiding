import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Box,
  Checkbox,
  CircularProgress,
} from "@mui/material";

import backgroundImg from "./../Assets/filler-house-img.jpeg"; // Import image directly

const ContactForm = () => {
  const [selectedInquiryTypes, setSelectedInquiryTypes] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const inquiryTypes = [
    { value: "Siding", label: "Siding" },
    { value: "Windows", label: "Windows" },
    { value: "Trim", label: "Trim" },
    { value: "Doors", label: "Doors" },
    { value: "Gutters", label: "Gutters" },
    { value: "Roofing", label: "Roofing" },
    { value: "Other", label: "Other" },
  ];

  const isFormValid =
    selectedInquiryTypes.length > 0 &&
    name.trim() !== "" &&
    email.trim() !== "" &&
    phoneNumber.trim() !== "" &&
    message.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Your form submission logic here
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImg})`, // Use imported image directly
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <Container
        sx={{
          marginY: 20,
          backgroundColor: "rgba(255, 255, 255)", // Semi-transparent white background
          padding: "20px", // Add padding for better readability
          borderRadius: "10px", // Add border radius for rounded corners
        }}
        maxWidth="md"
      >
        <Typography variant="h4" align="center" mb={3} gutterBottom>
          Get a Free Estimate
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="name"
                label="Name *"
                variant="outlined"
                required
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputProps={{ sx: { color: "text.secondary" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                label="Email *"
                type="email"
                variant="outlined"
                required
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{ sx: { color: "text.secondary" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="phoneNumber"
                label="Phone Number *"
                variant="outlined"
                required
                fullWidth
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                InputProps={{ sx: { color: "text.secondary" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="inquiry-type-label">Inquiry Type *</InputLabel>
                <Select
                  labelId="inquiry-type-label"
                  id="inquiry-type"
                  label="Inquiry Type *"
                  required
                  fullWidth
                  multiple
                  value={selectedInquiryTypes}
                  onChange={(e) => setSelectedInquiryTypes(e.target.value)}
                  renderValue={(selected) => selected.join(" - ")}
                  sx={{ color: "text.secondary" }}
                >
                  {inquiryTypes.map((type) => (
                    <MenuItem key={type.value} value={type.value} style={{ color: "black" }}>
                      <Checkbox checked={selectedInquiryTypes.indexOf(type.value) > -1} />
                      {type.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="message"
                label="Message *"
                multiline
                rows={4}
                variant="outlined"
                required
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                InputProps={{ sx: { color: "text.secondary" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom x={{ color: "text.secondary" }}>
                Information we are going to provide to the user. What sendibng the message does, and
                what they should expect. We will also give a notice that we are going to keep the
                information they submit private.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={!isFormValid || isLoading}
                sx={{ color: "white" }}
              >
                {isLoading ? <CircularProgress size={24} /> : "Send Message"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default ContactForm;
