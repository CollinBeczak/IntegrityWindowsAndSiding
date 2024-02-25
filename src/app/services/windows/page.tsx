"use client";

import React from "react";
import ServicePage from "../../../components/servicePage";
import windowBefore1 from "../../../assets/windows/Alside_Casement_Beauty4.jpg";
import windowBefore2 from "../../../assets/windows/Alside_Casement_Beauty5.jpg";
import houseImage from "../../../assets/windows/Alside_Awning_Beauty3.jpg";
import windowBefore3 from "../../../assets/windows/Alside_Casement_Beauty6.jpg";

const page = {
  title: "Windows",
  titleImage: houseImage,
  description:
    "At Integrity siding & window, we offer an extensive selection of high-quality windows to suit every need and style. Our windows are " +
    "designed to provide maximum energy efficiency, security, and durability while enhancing the aesthetic appeal of your home. From awning " +
    "windows and bay windows to picture windows and slider windows, we have the perfect window solution for you.",
  subtitle: "Integrity's windows",
  subDescription:
    "If you’re looking to add more natural light to your home, our picture windows and bay windows are perfect for providing an unobstructed " +
    "view of the outdoors while letting in plenty of sunlight. Our awning windows are ideal for adding ventilation and improving air circulation " +
    "in your home. We also offer garden windows for those who enjoy indoor gardening, and hopper windows for those looking to add a unique touch " +
    "to their home’s interior. For those who value functionality, our slider windows and double hung windows are designed to open and close easily, " +
    "providing great ventilation and an unobstructed view of the outdoors. Our casement windows are perfect for homeowners looking to maximize " +
    "natural light and ventilation in their homes while improving energy efficiency. We are committed to providing top-notch service and expertise " +
    "to our customers. Our team of professionals is equipped to guide you through the selection process and ensure that your new windows are installed " +
    "properly and efficiently. With our exceptional products and services, you can trust that your new windows will enhance your home’s aesthetic  " +
    "appeal, security, and energy efficiency for years to come.",
  types: [
    {
      name: "DOUBLE HUNG WINDOWS",
      description:
        "Built for everyday wear and tear, the expertly constructed sashes raise and lower easily on a constant force balance " +
        "system eliminating the need for sash cords, weights, and pulleys. These windows are such a simple pleasure, with their " +
        "smooth day to day operation as well as the tilt-in feature for cleaning both sides of the glass from inside your home " +
        "making them one of our most popular window options. (Single-hung windows are also available with tilt-in bottom sash only)",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
    {
      name: "SLIDING WINDOWS",
      description:
        "Known for their sleek and slim silhouette, these windows have ample glass area with quiet and smooth side-gliding action " +
        "for both opening and closing horizontally, as well as tilt out easy cleaning all on a precision-engeneered nylon-encased" +
        "dual brass rolling system. These windows are made with heavy-duty construction and installed with weathertight fit to ensure " +
        "the best performance and protection.",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
    {
      name: "PICTURE WINDOWS & UNIQUE SHAPES",
      description:
        "The true beauty of these windows lie in their pure versatility. These windows invite true design and creativity while " +
        "designing your custom window-system. Big or small, alone or in combination with other widow styles these windows will always " +
        "make a statement of quality, and offer the ease of creating a dramatic focal point. Full glass expose with narrow frame offer " +
        "an unobstructed viewwiyh the ability to choose from a variety of architectural styles never feeling limited.",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
    {
      name: "CASEMENT & AWNING WINDOWS",
      description:
        "More than meets the eye while merging history and the practicality of old-world craftsmanship. Our casement" +
        "windows combine positive crank machanism handles and modern advanced window technologies, our casement sashes" +
        "open gentle outward on a state-of-art hinge system providing multi-directional ventilation and easy cleaning" +
        "from inside the home. Our awning windows feature multiple lite comfigurations available in a single majnframe" +
        "and provide refreshing airflow. Beveled exterior sash design provide this window with the appearance of larger" +
        "glass all while maintaining a modern attractive slimline look",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
    {
      name: "BAY, BOW, AND GARDEN WINDOWS",
      description:
        "Transform your room with these stunning windows that really bring out the character you want in your home! Be that" +
        "be a cozy reading nook, a striking focal point, or bright display of your prized plants and flowers. Available in a" +
        'variety of colors and finishes bay and bow windows feature a 1- 1/4"  furniture grade veneer standard construction in' +
        'the head, seatboard, and jams. Garden windows are a clear 1" thick insulated glass unit with fully welded mainframe' +
        "for greater strength and stability.",
      images: [windowBefore1, windowBefore2, windowBefore3],
    },
  ],
};

const Windows = () => {
  return <ServicePage page={page} />;
};

export default Windows;
