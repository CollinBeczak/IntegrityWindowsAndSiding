import React, { useEffect } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import { Box } from "@mui/system";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#5f9bce",
      },
      secondary: {
        main: "#5f9bce",
      },
      text: {
        primary: "#5f9bce",
        secondary: "black",
      },
      background: {
        default: "#ffffff",
        paper: "#ffffff",
      },
    },
    typography: {},
  });

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: "110vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: { xs: 6, sm: -2 },
          }}
        >
          <Header />
          <Box sx={{ paddingTop: "64px" }}>
            <ScrollToTop />
            <Routes>
              <Route path="/windows" element={<ContactPage />} />
              <Route path="/siding" element={<ContactPage />} />
              <Route path="/trim" element={<ContactPage />} />
              <Route path="/gutters" element={<ContactPage />} />
              <Route path="/roofing" element={<ContactPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Box>
          <ContactForm />
          <Footer />
        </Box>
      </ThemeProvider>
    </Router>
  );
};

export default App;
