"use client";

import React from "react";
import ServicePage from "../../components/servicePage";
import windowBefore1 from "../../assets/windows/Alside_Casement_Beauty4.jpg";
import windowBefore2 from "../../assets/windows/Alside_Casement_Beauty5.jpg";
import houseImage from "../../assets/windows/Alside_Awning_Beauty3.jpg";
import windowBefore3 from "../../assets/windows/Alside_Casement_Beauty6.jpg";

const page = {
  title: "Services",
  titleImage: houseImage,
  description:
    "At Integrity siding and window, we offer an extensive selection of high-quality windows to suit every need and style. Our windows are designed to provide maximum energy efficiency, security, and durability while enhancing the aesthetic appeal of your home. From awning windows and bay windows to picture windows and slider windows, we have the perfect window solution for you.",
  learnMore: true,
  route: "",
  types: [
    {
      name: "Premium Vinyl Window",
      description:
        "There is so much more to the windows in your home than the frame, sashes, and glass. " +
        "The true substance is the quality and expertise built into every step of the design and  " +
        "manufacturing process. Choosing Integrity Siding And Window for your new windows, you can  " +
        "rest assured that every window is measured, custom- made, and installed to fit your windows  " +
        'precisely. We take pride is Alside\'s exceptional "custom-crafted" made in America quality. ' +
        "Our MEZZO windows are all ENERGY STAR certified meaning they are a positive choice for energy  " +
        "efficiency, fuel savings, and the environment. Dual-paned, double-strength insulated glass with  " +
        "energy-engineered frame and sash and low-conductive composite reinforcements.",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
    {
      name: "Premium Vinyl Siding",
      description:
        "Set the stage for your home with our versatile options for vinyl siding. They are all performance-engineered to protect your home from all of the elements; including pouring rain, high winds, and extreme heat cold. It only makes sense that vinyl siding wins America's popular choice with its superior durability, easy upkeep, green benefits, excellent value, and luxurious appearance. Our vinyl siding recreated the beauty of freshly pained wood siding without the negatives of chipping, splitting, rotting, or insect damage. It NEVER needs to be painted and only requires a rinse with a garden hose to remove most dirt and dust, restoring it to its like-new beauty and luxurious finish.",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
    {
      name: "Premium Roofing",
      description:
        "Slider windows, also known as sliding windows, feature sashes that glide horizontally along tracks. They offer a contemporary look and are ideal for spaces where a projecting window could interfere with walkways, patios, or decks. Slider windows provide excellent ventilation and are easy to operate, making them a popular choice for modern homes.",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
    {
      name: "Premium Decking and Patio",
      description:
        "Slider windows, also known as sliding windows, feature sashes that glide horizontally along tracks. They offer a contemporary look and are ideal for spaces where a projecting window could interfere with walkways, patios, or decks. Slider windows provide excellent ventilation and are easy to operate, making them a popular choice for modern homes.",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
  ],
};

const Services = () => {
  return <ServicePage page={page} />;
};

export default Services;
