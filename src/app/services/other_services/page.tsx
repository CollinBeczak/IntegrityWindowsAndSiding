"use client";

import React from "react";
import ServicePage from "../../../components/servicePage";
import roof1 from "../../../assets/other/roof1.jpg";
import roof2 from "../../../assets/other/roof2.jpg";
import roof3 from "../../../assets/other/roof3.jpg";
import outdoor1 from "../../../assets/other/3.jpg";
import outdoor2 from "../../../assets/other/4.jpg";
import outdoor3 from "../../../assets/other/5.jpg";
import houseImage from "../../../assets/other/roof3.jpg";

const page = {
  title: "Integrity's Other Services",
  titleImage: houseImage,
  description: "",
  learnMore: false,
  route: "",
  types: [
    {
      name: "Premium Roofing",
      link: "",
      description:
        "Integrity has 30 years of experience working with all major insurance companies offering premium roofing products from manufacturers such as TAMKO, CERTAINTEED, OWENS CORNING and MALARKEY.",
      images: [roof1, roof2, roof3],
    },
    {
      name: "Premium Outdoor Living",
      link: "",
      description:
        "Outdoor Living has become very popular over the years. Integrity can build you the outdoor living space of your dreams. From composite, to cedar, to pressure-treated! You can trust us with your project. The Simple to lavish enertainment Decks, large and airy pergolas, stick built patio covers, we have you covered.",
      images: [outdoor1, outdoor2, outdoor3],
    },
  ],
};

const Decking = () => {
  return <ServicePage page={page} />;
};

export default Decking;
