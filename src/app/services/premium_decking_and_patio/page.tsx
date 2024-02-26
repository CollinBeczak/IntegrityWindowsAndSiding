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
  description:
    "At Integrity Siding and Window, we offer an extensive selection of high-quality Roofing to suit every need and style. Our Roofing are designed to provide maximum energy efficiency, security, and durability while enhancing the aesthetic appeal of your home. From awning Roofing and bay Roofing to picture Roofing and slider Roofing, we have the perfect window solution for you.",
  learnMore: false,
  types: [
    {
      name: "Bay Roofing",
      description:
        "Bay Roofing are a combination of three or more Roofing projecting outward from a home’s exterior wall in a square or polygonal design forming a “bay” inside the room. Traditionally, they were associated with the Victorian era and became an architectural staple in the congested city of San Francisco because of their illusion of added.",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
    {
      name: "Bow Roofing",
      description:
        "Bow Roofing are similar to bay Roofing but have a more circular appearance, creating a curved projection from the wall. They provide a panoramic view and allow more light into the room. Bow Roofing can add architectural interest to both the interior and exterior of a home, enhancing its curb appeal and value.",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
    {
      name: "Slider Roofing",
      description:
        "Slider Roofing, also known as sliding Roofing, feature sashes that glide horizontally along tracks. They offer a contemporary look and are ideal for spaces where a projecting window could interfere with walkways, patios, or decks. Slider Roofing provide excellent ventilation and are easy to operate, making them a popular choice for modern homes.",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
  ],
};

const Decking = () => {
  return <ServicePage page={page} />;
};

export default Decking;
