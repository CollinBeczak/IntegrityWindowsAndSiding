import React from "react";
import { Metadata } from "next";

import ThemeProvider from "./components/themeProvider";
import Header from "./header";
import { Box } from "@mui/material";
import ContactForm from "./contactForm";
import Footer from "./footer";

export const metadata: Metadata = {
  viewport: "initial-scale=1, width=device-width",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0' height='0' viewBox='0 0 0 0'%3E%3Crect width='0' height='0' fill='none' /%3E%3C/svg%3E"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <title>Integrity Siding and Window, LLC</title>

        {/* Open Graph meta tags */}
        <meta property="og:title" content="Integrity Siding and Window, LLC" />
        <meta property="og:description" content="In the business for over 20 years." />
        <meta
          property="og:image"
          content="https://IntegritySidingAndWindows.com/filler-house-img.jpeg"
        />
        <meta property="og:url" content="https://IntegritySidingAndWindows.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:title" content="Integrity Siding and Window, LLC" />
        <meta name="twitter:description" content="In the business for over 20 years." />
        <meta
          name="twitter:image"
          content="https://IntegritySidingAndWindows.com/filler-house-img.jpeg"
        />
        <meta name="twitter:site" content="https://IntegritySidingAndWindows.com/" />
      </head>
      <body>
        <ThemeProvider>
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Header />
            <Box sx={{ paddingTop: "64px" }}>{children}</Box>
            <ContactForm />
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
