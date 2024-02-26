"use client";

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
import Image from "next/image";
import houseImage from "../assets/windows/Alside_Casement_Beauty4.jpg";
import axios from "axios";

const ContactForm = () => {
  const [selectedSubjectsTypes, setSelectedSubjectsTypes]: any = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [stateError, setStateError] = useState("");
  const [cityError, setCityError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [subjectsError, setSubjectsError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [buttonText, setButtonText] = useState("Send Message");

  const subjectsTypes = [
    { value: "Siding", label: "Siding" },
    { value: "Windows", label: "Windows" },
    { value: "Trim", label: "Trim" },
    { value: "Doors", label: "Doors" },
    { value: "Gutters", label: "Gutters" },
    { value: "Roofing", label: "Roofing" },
    { value: "Other", label: "Other" },
  ];

  const states = ["Kansas", "Oklahoma", "Missouri"];

  const isFormValid =
    selectedSubjectsTypes.length > 0 &&
    name.trim() !== "" &&
    email.trim() !== "" &&
    phoneNumber.trim() !== "" &&
    message.trim() !== "" &&
    nameError === "" &&
    emailError === "" &&
    phoneError === "" &&
    stateError === "" &&
    cityError === "" &&
    subjectsError === "" &&
    messageError === "";

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.post("/api/send-email", {
        name,
        email,
        phoneNumber,
        state,
        city,
        selectedSubjectsTypes: selectedSubjectsTypes.join(", "),
        message,
      });

      setButtonText("Message Sent!");
      setTimeout(() => {
        setButtonText("Send Message");
      }, 3000);

      // Clear form fields and errors
      setName("");
      setEmail("");
      setPhoneNumber("");
      setSelectedSubjectsTypes([]);
      setMessage("");
      setState("");
      setCity("");
      setNameError("");
      setEmailError("");
      setPhoneError("");
      setSubjectsError("");
      setMessageError("");
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
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

  const handleStateBlur = () => {
    if (state.trim() === "") {
      setStateError("State is required");
    } else {
      setStateError("");
    }
  };

  const handleCityBlur = () => {
    if (city.trim() === "") {
      setCityError("City is required");
    } else {
      setCityError("");
    }
  };

  const handleSubjectsBlur = () => {
    if (selectedSubjectsTypes.length === 0) {
      setSubjectsError("Subjects type is required");
    } else {
      setSubjectsError("");
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
        width: "100%",
        position: "relative",
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
        <Image src={houseImage} alt="image" fill style={{ objectFit: "cover" }} loading="lazy" />
      </Box>
      <Container
        sx={{
          maxWidth: "95%",
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
            fontSize: { xs: 25, sm: 35 },
            fontFamily: "Comfortaa, sans-serif",
            fontWeight: "bold",
            color: "text.primary",
            display: "block",
            textAlign: "center",
            mb: 3,
          }}
          gutterBottom
        >
          Send us your questions
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="name"
                label="Name"
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
                label="Email"
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
                label="Phone Number"
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
              <FormControl fullWidth error={!!subjectsError}>
                <InputLabel id="subjects-type-label">Subjects *</InputLabel>
                <Select
                  labelId="subjects-type-label"
                  id="subjects-type"
                  label="Subjects"
                  required
                  fullWidth
                  multiple
                  value={selectedSubjectsTypes}
                  onChange={(e: any) => {
                    setSelectedSubjectsTypes(e.target.value);
                    setSubjectsError("");
                  }}
                  onBlur={handleSubjectsBlur}
                  renderValue={(selected) => selected.join(" - ")}
                  sx={{ color: "text.secondary", marginBottom: subjectsError ? 0 : "20px" }}
                >
                  {subjectsTypes.map((type) => (
                    <MenuItem key={type.value} value={type.value} style={{ color: "black" }}>
                      <Checkbox checked={selectedSubjectsTypes.indexOf(type.value) > -1} />
                      {type.label}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{subjectsError}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ marginBottom: stateError ? 0 : "23px" }}>
                <InputLabel id="state-label">State *</InputLabel>
                <Select
                  label="state"
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  onBlur={handleStateBlur}
                >
                  {states.map((stateOption) => (
                    <MenuItem key={stateOption} value={stateOption}>
                      {stateOption}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="city"
                label="City"
                variant="outlined"
                required
                fullWidth
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  setCityError("");
                }}
                onBlur={handleCityBlur}
                error={!!cityError}
                helperText={cityError}
                sx={{ marginBottom: cityError ? 0 : "23px" }}
                InputProps={{ sx: { color: "text.secondary" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="message"
                label="Message"
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
                {isLoading ? <CircularProgress size={24} /> : buttonText}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography
                px={1}
                pt={1}
                variant="body1"
                gutterBottom
                sx={{ color: "text.secondary", textAlign: "center", fontSize: 12 }}
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
