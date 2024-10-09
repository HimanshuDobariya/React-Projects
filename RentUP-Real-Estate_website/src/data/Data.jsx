import Feature1 from "../assets/feature1.png";
import Feature2 from "../assets/feature2.png";
import Feature3 from "../assets/feature3.png";
import Feature4 from "../assets/feature4.png";
import Feature5 from "../assets/feature5.png";
import Property1 from "../assets/property-1.png";
import Property2 from "../assets/property-2.png";
import Property3 from "../assets/property-3.png";
import Property4 from "../assets/property-4.png";
import Property5 from "../assets/property-5.png";
import Property6 from "../assets/property-6.png";
import City1 from "../assets/city-1.png";
import City2 from "../assets/city-2.png";
import City3 from "../assets/city-3.png";
import City4 from "../assets/city-4.png";
import City5 from "../assets/city-5.png";
import City6 from "../assets/city-6.png";
import Team1 from "../assets/team-1.jpg";
import Team2 from "../assets/team-2.jpg";
import Team3 from "../assets/team-3.jpg";
import Team4 from "../assets/team-4.jpg";
import Team5 from "../assets/team-5.jpg";
import Team6 from "../assets/team-6.jpg";

import { FaTrophy } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export const navItems = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "services",
    path: "/services",
  },
  {
    text: "property",
    path: "/property",
  },
  {
    text: "pricing",
    path: "/pricing",
  },
  {
    text: "contact",
    path: "/contact",
  },
];

export const featuresData = [
  {
    imgSrc: Feature1,
    title: "Family House",
    subTitle: "122 Property",
  },
  {
    imgSrc: Feature2,
    title: "House & Villa",
    subTitle: "155 Property",
  },
  {
    imgSrc: Feature3,
    title: "Apartment",
    subTitle: "300 Property",
  },
  {
    imgSrc: Feature4,
    title: "Office & Studio",
    subTitle: "80 Property",
  },
  {
    imgSrc: Feature5,
    title: "Villa & Condo",
    subTitle: "80 Property",
  },
];


export const properties = [
  {
    imgSrc: Property1,
    labelFor: "For Rent",
    propertyName: "Red Carpet Real Estate",
    location: "210 Zirak Road, Canada",
    price: "$3700",
    type: "Apartment",
  },
  {
    imgSrc: Property2,
    labelFor: "For Sale",
    propertyName: "Fairmount Properties",
    location: "5698 Zirak Road, NewYork",
    price: "$9750",
    type: "Condos",
  },
  {
    imgSrc: Property3,
    labelFor: "For Rent",
    propertyName: "The Real Estate Corner",
    location: "5624 Mooker Market, USA",
    price: "$5860",
    type: "Offices",
  },
  {
    imgSrc: Property4,
    labelFor: "For Sale",
    propertyName: "Herringbone Realty",
    location: " 5621 Liverpool, London",
    price: "$7540",
    type: "Homes & Villas",
  },
  {
    imgSrc: Property5,
    labelFor: "For Rent",
    propertyName: "Brick Lane Realty",
    location: "210 Montreal Road, Canada",
    price: "$4850",
    type: "Commercial",
  },
  {
    imgSrc: Property6,
    labelFor: "For Sale",
    propertyName: "Banyon Tree Realty",
    location: "210 Zirak Road, Canada",
    price: "$2742",
    type: "Apartment",
  },
];



export const achievement = [
  {
    icon: <FaTrophy className="achieve-icon" />,
    number: "32M",
    text: "Blue Burmin Award",
  },
  {
    icon: <FaBriefcase className="achieve-icon" />,
    number: "43M",
    text: "Mimo X11 Award",
  },
  {
    icon: <FaLightbulb className="achieve-icon" />,
    number: "50M",
    text: "Australian UGC Award",
  },
  {
    icon: <FaHeart className="achieve-icon" />,
    number: "42M",
    text: "IITCA Green Award",
  },
];






















export const locations = [
  {
    imgSrc: City1,
    city: "Montreal, Canada",
    detail: {
      villas: "12 Villas",
      offices: "07 Offices",
      apartments: "Apartments",
    },
  },
  {
    imgSrc: City2,
    city: "Jerrsy, United State",
    detail: {
      villas: "12 Villas",
      offices: "07 Offices",
      apartments: "Apartments",
    },
  },
  {
    imgSrc: City3,
    city: "Liverpool, London",
    detail: {
      villas: "12 Villas",
      offices: "07 Offices",
      apartments: "Apartments",
    },
  },
  {
    imgSrc: City4,
    city: "NewYork, United States",
    detail: {
      villas: "12 Villas",
      offices: "07 Offices",
      apartments: "Apartments",
    },
  },
  {
    imgSrc: City5,
    city: "Montreal, Canada",
    detail: {
      villas: "12 Villas",
      offices: "07 Offices",
      apartments: "Apartments",
    },
  },
  {
    imgSrc: City6,
    city: "California, USA",
    detail: {
      villas: "12 Villas",
      offices: "07 Offices",
      apartments: "Apartments",
    },
  },
];





export const agents = [
  {
    listing: 50,
    imgSrc: Team1,
    location: "Liverpool, Canada",
    name: "Sargam S. Singh",
  },
  {
    listing: 48,
    imgSrc: Team2,
    location: "Montreal, Canada",
    name: "Harijeet M. Siller",
  },
  {
    listing: 70,
    imgSrc: Team3,
    location: "Denever, USA",
    name: "Anna K. Young",
  },
  {
    listing: 50,
    imgSrc: Team4,
    location: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
  },
  {
    listing: 40,
    imgSrc: Team5,
    location: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
  },
  {
    listing: 52,
    imgSrc: Team6,
    location: "Montreal, USA",
    name: "Adam K. Jollio",
  },
];







export const footerLinks = [
  {
    title: "Layout",
    links: [
      "home page",
      "about page",
      "services page",
      "property page",
      "contact page",
      "single page",
    ],
  },
  {
    title: "all section",
    links: [
      "headers",
      "features",
      "Attractive",
      "Testimonials",
      "Videos",
      "Footers",
    ],
  },
  {
    title: "company",
    links: ["about", "blog", "pricing", "Affiliate", "Login", "Changelog"],
  },
];

export const pricings = [
  {
    title: "Basic",
    price: "29",
    perUserTime: "per user, per month",
    details: [
      [<FaCheck className="check" />, "99.5% Uptime Guarantee"],
      [<FaCheck className="check" />, "120GB CDN Bandwidth"],
      [<FaCheck className="check" />, "5GB Cloud Storage"],
      [<IoMdClose className="close" />, "Personal Help Support"],
      [<IoMdClose className="close" />, "Enterprise SLA"],
    ],
    btnText: "Start Basic",
  },
  {
    title: "Standard",
    price: "49",
    perUserTime: "per user, per month",
    details: [
      [<FaCheck className="check" />, "99.5% Uptime Guarantee"],
      [<FaCheck className="check" />, "120GB CDN Bandwidth"],
      [<FaCheck className="check" />, "5GB Cloud Storage"],
      [<FaCheck className="check" />, "Personal Help Support"],
      [<IoMdClose className="close" />, "Enterprise SLA"],
    ],
    btnText: "Start Standard",
  },
  {
    title: "Platinum",
    price: "79",
    perUserTime: "2 user, per month",
    details: [
      [<FaCheck className="check" />, "99.5% Uptime Guarantee"],
      [<FaCheck className="check" />, "120GB CDN Bandwidth"],
      [<FaCheck className="check" />, "5GB Cloud Storage"],
      [<FaCheck className="check" />, "Personal Help Support"],
      [<FaCheck className="check" />, "Enterprise SLA"],
    ],
    btnText: "Start Platinum",
  },
];
