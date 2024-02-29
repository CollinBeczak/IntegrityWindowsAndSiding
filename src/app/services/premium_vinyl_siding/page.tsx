"use client";

import React from "react";
import ServicePage from "../../../components/servicePage";
import casement1 from "../../../assets/windows/Alside_Casement_Beauty4.jpg";
import casement2 from "../../../assets/windows/Alside_Casement_Beauty5.jpg";
import houseImage from "../../../assets/windows/Alside_Promenade_ContemporaryBeauty.jpg";
import casement3 from "../../../assets/windows/Alside_Casement_Beauty6.jpg";

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
      description:
        "Regardless of square footage, the outside of your home is an expression of your style. Your personal inspiration can be seen from the basic design to the most ambitious detail. Our vinyl siding options encompass all of the above, whether looking for modern and contemporary, traditional and historic, or urban to suburban.",
      images: [casement1, casement2, casement3],
    },
    {
      name: "LP SmartSide",
      description:
        "One of the most durable siding solutions on the market today, thanks to the proprietary SmartGuard® process. Features engineered wood strand technology that offers superior protection against hail, wind, moisture, fungal decay, and termites. Available in 16 versatile refinished colors.",
      images: [casement1, casement2, casement3],
    },
    {
      name: "Hardie Board",
      description:
        "Traditional and timeless, sleek and strong cement siding. Hardie® Plank lap siding, shingle, trim boards, vertical panels... the possibilities are endless. It’s the most popular brand of concrete siding in North America, protecting and beautifying more homes from coast to coast.",
      images: [casement1, casement2, casement3],
    },
  ],
};

const Siding = () => {
  return <ServicePage page={page} />;
};

export default Siding;
