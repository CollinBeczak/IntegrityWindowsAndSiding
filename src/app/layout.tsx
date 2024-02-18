import React from "react";
import { Metadata } from "next";

import ThemeProvider from "../components/themeProvider";
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
        <meta charSet="UTF-8" />
        <title>Integrity Siding and Window, LLC - Home Improvement Services</title>
        <meta
          name="description"
          content="In the business for over 20 years. Offering high-quality siding and window replacement services in Kansas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap"
          rel="stylesheet"
        />

        {/* Open Graph meta tags */}
        <meta
          property="og:title"
          content="Integrity Siding and Window, LLC - Home Improvement Services"
        />
        <meta
          property="og:description"
          content="In the business for over 20 years. Offering high-quality siding and window replacement services in Kansas."
        />
        <meta
          property="og:image"
          content="https://IntegritySidingAndWindows.com/filler-house-img.jpeg"
        />
        <meta property="og:url" content="https://IntegritySidingAndWindows.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta
          name="twitter:title"
          content="Integrity Siding and Window, LLC - Home Improvement Services"
        />
        <meta
          name="twitter:description"
          content="In the business for over 20 years. Offering high-quality siding and window replacement services in Kansas."
        />
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
