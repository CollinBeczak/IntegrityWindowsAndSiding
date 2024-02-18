"use client";

import React from "react";
import ServicePage from "../../components/servicePage";
import windowBefore1 from "../../assets/windows/Alside_Casement_Beauty4.jpg";
import windowBefore2 from "../../assets/windows/Alside_Casement_Beauty5.jpg";
import houseImage from "../../assets/windows/Alside_Awning_Beauty3.jpg";
import windowBefore3 from "../../assets/windows/Alside_Casement_Beauty6.jpg";
const page = {
  title: "Windows",
  titleImage: houseImage,
  description:
    "At Integrity siding & window, we offer an extensive selection of high-quality windows to suit every need and style. Our windows are designed to provide maximum energy efficiency, security, and durability while enhancing the aesthetic appeal of your home. From awning windows and bay windows to picture windows and slider windows, we have the perfect window solution for you.",
  subtitle: "Integrity's windows",
  subDescription:
    "If you’re looking to add more natural light to your home, our picture windows and bay windows are perfect for providing an unobstructed view of the outdoors while letting in plenty of sunlight. Our awning windows are ideal for adding ventilation and improving air circulation in your home. We also offer garden windows for those who enjoy indoor gardening, and hopper windows for those looking to add a unique touch to their home’s interior. For those who value functionality, our slider windows and double hung windows are designed to open and close easily, providing great ventilation and an unobstructed view of the outdoors. Our casement windows are perfect for homeowners looking to maximize natural light and ventilation in their homes while improving energy efficiency. We are committed to providing top-notch service and expertise to our customers. Our team of professionals is equipped to guide you through the selection process and ensure that your new windows are installed properly and efficiently. With our exceptional products and services, you can trust that your new windows will enhance your home’s aesthetic appeal, security, and energy efficiency for years to come.",
  types: [
    {
      name: "Bay Windows",
      description:
        "Bay windows are a combination of three or more windows projecting outward from a home’s exterior wall in a square or polygonal design forming a “bay” inside the room. Traditionally, they were associated with the Victorian era and became an architectural staple in the congested city of San Francisco because of their illusion of added.",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
    {
      name: "Bow Windows",
      description:
        "Bow windows are similar to bay windows but have a more circular appearance, creating a curved projection from the wall. They provide a panoramic view and allow more light into the room. Bow windows can add architectural interest to both the interior and exterior of a home, enhancing its curb appeal and value.",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
    {
      name: "Slider Windows",
      description:
        "Slider windows, also known as sliding windows, feature sashes that glide horizontally along tracks. They offer a contemporary look and are ideal for spaces where a projecting window could interfere with walkways, patios, or decks. Slider windows provide excellent ventilation and are easy to operate, making them a popular choice for modern homes.",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
  ],
};

const Windows = () => {
  return <ServicePage page={page} />;
};

export default Windows;
