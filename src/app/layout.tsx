import React from "react";

import ThemeProvider from "../components/themeProvider";
import LogRocketProvider from "@/components/logRocketProvider";
import Header from "./header";
import { Box } from "@mui/material";
import ContactForm from "./contactForm";
import Footer from "./footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Integrity Siding and Window, LLC - Home Improvement Services</title>
        <meta
          name="description"
          content="Local family-owned company with over 30 years of construction, and remodel experience
          with commercial and residential properties. Commercial class-A contractor proudly
          serving all of Kansas, Oklahoma, and Missouri."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Geologica:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Geologica:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        {/* Open Graph meta tags */}
        <meta
          property="og:title"
          content="Integrity Siding and Window, LLC - Home Improvement Services"
        />
        <meta
          property="og:description"
          content="Local family-owned company with over 30 years of construction, and remodel experience
          with commercial and residential properties. Commercial class-A contractor proudly
          serving all of Kansas, Oklahoma, and Missouri."
        />
        <meta property="og:image" content="https://integritysidingandwindow.com/landingImage.jpg" />
        <meta property="og:url" content="https://integritysidingandwindow.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta
          name="twitter:title"
          content="Integrity Siding and Window, LLC - Home Improvement Services"
        />
        <meta
          name="twitter:description"
          content="Local family-owned company with over 30 years of construction, and remodel experience
          with commercial and residential properties. Commercial class-A contractor proudly
          serving all of Kansas, Oklahoma, and Missouri."
        />
        <meta
          name="twitter:image"
          content="https://integritysidingandwindow.com/landingImage.jpg"
        />
        <meta name="twitter:site" content="https://integritysidingandwindow.com/" />
      </head>
      <body>
        <ThemeProvider>
          <LogRocketProvider />
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Header />
            <Box sx={{ paddingTop: { xs: "88px", sm: "96px", md: "64px" } }}>{children}</Box>
            <ContactForm />
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
