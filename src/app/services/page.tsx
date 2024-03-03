"use client";

import React from "react";
import ServicePage from "../../components/servicePage";
import mainImage from "../../assets/servicePhoto.jpg";
import hung3 from "../../assets/windows/hung1.jpg";
import bay3 from "../../assets/windows/bay3.jpg";
import picture3 from "../../assets/windows/picture3.jpg";
import vinylSiding2 from "../../assets/siding/vinylSiding2.jpg";
import soffit2 from "../../assets/siding/soffit2.jpg";
import hardie2 from "../../assets/siding/hardie2.jpg";
import outdoor2 from "../../assets/other/4.jpg";
import roof3 from "../../assets/other/roof3.jpg";
import outdoor3 from "../../assets/other/5.jpg";

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
      images: [hung3, bay3, picture3],
    },
    {
      link: "premium_vinyl_siding",
      name: "Premium Vinyl Siding",
      description:
        "Set the stage for your home with our versatile options for vinyl siding. They are all performance-engineered to protect your home from all of the elements; including pouring rain, high winds, and extreme heat cold. It only makes sense that vinyl siding wins America's popular choice with its superior durability, easy upkeep, green benefits, excellent value, and luxurious appearance. Our vinyl siding recreated the beauty of freshly pained wood siding without the negatives of chipping, splitting, rotting, or insect damage. It NEVER needs to be painted and only requires a rinse with a garden hose to remove most dirt and dust, restoring it to its like-new beauty and luxurious finish.",
      images: [vinylSiding2, soffit2, hardie2],
    },
    {
      link: "other_services",
      name: "Integrity's Other Services",
      description:
        "Integrity also specializes in a variety of other services. Outdoor Living has become very popular over the years. Integrity can build you the outdoor living space of your dreams. From composite, to cedar, to pressure-treated! You can trust us with your project. The Simple to lavish enertainment Decks, large and airy pergolas, stick built patio covers, we have you covered. Integrity has 30 years of experience working with all major insurance companies offering premium roofing products from manufacturers such as TAMKO, CERTAINTEED, OWENS CORNING and MALARKEY.",
      images: [outdoor2, roof3, outdoor3],
    },
  ],
};

const Services = () => {
  return <ServicePage page={page} />;
};

export default Services;
