import { DescriptionType, ImageType, LinkType } from "../type";
import { Armchair, Clock, Gem, NotebookPen } from "lucide-react";

export const Links: LinkType = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Products",
    url: "/",
  },
  {
    id: 3,
    name: "About",
    url: "/",
  },
  {
    id: 4,
    name: "Pricing",
    url: "/",
  },
  {
    id: 5,
    name: "Reviews",
    url: "/",
  },
];

export default Links;

export const slideImages: ImageType = [
  {
    id: 1,
    name: "Yellow Beyani Chair",
    image: "/images/singleChair1.jpg",
    type: "single chair",
    amount: "285 USD",
  },
  {
    id: 2,
    name: "Blue Beyani Chair",
    image: "/images/singleChair2.jpg",
    type: "single chair",
    amount: "285 USD",
  },
  {
    id: 3,
    name: "Green Beyani Chair",
    image: "/images/singleChair3.jpg",
    type: "single chair",
    amount: "285 USD",
  },
  {
    id: 4,
    name: "Bour Couple Chair",
    image: "/images/doubleChair1.jpg",
    type: "Double chair",
    amount: "285 USD",
  },
];


export const descriptions: DescriptionType = [
  {
    icon: Clock,
    shortDesc: "The Legacy of Comfort",
    longDesc:
      "More than a chair, it’s an heirloom. Our pieces are meticulously crafted to stand the test of time, promising a legacy of comfort that can be enjoyed for generations to come.",
  },
  {
    icon: Gem,
    shortDesc: "A Statement, Not a Seat",
    longDesc:
      "Each SitCity chair is a singular work of art. We design beyond the trends, crafting pieces that are as individual as you are—a true reflection of your unique style.",
  },
  {
    icon: NotebookPen,
    shortDesc: "The Foundation of Form",
    longDesc:
      "Beneath our elegant exteriors lies an unyielding core of strength. We select only the most resilient materials and employ master-level construction, ensuring your chair is built to withstand the test of time.",
  },
  {
    icon: Armchair,
    shortDesc: "The Pursuit of Perfection",
    longDesc:
      "Quality is the cornerstone of every SitCity creation. From the selection of full-grain leathers to the final stitch, we are relentlessly dedicated to perfection, ensuring an unparalleled level of excellence in every detail.",
  },
];
