"use client";

import React from "react";
import ServicePage from "../../../components/servicePage";
import MezzoSlider1 from "../../../assets/windows/Alside_Mezzo_Slider_Beauty-1.jpg";
import MezzoSlider2 from "../../../assets/windows/Alside_Mezzo_Slider_Beauty2.jpg";
import casement1 from "../../../assets/windows/Alside_Casement_Beauty3.jpg";
import casement2 from "../../../assets/windows/Alside_Awning_Beauty3.jpg";
import casement3 from "../../../assets/windows/Alside_Casement_Beauty2.jpg";
import casement4 from "../../../assets/windows/Alside_Awning_Beauty4.jpg";
import hung1 from "../../../assets/windows/Alside_ECMezzo_DH_Beauty.jpg";
import hung2 from "../../../assets/windows/Alside_Mezzo_DH_Beauty2.jpg";
import hung3 from "../../../assets/windows/Alside_ECMezzo_DH_Beauty3.jpg";
import door1 from "../../../assets/windows/Alside_Promenade_ClassicBeauty2.jpg";
import door2 from "../../../assets/windows/Alside_Promenade_ClassicBeauty-1.jpg";
import bay1 from "../../../assets/windows/Alside_Garden_Exterior.jpg";
import bay2 from "../../../assets/windows/Alside_Bow_Beauty5.jpg";
import bay3 from "../../../assets/windows/Alside_Garden_Beauty2.jpg";
import picture1 from "../../../assets/windows/Alside_Mezzo_SpecialShape_Beauty.jpg";
import mainImage from "../../../assets/windows/Alside_Promenade_ContemporaryBeauty.jpg";

const page = {
  title: "Premium Vinyl Windows",
  titleImage: mainImage,
  description:
    "There is so much more to the windows in your home than the frame, sashes, and glass. " +
    "The true substance is the quality and expertise built into every step of the design and  " +
    "manufacturing process. Choosing Integrity Siding And Window for your new windows, you can  " +
    "rest assured that every window is measured, custom- made, and installed to fit your windows  " +
    'precisely. We take pride is Alsides exceptional "custom-crafted" made in America quality. ' +
    "Our MEZZO windows are all ENERGY STAR certified meaning they are a positive choice for energy  " +
    "efficiency, fuel savings, and the environment. Duel-paned, double-strength insulated glass with  " +
    "energy engineered frame and sash and low- conductive composite reinforcements.",
  route: "premium_vinyl_widows",
  learnMore: false,
  types: [
    {
      name: "Double Hung Windows",
      description:
        "Built for everyday wear and tear, the expertly constructed sashes raise and lower easily on a constant force balance " +
        "system eliminating the need for sash cords, weights, and pulleys. These windows are such a simple pleasure, with their " +
        "smooth day to day operation as well as the tilt-in feature for cleaning both sides of the glass from inside your home " +
        "making them one of our most popular window options. (Single-hung windows are also available with tilt-in bottom sash only)",
      images: [hung1, hung2, hung3],
    },
    {
      name: "Sliding Windows",
      description:
        "Known for their sleek and slim silhouette, these windows have ample glass area with quiet and smooth side-gliding action " +
        "for both opening and closing horizontally, as well as tilt out easy cleaning all on a precision-engeneered nylon-encased" +
        "dual brass rolling system. These windows are made with heavy-duty construction and installed with weathertight fit to ensure " +
        "the best performance and protection.",
      images: [MezzoSlider2, MezzoSlider1],
    },
    {
      name: "Picture Windows & Unique Shapes",
      description:
        "The true beauty of these windows lie in their pure versatility. These windows invite true design and creativity while " +
        "designing your custom window-system. Big or small, alone or in combination with other widow styles these windows will always " +
        "make a statement of quality, and offer the ease of creating a dramatic focal point. Full glass expose with narrow frame offer " +
        "an unobstructed viewwiyh the ability to choose from a variety of architectural styles never feeling limited.",
      images: [picture1, picture1],
    },
    {
      name: "Casement & Awning Windows",
      description:
        "More than meets the eye while merging history and the practicality of old-world craftsmanship. Our casement" +
        "windows combine positive crank machanism handles and modern advanced window technologies, our casement sashes" +
        "open gentle outward on a state-of-art hinge system providing multi-directional ventilation and easy cleaning" +
        "from inside the home. Our awning windows feature multiple lite comfigurations available in a single majnframe" +
        "and provide refreshing airflow. Beveled exterior sash design provide this window with the appearance of larger" +
        "glass all while maintaining a modern attractive slimline look",
      images: [casement1, casement2, casement3, casement4],
    },
    {
      name: "Bay, Bow, and Garden Windows",
      description:
        "Transform your room with these stunning windows that really bring out the character you want in your home! Be that" +
        "be a cozy reading nook, a striking focal point, or bright display of your prized plants and flowers. Available in a" +
        'variety of colors and finishes bay and bow windows feature a 1- 1/4"  furniture grade veneer standard construction in' +
        'the head, seatboard, and jams. Garden windows are a clear 1" thick insulated glass unit with fully welded mainframe' +
        "for greater strength and stability.",
      images: [bay1, bay2, bay3],
    },
    {
      name: "Patio Doors",
      description:
        "Transform your room with these stunning windows that really bring out the character you want in your home! Be that" +
        "be a cozy reading nook, a striking focal point, or bright display of your prized plants and flowers. Available in a" +
        'variety of colors and finishes bay and bow windows feature a 1- 1/4"  furniture grade veneer standard construction in' +
        'the head, seatboard, and jams. Garden windows are a clear 1" thick insulated glass unit with fully welded mainframe' +
        "for greater strength and stability.",
      images: [door1, door2],
    },
  ],
};

const Windows = () => {
  return <ServicePage page={page} />;
};

export default Windows;
