"use client";

import React from "react";
import ServicePage from "../../../components/servicePage";
import windowBefore1 from "../../../assets/windows/1.jpg";
import windowBefore2 from "../../../assets/windows/1.jpg";
import houseImage from "../../../assets/windows/1.jpg";
import windowBefore3 from "../../../assets/windows/1.jpg";

const page = {
  title: "Premium Outdoor Living",
  titleImage: houseImage,
  description:
    "Outdoor Living has become very popular over the years. Integrity can build you the outdoor living space of your dreams. From composite, to cedar, to pressure-treated! You can trust us with your project. The Simple to lavish enertainment Decks, large and airy pergolas, stick built patio covers, we have you covered.",
  learnMore: false,
  route: "",
  types: [
    {
      name: "N/A",
      description: "no decking and patio info yet",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
  ],
};

const Decking = () => {
  return;
  // return <ServicePage page={page} />;
};

export default Decking;
