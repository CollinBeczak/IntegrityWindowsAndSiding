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
  FormHelperText,
} from "@mui/material";

import backgroundImg from "./../Assets/filler-house-img.jpeg";

const ContactForm = () => {
  const [selectedInquiryTypes, setSelectedInquiryTypes] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [inquiryError, setInquiryError] = useState("");
  const [messageError, setMessageError] = useState("");

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
    message.trim() !== "" &&
    nameError === "" &&
    emailError === "" &&
    phoneError === "" &&
    inquiryError === "" &&
    messageError === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsLoading(false);
  };

  const handleNameBlur = () => {
    if (name.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  const handleEmailBlur = () => {
    if (email.trim() === "") {
      setEmailError("Email is required");
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneBlur = () => {
    if (phoneNumber.trim() === "") {
      setPhoneError("Phone number is required");
    } else if (!/^\d{10}$/.test(phoneNumber.replace(/\D/g, ""))) {
      setPhoneError("Invalid phone number");
    } else {
      setPhoneError("");
    }
  };

  const handleInquiryBlur = () => {
    if (selectedInquiryTypes.length === 0) {
      setInquiryError("Inquiry type is required");
    } else {
      setInquiryError("");
    }
  };

  const handleMessageBlur = () => {
    if (message.trim() === "") {
      setMessageError("Message is required");
    } else {
      setMessageError("");
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "1800px",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <Container
        sx={{
          marginY: { xs: 4, sm: 16 },
          backgroundColor: "rgba(255, 255, 255)",
          padding: "20px",
          borderRadius: "10px",
        }}
        maxWidth="md"
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: 30, sm: 35 },
            fontFamily: "Comfortaa, sans-serif",
            fontWeight: "bold",
            color: "text.primary",
            display: "block",
            textAlign: "center",
            mb: 3,
          }}
          gutterBottom
        >
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
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError("");
                }}
                onBlur={handleNameBlur}
                error={!!nameError}
                helperText={nameError}
                sx={{ marginBottom: nameError ? 0 : "23px" }}
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                onBlur={handleEmailBlur}
                error={!!emailError}
                helperText={emailError}
                sx={{ marginBottom: emailError ? 0 : "23px" }}
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
                onChange={(e) => {
                  const input = e.target.value.replace(/\D/g, "").substring(0, 10);
                  let formattedInput = input;
                  if (input.length > 3) {
                    formattedInput = `(${input.slice(0, 3)})-${input.slice(3)}`;
                  }
                  if (input.length > 6) {
                    formattedInput = `(${input.slice(0, 3)})-${input.slice(3, 6)}-${input.slice(
                      6,
                    )}`;
                  }
                  setPhoneNumber(formattedInput);
                  setPhoneError("");
                }}
                onBlur={handlePhoneBlur}
                error={!!phoneError}
                helperText={phoneError}
                sx={{ marginBottom: phoneError ? 0 : "23px" }}
                InputProps={{ sx: { color: "text.secondary" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!inquiryError}>
                <InputLabel id="inquiry-type-label">Inquiry Type *</InputLabel>
                <Select
                  labelId="inquiry-type-label"
                  id="inquiry-type"
                  label="Inquiry Type *"
                  required
                  fullWidth
                  multiple
                  value={selectedInquiryTypes}
                  onChange={(e) => {
                    setSelectedInquiryTypes(e.target.value);
                    setInquiryError("");
                  }}
                  onBlur={handleInquiryBlur}
                  renderValue={(selected) => selected.join(" - ")}
                  sx={{ color: "text.secondary", marginBottom: inquiryError ? 0 : "20px" }}
                >
                  {inquiryTypes.map((type) => (
                    <MenuItem key={type.value} value={type.value} style={{ color: "black" }}>
                      <Checkbox checked={selectedInquiryTypes.indexOf(type.value) > -1} />
                      {type.label}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{inquiryError}</FormHelperText>
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
                onChange={(e) => {
                  setMessage(e.target.value);
                  setMessageError("");
                }}
                onBlur={handleMessageBlur}
                error={!!messageError}
                helperText={messageError}
                InputProps={{ sx: { color: "text.secondary" } }}
                sx={{ marginBottom: messageError ? 0 : "22px" }}
              />
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
            <Grid item xs={12}>
              <Typography
                p={1}
                variant="body1"
                gutterBottom
                sx={{ color: "text.secondary", textAlign: "center" }}
              >
                Information we are going to provide to the user. What sending the message does, and
                what they should expect. We will also give a notice that we are going to keep the
                information they submit private.
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default ContactForm;
