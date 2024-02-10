import React, { useEffect } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import HomePage from "./pages/HomePage";
import { Box } from "@mui/system";
import DoorsPage from "./pages/DoorsPage";
import RoofingPage from "./pages/RoofingPage";
import GuttersPage from "./pages/GuttersPage";
import TrimPage from "./pages/TrimPage";
import SidingPage from "./pages/SidingPage";
import WindowsPage from "./pages/WindowsPage";
import ServicesPage from "./pages/ServicesPage";
import ShowcasePage from "./pages/ShowcasePage";
import StaffPage from "./pages/StaffPage";

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
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Header />
          <Box sx={{ paddingTop: "64px" }}>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/showcase" element={<ShowcasePage />} />
              <Route path="/staff" element={<StaffPage />} />
              <Route path="/windows" element={<WindowsPage />} />
              <Route path="/siding" element={<SidingPage />} />
              <Route path="/trim" element={<TrimPage />} />
              <Route path="/gutters" element={<GuttersPage />} />
              <Route path="/roofing" element={<RoofingPage />} />
              <Route path="/doors" element={<DoorsPage />} />
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
