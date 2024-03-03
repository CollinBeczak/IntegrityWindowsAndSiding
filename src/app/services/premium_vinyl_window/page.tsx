"use client";

import React from "react";
import ServicePage from "../../../components/servicePage";

import MezzoSlider1 from "../../../assets/windows/mezzo1.jpg";
import MezzoSlider2 from "../../../assets/windows/mezzo2.jpg";

import casement1 from "../../../assets/windows/casement1.jpg";
import casement2 from "../../../assets/windows/casement2.jpg";
import casement3 from "../../../assets/windows/casement3.jpg";
import casement4 from "../../../assets/windows/casement4.jpg";

import hung1 from "../../../assets/windows/hung1.jpg";
import hung2 from "../../../assets/windows/hung2.jpg";
import hung3 from "../../../assets/windows/hung3.jpg";

import door1 from "../../../assets/windows/door1.jpg";
import door2 from "../../../assets/windows/door2.jpg";

import bay1 from "../../../assets/windows/bay1.jpg";
import bay2 from "../../../assets/windows/bay2.jpg";
import bay3 from "../../../assets/windows/bay3.jpg";

import picture1 from "../../../assets/windows/picture1.jpg";
import picture2 from "../../../assets/windows/picture2.jpg";
import picture3 from "../../../assets/windows/picture3.jpg";

import mainImage from "../../../assets/windows/main.jpg";

const page = {
  title: "Premium Vinyl Windows",
  titleImage: mainImage,
  description:
    "There is so much more to the windows in your home than the frame, sashes, and glass. " +
    "The true substance is the quality and expertise built into every step of the design and  " +
    "manufacturing process. Choosing Integrity Siding And Window for your new windows, you can  " +
    "rest assured that every window is measured, custom- made, and installed to fit your windows  " +
    'precisely. We take pride is Alside\'s exceptional "custom-crafted" made in America quality. ' +
    "Our MEZZO windows are all ENERGY STAR certified meaning they are a positive choice for energy  " +
    "efficiency, fuel savings, and the environment. Dual-paned, double-strength insulated glass with  " +
    "energy-engineered frame and sash and low-conductive composite reinforcements.",
  route: "premium_vinyl_windows",
  learnMore: false,
  types: [
    {
      name: "Double Hung Windows",
      description:
        "Built for everyday wear and tear, the expertly constructed sashes raise and lower easily on a constant force balance " +
        "system eliminating the need for sash cords, weights, and pulleys. These windows are such a simple pleasure, with their " +
        "smooth day-to-day operation as well as the tilt-in feature for cleaning both sides of the glass from inside your home " +
        "making them one of our most popular window options. (Single-hung windows are also available with tilt-in bottom sash only)",
      images: [hung1, hung2, hung3],
    },
    {
      name: "Sliding Windows",
      description:
        "Known for their sleek and slim silhouette, these windows have ample glass area with quiet and smooth side-gliding action " +
        "for both opening and closing horizontally, as well as tilt-out easy cleaning all on a precision-engineered nylon-encased" +
        "dual brass rolling system. These windows are made with heavy-duty construction and installed with weathertight fit to ensure " +
        "the best performance and protection.",
      images: [MezzoSlider2, MezzoSlider1],
    },
    {
      name: "Picture Windows & Unique Shapes",
      description:
        "The true beauty of these windows lies in their pure versatility. These windows invite true design and creativity while " +
        "designing your custom window-system. Big or small, alone or in combination with other window styles these windows will always " +
        "make a statement of quality and offer the ease of creating a dramatic focal point. Full glass exposure with narrow frame offer " +
        "an unobstructed view with the ability to choose from a variety of architectural styles never feeling limited.",
      images: [picture1, picture2, picture3],
    },
    {
      name: "Casement & Awning Windows",
      description:
        "More than meets the eye while merging history and the practicality of old-world craftsmanship. Our casement " +
        "windows combine positive crank mechanism handles and modern advanced window technologies, our casement sashes " +
        "open gentle outward on a state-of-the-art hinge system providing multi-directional ventilation and easy cleaning " +
        "from inside the home. Our awning windows feature multiple lite configurations available in a single mainframe " +
        "and provide refreshing airflow. Beveled exterior sash design provides this window with the appearance of larger " +
        "glass all while maintaining a modern attractive slimline look",
      images: [casement1, casement2, casement3, casement4],
    },
    {
      name: "Bay, Bow, and Garden Windows",
      description:
        "Transform your room with these stunning windows that really bring out the character you want in your home! Be that " +
        "be a cozy reading nook, a striking focal point, or bright display of your prized plants and flowers. Available in a " +
        'variety of colors and finishes bay and bow windows feature a 1-1/4"  furniture-grade veneer standard construction in ' +
        'the head, seatboard, and jams. Garden windows are a clear 1" thick insulated glass unit with fully welded mainframe ' +
        "for greater strength and stability.",
      images: [bay1, bay2, bay3],
    },
    {
      name: "Premium Vinyl Patio Doors",
      description:
        "The greatest measurement for patio doors is their performance. Excellent construction combines with quality design, " +
        "smooth operation, and everlasting beauty make our doors a premier choice. Offering classic style, contemporary, and French, " +
        "you can't go wrong with our Premium Vinyl mainframes and sashes that will never peel, chip, warp, or crack. Steel " +
        "reinforcements increase the structural integrity while the precision-engineered tandem roller system ensures easy and quiet " +
        "door operation. Offering a variety of solid colors and woodgrain options, these are available in multiple panel style options.",
      images: [door1, door2],
    },
  ],
};

const Windows = () => {
  return <ServicePage page={page} />;
};

export default Windows;
