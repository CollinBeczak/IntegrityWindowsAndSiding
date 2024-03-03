"use client";

import React from "react";
import ServicesPage from "../../components/servicesPage";
import mainImage from "../../assets/windows/casement2.jpg";

const page = {
  title: "Services",
  titleImage: mainImage,
  description:
    "At Integrity siding and window, we offer an extensive selection of high-quality windows to suit every need and style. Our windows are designed to provide maximum energy efficiency, security, and durability while enhancing the aesthetic appeal of your home. From awning windows and bay windows to picture windows and slider windows, we have the perfect window solution for you.",
  learnMore: true,
  route: "",
  types: [
    {
      link: "premium_vinyl_window",
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
    },
    {
      link: "premium_vinyl_siding",
      name: "Premium Vinyl Siding",
      description:
        "Set the stage for your home with our versatile options for vinyl siding. They are all performance-engineered to protect your home from all of the elements; including pouring rain, high winds, and extreme heat cold. It only makes sense that vinyl siding wins America's popular choice with its superior durability, easy upkeep, green benefits, excellent value, and luxurious appearance. Our vinyl siding recreated the beauty of freshly pained wood siding without the negatives of chipping, splitting, rotting, or insect damage. It NEVER needs to be painted and only requires a rinse with a garden hose to remove most dirt and dust, restoring it to its like-new beauty and luxurious finish.",
    },
    {
      link: "other_services",
      name: "Integrity's Other Services",
      description: "",
    },
  ],
};

const Services = () => {
  return <ServicesPage page={page} />;
};

export default Services;
