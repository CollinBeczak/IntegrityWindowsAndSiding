"use client";

import React from "react";
import ServicePage from "../../components/servicePage";
import windowBefore1 from "../../assets/windows/Alside_Casement_Beauty4.jpg";
import windowBefore2 from "../../assets/windows/Alside_Casement_Beauty5.jpg";
import houseImage from "../../assets/windows/Alside_Promenade_ClassicBeauty2.jpg";
import windowBefore3 from "../../assets/windows/Alside_Casement_Beauty6.jpg";
const page = {
  title: "Gutters",
  titleImage: houseImage,
  description:
    "At Integrity siding & window, we offer an extensive selection of high-quality Gutters to suit every need and style. Our Gutters are designed to provide maximum energy efficiency, security, and durability while enhancing the aesthetic appeal of your home. From awning Gutters and bay Gutters to picture Gutters and slider Gutters, we have the perfect window solution for you.",
  subtitle: "Integrity's Gutters",
  subDescription:
    "If you’re looking to add more natural light to your home, our picture Gutters and bay Gutters are perfect for providing an unobstructed view of the outdoors while letting in plenty of sunlight. Our awning Gutters are ideal for adding ventilation and improving air circulation in your home. We also offer garden Gutters for those who enjoy indoor gardening, and hopper Gutters for those looking to add a unique touch to their home’s interior. For those who value functionality, our slider Gutters and double hung Gutters are designed to open and close easily, providing great ventilation and an unobstructed view of the outdoors. Our casement Gutters are perfect for homeowners looking to maximize natural light and ventilation in their homes while improving energy efficiency. We are committed to providing top-notch service and expertise to our customers. Our team of professionals is equipped to guide you through the selection process and ensure that your new Gutters are installed properly and efficiently. With our exceptional products and services, you can trust that your new Gutters will enhance your home’s aesthetic appeal, security, and energy efficiency for years to come.",
  types: [
    {
      name: "Bay Gutters",
      description:
        "Bay Gutters are a combination of three or more Gutters projecting outward from a home’s exterior wall in a square or polygonal design forming a “bay” inside the room. Traditionally, they were associated with the Victorian era and became an architectural staple in the congested city of San Francisco because of their illusion of added.",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
    {
      name: "Bow Gutters",
      description:
        "Bow Gutters are similar to bay Gutters but have a more circular appearance, creating a curved projection from the wall. They provide a panoramic view and allow more light into the room. Bow Gutters can add architectural interest to both the interior and exterior of a home, enhancing its curb appeal and value.",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
    {
      name: "Slider Gutters",
      description:
        "Slider Gutters, also known as sliding Gutters, feature sashes that glide horizontally along tracks. They offer a contemporary look and are ideal for spaces where a projecting window could interfere with walkways, patios, or decks. Slider Gutters provide excellent ventilation and are easy to operate, making them a popular choice for modern homes.",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
  ],
};

const Gutters = () => {
  return <ServicePage page={page} />;
};

export default Gutters;