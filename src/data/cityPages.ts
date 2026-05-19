import { business } from "./site";

const coreServices = [
  "Septic pumping",
  "Septic inspections",
  "Emergency septic service",
  "Septic maintenance",
  "Septic tank locating",
  "Drain field diagnostics",
  "Grease trap pumping for kitchens and qualifying commercial sites",
];

const serviceLinks = [
  { href: "/services/septic-pumping/", label: "Septic Pumping" },
  { href: "/services/septic-inspections/", label: "Septic Inspections" },
  { href: "/services/emergency-septic-service/", label: "Emergency Septic Service" },
  { href: "/services/septic-tank-locating/", label: "Septic Tank Locating" },
  { href: "/services/drain-field-diagnostics/", label: "Drain Field Diagnostics" },
  { href: "/services/grease-trap-pumping/", label: "Grease Trap Pumping" },
];

export const cityPages = [
  {
    name: "Greeneville",
    slug: "greeneville",
    seoTitle: "Septic and Wastewater Service in Greeneville, TN",
    metaDescription:
      "Professional septic pumping, inspections, maintenance, emergency septic service, drain field diagnostics, and grease trap pumping for Greeneville properties.",
    h1: "Septic and wastewater service in Greeneville, TN.",
    intro:
      "Appalachian Wastewater serves Greeneville properties with professional septic and wastewater service for homes, restaurants, churches, rentals, small businesses, and light commercial sites.",
    localContext:
      "Greeneville includes a wide mix of in-town properties, rural roads, restaurants, churches, rentals, and older septic systems. Service needs can range from routine pumping to urgent backups and grease trap maintenance.",
    whyLocal:
      "Greeneville property owners choose Appalachian Wastewater for clear communication, clean field practices, and a premium service experience that still feels practical and local.",
    propertyTypes: "homes, rural properties, restaurants, churches, rental properties, small businesses, and light commercial properties",
  },
  {
    name: "Chuckey",
    slug: "chuckey",
    seoTitle: "Septic Service in Chuckey, TN",
    metaDescription:
      "Septic pumping, inspections, maintenance, emergency septic service, locating, diagnostics, and wastewater support for Chuckey homes, farms, cabins, and businesses.",
    h1: "Septic service for Chuckey properties.",
    intro:
      "Appalachian Wastewater supports Chuckey properties with approachable, professional service for septic and wastewater systems on rural sites, homes, cabins, churches, rentals, and small businesses.",
    localContext:
      "Chuckey properties often include rural access, larger lots, farms, cabins, and private septic systems that benefit from dependable maintenance and clear scheduling.",
    whyLocal:
      "Property owners in Chuckey can expect straightforward guidance, respectful site work, and service that accounts for rural access and practical property needs.",
    propertyTypes: "rural properties, farms, homes, cabins, churches, rentals, and small businesses",
  },
  {
    name: "Bulls Gap",
    slug: "bulls-gap",
    seoTitle: "Septic and Wastewater Service in Bulls Gap, TN",
    metaDescription:
      "Professional septic pumping, inspections, emergency septic service, maintenance, locating, diagnostics, and grease trap pumping for Bulls Gap properties.",
    h1: "Septic and wastewater service in Bulls Gap.",
    intro:
      "Appalachian Wastewater provides septic pumping, inspections, maintenance, emergency septic help, and wastewater support for Bulls Gap properties and nearby rural sites.",
    localContext:
      "Bulls Gap includes homes, small businesses, rural properties, and highway-adjacent sites where reliable septic service and clear communication matter.",
    whyLocal:
      "Appalachian Wastewater brings organized service, clean practices, and practical recommendations for property owners who need septic work handled without confusion.",
    propertyTypes: "homes, rural properties, restaurants, small businesses, rentals, and light commercial properties",
  },
  {
    name: "Afton",
    slug: "afton",
    seoTitle: "Septic Service in Afton, TN",
    metaDescription:
      "Septic pumping, inspections, maintenance, emergency septic service, tank locating, and drain field diagnostics for Afton homes, farms, cabins, and businesses.",
    h1: "Septic service for Afton properties.",
    intro:
      "Appalachian Wastewater serves Afton with professional septic and wastewater service for homes, rural properties, farms, cabins, churches, rentals, and small businesses.",
    localContext:
      "Afton properties may involve rural access, older systems, long driveways, and varied site conditions. A clear service plan helps keep septic work simple for property owners.",
    whyLocal:
      "Afton customers choose Appalachian Wastewater for responsive scheduling, clear explanations, and a premium service standard for rural and residential properties.",
    propertyTypes: "homes, farms, rural properties, cabins, churches, rentals, and small businesses",
  },
  {
    name: "Jonesborough",
    slug: "jonesborough",
    seoTitle: "Septic and Wastewater Service in Jonesborough, TN",
    metaDescription:
      "Professional septic pumping, septic inspections, emergency septic service, drain field diagnostics, and grease trap pumping for Jonesborough properties.",
    h1: "Septic and wastewater service in Jonesborough.",
    intro:
      "Appalachian Wastewater supports Jonesborough properties with septic pumping, inspections, emergency septic service, maintenance, diagnostics, and grease trap pumping where relevant.",
    localContext:
      "Jonesborough has a mix of established properties, rural edges, rentals, small businesses, restaurants, churches, and private septic systems that benefit from dependable service.",
    whyLocal:
      "Property owners in Jonesborough can count on practical recommendations, clean service, and communication that is easy to understand.",
    propertyTypes: "homes, rural properties, restaurants, churches, rental properties, small businesses, and light commercial sites",
  },
  {
    name: "Parrottsville",
    slug: "parrottsville",
    seoTitle: "Septic Service in Parrottsville, TN",
    metaDescription:
      "Septic pumping, inspections, maintenance, emergency septic service, locating, and drain field diagnostics for Parrottsville rural properties, homes, cabins, and businesses.",
    h1: "Septic service for Parrottsville properties.",
    intro:
      "Appalachian Wastewater provides professional septic service for Parrottsville homes, cabins, farms, churches, rental properties, and small businesses.",
    localContext:
      "Parrottsville service often means rural properties, private systems, and access conditions that call for organized scheduling and a practical approach.",
    whyLocal:
      "Appalachian Wastewater helps Parrottsville property owners understand septic problems, plan routine pumping, and respond when a system needs attention.",
    propertyTypes: "rural properties, homes, cabins, farms, churches, rentals, and small businesses",
  },
  {
    name: "Rogersville",
    slug: "rogersville",
    seoTitle: "Septic and Wastewater Service in Rogersville, TN",
    metaDescription:
      "Professional septic pumping, inspections, emergency septic service, maintenance, drain field diagnostics, and grease trap pumping for Rogersville properties.",
    h1: "Septic and wastewater service in Rogersville.",
    intro:
      "Appalachian Wastewater serves Rogersville properties with septic pumping, inspections, maintenance, emergency septic service, diagnostics, and grease trap pumping for qualifying sites.",
    localContext:
      "Rogersville properties include homes, rural land, restaurants, churches, rentals, and small businesses that may depend on private septic and wastewater systems.",
    whyLocal:
      "Rogersville property owners choose Appalachian Wastewater for professional service, clear communication, and a regional team focused on practical wastewater needs.",
    propertyTypes: "homes, rural properties, restaurants, churches, rentals, small businesses, and light commercial properties",
  },
  {
    name: "Baileyton",
    slug: "baileyton",
    seoTitle: "Septic Service in Baileyton, TN",
    metaDescription:
      "Septic pumping, inspections, maintenance, emergency septic service, tank locating, and drain field diagnostics for Baileyton homes, rural properties, and businesses.",
    h1: "Septic service for Baileyton properties.",
    intro:
      "Appalachian Wastewater supports Baileyton properties with professional septic pumping, inspections, maintenance, emergency septic help, locating, and drain field diagnostics.",
    localContext:
      "Baileyton properties often include rural homes, small businesses, churches, rentals, and private systems where routine service can prevent bigger interruptions.",
    whyLocal:
      "Appalachian Wastewater keeps service straightforward for Baileyton property owners with clear next steps, clean work, and dependable communication.",
    propertyTypes: "homes, rural properties, churches, rental properties, small businesses, and light commercial sites",
  },
  {
    name: "Tusculum",
    slug: "tusculum",
    seoTitle: "Septic and Wastewater Service in Tusculum, TN",
    metaDescription:
      "Professional septic pumping, inspections, maintenance, emergency septic service, locating, diagnostics, and wastewater support for Tusculum properties.",
    h1: "Septic and wastewater service in Tusculum.",
    intro:
      "Appalachian Wastewater serves Tusculum properties with septic pumping, inspections, maintenance, emergency septic service, tank locating, and drain field diagnostics.",
    localContext:
      "Tusculum properties can include established homes, rentals, churches, small businesses, and rural sites where private wastewater systems need professional attention.",
    whyLocal:
      "Tusculum property owners choose Appalachian Wastewater for a polished service experience, practical guidance, and local septic knowledge.",
    propertyTypes: "homes, rental properties, churches, rural properties, small businesses, and light commercial sites",
  },
  {
    name: "Mosheim",
    slug: "mosheim",
    seoTitle: "Septic Service in Mosheim, TN",
    metaDescription:
      "Septic pumping, inspections, emergency septic service, maintenance, tank locating, drain field diagnostics, and grease trap pumping for Mosheim properties.",
    h1: "Septic service for Mosheim properties.",
    intro:
      "Appalachian Wastewater provides septic and wastewater service for Mosheim homes, rural properties, restaurants, churches, rentals, small businesses, and light commercial sites.",
    localContext:
      "Mosheim includes residential, rural, and business properties where septic pumping, inspections, maintenance, and grease trap service may all be part of responsible property care.",
    whyLocal:
      "Mosheim customers can expect professional communication, clean field practices, and a service approach that keeps the process understandable.",
    propertyTypes: "homes, rural properties, restaurants, churches, rentals, small businesses, and light commercial properties",
  },
  {
    name: "Mohawk",
    slug: "mohawk",
    seoTitle: "Septic Service in Mohawk, TN",
    metaDescription:
      "Professional septic pumping, inspections, maintenance, emergency septic service, tank locating, and drain field diagnostics for Mohawk rural properties, homes, and businesses.",
    h1: "Septic service for Mohawk properties.",
    intro:
      "Appalachian Wastewater serves Mohawk properties with septic pumping, inspections, maintenance, emergency septic help, tank locating, and drain field diagnostics.",
    localContext:
      "Mohawk properties often involve rural service needs, private septic systems, cabins, churches, rentals, farms, and access details that benefit from clear communication.",
    whyLocal:
      "Appalachian Wastewater helps Mohawk property owners schedule service, understand warning signs, and keep septic systems easier to manage.",
    propertyTypes: "rural properties, homes, farms, cabins, churches, rentals, and small businesses",
  },
  {
    name: "Limestone",
    slug: "limestone",
    seoTitle: "Septic and Wastewater Service in Limestone, TN",
    metaDescription:
      "Septic pumping, inspections, maintenance, emergency septic service, drain field diagnostics, and grease trap pumping for Limestone homes, rural properties, and businesses.",
    h1: "Septic and wastewater service in Limestone.",
    intro:
      "Appalachian Wastewater provides professional septic and wastewater service for Limestone homes, rural properties, cabins, churches, rentals, restaurants, and small businesses.",
    localContext:
      "Limestone properties may include rural land, older septic systems, cabins, churches, rentals, and small business sites that need dependable service and practical guidance.",
    whyLocal:
      "Limestone property owners choose Appalachian Wastewater for responsive communication, clean service, and clear recommendations without unnecessary jargon.",
    propertyTypes: "homes, rural properties, cabins, churches, rentals, restaurants, and small businesses",
  },
];

export const cityPageMap = new Map(cityPages.map((city) => [city.slug, city]));

export { coreServices, serviceLinks, business };
