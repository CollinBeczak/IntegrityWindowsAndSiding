"use client";

import React from "react";
import ServicePage from "../../../components/servicePage";
import windowBefore1 from "../../../assets/windows/Alside_Casement_Beauty4.jpg";
import windowBefore2 from "../../../assets/windows/Alside_Casement_Beauty5.jpg";
import houseImage from "../../../assets/windows/Alside_Promenade_ContemporaryBeauty.jpg";
import windowBefore3 from "../../../assets/windows/Alside_Casement_Beauty6.jpg";

const page = {
  title: "Premium Vinyl Siding",
  titleImage: houseImage,
  description:
    "At Integrity Siding and Window, we offer an extensive selection of high-quality Siding to suit every need and style. Our Siding are designed to provide maximum energy efficiency, security, and durability while enhancing the aesthetic appeal of your home. From awning Siding and bay Siding to picture Siding and slider Siding, we have the perfect window solution for you.",
  learnMore: false,
  route: "premium_vinyl_siding",
  types: [
    {
      name: "Bay Siding",
      description:
        "Bay Siding are a combination of three or more Siding projecting outward from a home’s exterior wall in a square or polygonal design forming a “bay” inside the room. Traditionally, they were associated with the Victorian era and became an architectural staple in the congested city of San Francisco because of their illusion of added.",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
    {
      name: "LP SmartSide",
      description:
        " One of the most durable siding solutions on the market today thanks to the proprietary SmartGuard® process. Feature engineered wood strand technology that offers superior protection against hail, wind, moisture, fungal decay and termites. Available in 16 versatile refinished colors",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
    {
      name: "Hardie Board",
      description:
        "Traditional and timeless. Sleek and strong cement siding. Hardie® Plank lap siding, shingle,  trim boards, trim boards, verticle panels... the possibilities are endless. It’s the most popular brand of concrete siding in North America, protecting and beautifying more homes from coast to coast.",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
  ],
};

const Siding = () => {
  return <ServicePage page={page} />;
};

export default Siding;
