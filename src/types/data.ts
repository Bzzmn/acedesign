export interface Category {
  id: string;
  title: string;
  featured: boolean;
  cover: string;
}

export const categories: Category[] = [
  {
    id: '1',
    title: "Kitchen Remodeling",
    featured: true,
    cover:
      "/images/kitchen_remodeling.webp",
  },
  {
    id: '2',
    title: "Bathroom Remodeling",
    featured: true,
    cover:
      "/images/bath_remodeling.webp",
  },
  {
    id: '3',
    title: "Interior Carpentry",
    featured: true,
    cover:
      "/images/closet_remodeling.webp",
  },
  {
    id: '4',
    title: "Custom Projects",
    featured: true,
    cover:
      "/images/more_projects.webp",
  }
];

export interface Project {
  date: string;
  title: string;
  location: string;
  image: string;
  description: string;
}

export const projects: Project[] = [
  {
    date: "March 2024",
    title: "Kitchen Remodeling",
    location: "Baltimore, MD",
    image: "/images/kitchen_remodeling.webp",
    description: "Our skilled team reimagined this outdated kitchen into a sleek, modern culinary space. The renovation includes custom cabinetry with high-gloss finishes, a marble countertop island, and state-of-the-art stainless steel appliances. Ambient lighting and a herringbone tile backsplash were also integrated to enhance the kitchen's aesthetic and functionality.",
  },
  {
    date: "June 2023",
    title: "Bathroom Remodeling",
    location: "Richmond, VA",
    image: "/images/gallery/BE4A1933-HDR.webp",
    description: "Our team of experts transformed this dated bathroom into a contemporary oasis. The new bathroom boasts a walk-in rain shower with a minimalist glass enclosure, a dual vanity with granite countertops, and high-end fixtures. A freestanding tub and heated floors add to the luxurious feel, complemented by a fresh, modern color palette.",
  },
  {
    date: "September 2023",
    title: "Custom Closets",
    location: "Alexandria, VA",
    image: "/images/gallery/BE4A2016-HDR.webp",
    description: "This custom closet project in Alexandria, VA, was completed in September 2023. Our team designed and installed tailored storage solutions that maximize space efficiency while maintaining aesthetic appeal. Features include built-in shelves, automated LED lighting, and soft-close drawers, all finished in a classic wood grain.",
  },
  {
    date: "December 2024",
    title: "More Projects",
    location: "Washington, DC",
    image: "/images/BE4A1790-HDR.webp",
    description: "Our comprehensive project in Washington, DC, featured a variety of home improvements, including kitchen updates, bathroom renovations, and custom installations. Completed in December 2024, this project highlights our versatility and commitment to enhancing every aspect of home living through thoughtful design and skilled craftsmanship.",
  }
];

export interface IconCard {
  id: string;
  title: string;
  text: string;
  icon: string;
}


export interface Partner {
  name: string;
  image: string;
  url: string;
}

export const partners: Partner[] = [
  {
    name: "HomeAdvisor",
    image: "/images/brands/fabuwood.svg",
    url: "https://www.fabuwood.com/",
  },
  {
    name: "Kemper",
    image: "/images/brands/Kemper-logo.png",
    url: "https://www.kempercabinets.com/",
  },
  {
    name: "Showplace",
    image: "/images/brands/showplace.svg",
    url: "https://showplacecabinetry.com/",
  },
  {
    name: "Silestone",
    image: "/images/brands/silestone.png",
    url: "https://www.silestone-usa.com/silestone-color-options"
  },
  {
    name: "Ultracraft",
    image: "/images/brands/ultracraft.svg",
    url: "https://www.ultracraft.com/",
  }, 
  {
    name: "The Bold Look of Kohler",
    image: "/images/brands/BoldLookBlk.png",
    url: "https://www.kohler.com/en/",
  }
];
