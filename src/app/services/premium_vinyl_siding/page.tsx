"use client";

import React from "react";
import ServicePage from "../../../components/servicePage";
import houseImage from "../../../assets/siding/3.jpg";
import board1 from "../../../assets/siding/board1.jpg";
import board2 from "../../../assets/siding/board2.jpg";
import harie1 from "../../../assets/siding/hardie.jpg";
import hardie2 from "../../../assets/siding/hardie2.jpg";
import smartside1 from "../../../assets/siding/smartside1.jpg";
import smartside2 from "../../../assets/siding/smartside2.jpg";
import soffit1 from "../../../assets/siding/soffit1.jpg";
import soffit2 from "../../../assets/siding/soffit2.jpg";
import vinylSiding1 from "../../../assets/siding/vinylSiding1.jpg";
import vinylSiding2 from "../../../assets/siding/vinylSiding2.jpg";

const page = {
  title: "Premium Vinyl Siding",
  titleImage: houseImage,
  description:
    "Set the stage for your home with our versatile options for vinyl siding. They are all performance-engineered to protect your home from all of the elements, including pouring rain, high winds, and extreme cold and heat. It only makes sense that vinyl siding wins America's popular choice with its superior durability, easy upkeep, environmental benefits, excellent value, and luxurious appearance. Our vinyl siding recreates the beauty of freshly painted wood siding without the drawbacks of chipping, splitting, rotting, or insect damage. It NEVER needs to be painted and only requires a rinse with a garden hose to remove most dirt and dust, restoring it to its like-new beauty and luxurious finish.",
  learnMore: false,
  route: "premium_vinyl_siding",
  types: [
    {
      name: "Vinyl Siding",
      link: "",
      description:
        "Regardless of square footage, the outside of your home is an expression of your style. Your personal inspiration can be seen from the basic design to the most ambitious detail. Our vinyl siding options encompass all of the above, whether looking for modern and contemporary, traditional and historic, or urban to suburban.",
      images: [vinylSiding1, vinylSiding2],
    },
    {
      name: "Charter Oak Vinyl Siding And Soffit",
      link: "",
      description:
        "Made to last and made to be the best! Offering performance and the beauty of natural wood, with the easy-care, durability, and convenience of Premium Vinyl Siding and soffit. An easy eco-friendly choice made to last a lifetime. Never paint, never stain, with this Alside product providing unparalleled quality and color range for you to take design control through various profiles and textures.",
      images: [soffit1, soffit2],
    },
    {
      name: "Board & Batten",
      link: "",
      description:
        "Bold, classically styled vertical lines, and eye-catching symmetry, attract homeowners who admire the distinctive architectural details that set the exterior of a home apart from the standard horizontal siding. Perfect for Victorian, Craftsman, Coastal, Classic Collonial, and Victorian homes....this Premium Vinyl Siding is guaranteed to stay straight  and even year after year with it's heavy duty panels ensuring greater strength, rigidity, and outstanding beauty.",
      images: [board1, board2],
    },
    {
      name: "LP SmartSide",
      link: "",
      description:
        "One of the most durable siding solutions on the market today, thanks to the proprietary SmartGuard® process. Features engineered wood strand technology that offers superior protection against hail, wind, moisture, fungal decay, and termites. Available in 16 versatile refinished colors.",
      images: [smartside1, smartside2],
    },
    {
      name: "Hardie Board",
      link: "",
      description:
        "Traditional and timeless, sleek and strong cement siding. Hardie® Plank lap siding, shingle, trim boards, vertical panels... the possibilities are endless. It’s the most popular brand of concrete siding in North America, protecting and beautifying more homes from coast to coast.",
      images: [harie1, hardie2],
    },
  ],
};

const Siding = () => {
  return <ServicePage page={page} />;
};

export default Siding;
