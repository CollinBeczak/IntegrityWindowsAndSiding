"use client";

import React from "react";
import ServicePage from "../../../components/servicePage";
import windowBefore1 from "../../../assets/windows/Alside_Casement_Beauty4.jpg";
import windowBefore2 from "../../../assets/windows/Alside_Casement_Beauty5.jpg";
import houseImage from "../../../assets/windows/Alside_Casement_Beauty6.jpg";
import windowBefore3 from "../../../assets/windows/Alside_Casement_Beauty6.jpg";

const page = {
  title: "Premium Decking and Patio",
  titleImage: houseImage,
  description: "N/A",
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
  return <ServicePage page={page} />;
};

export default Decking;
