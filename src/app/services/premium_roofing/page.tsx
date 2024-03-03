"use client";

import React from "react";
import ServicePage from "../../../components/servicePage";
import windowBefore1 from "../../../assets/windows/1.jpg";
import windowBefore2 from "../../../assets/windows/1.jpg";
import houseImage from "../../../assets/windows/1.jpg";
import windowBefore3 from "../../../assets/windows/1.jpg";

const page = {
  title: "Premium Roofing",
  titleImage: houseImage,
  description:
    "Integrity has 30 years of experience working with all major insurance companies offering premium roofing products from manufacturers such as TAMKO, CERTAINTEED, OWENS CORNING and MALARKEY.   ",
  learnMore: false,
  route: "",
  types: [
    {
      name: "N/A",
      description: "No roofing info added yet.",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
  ],
};

const Roofing = () => {
  return;
  // return <ServicePage page={page} />;
};

export default Roofing;
