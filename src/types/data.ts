export interface Category {
  id: string;
  title: string;
  featured: boolean;
  cover: string;
  slug: string;
  description: string;
  portfolio: {
    projectName: string;
    projectImage: string;
    projectLocationDate: string;
  }[];
}

export const categories: Category[] = [
  {
    id: '1',
    title: "Kitchen Remodeling",
    featured: true,
    cover:
      "/images/kitchen_remodeling.webp",
    slug: "kitchen-remodeling",
    description: "Transform your kitchen into a culinary haven with Ace Design and Construction's premier remodeling services. Serving Delafield and surrounding areas, our design-build approach ensures your kitchen is both beautiful and functional. Whether you need an updated layout for a gourmet chef or a stylish space for family gatherings, our team delivers customized solutions tailored to your lifestyle. Discover our diverse portfolio, showcasing contemporary designs and timeless classics. Start your remodeling journey with a free consultation and let us create the kitchen of your dreams.",
    portfolio: [
      {
        projectName: "Modern Farmhouse Kitchen",
        projectImage: "/images/gallery/BE4A2254-HDR.webp",
        projectLocationDate: "Baltimore, MD - March 2024"
      }, 

      {
        projectName: "Contemporary Kitchen",
        projectImage: "/images/gallery/BE4A2235-HDR.webp",
        projectLocationDate: "Richmond, VA - June 2023"
      }, 

      {
        projectName: "Traditional Kitchen",
        projectImage: "/images/gallery/BE4A2103-HDR.webp",
        projectLocationDate: "Washington, DC - December 2024"
      },
    ],
  },
  {
    id: '2',
    title: "Bathroom Remodeling",
    featured: true,
    cover:
      "/images/bath_remodeling.webp",
    slug: "bathroom-remodeling",
    description: "Transform your bathroom into a luxurious and functional space with Ace Design and Construction's expert remodeling services. Serving Delafield and surrounding areas, our design-build approach ensures seamless integration of style and practicality. Whether upgrading your master suite, hallway bathroom, or powder room, our team delivers tailored solutions that enhance storage, improve safety, and add spa-like comfort. Explore our portfolio showcasing diverse styles, from modern farmhouse to traditional elegance. Begin your journey with a free consultation and let us bring your dream bathroom to life.",
    portfolio: [
      {
        projectName: "Modern Master Bathroom",
        projectImage: "/images/gallery/BE4A2254-HDR.webp",
        projectLocationDate: "Baltimore, MD - March 2024"
      }, 

      {
        projectName: "Transitional Bathroom",
        projectImage: "/images/gallery/BE4A2235-HDR.webp",
        projectLocationDate: "Richmond, VA - June 2023"
      }, 

      {
        projectName: "Contemporary Powder Room",
        projectImage: "/images/gallery/BE4A2103-HDR.webp",
        projectLocationDate: "Washington, DC - December 2024"
      },
    ],
  },
  {
    id: '3',
    title: "Interior Carpentry",
    featured: true,
    cover:
      "/images/closet_remodeling.webp",
    slug: "interior-carpentry",
    description: "Elevate your home with Ace Design and Construction's exceptional interior carpentry services. We specialize in creating bespoke woodwork that enhances the beauty and functionality of your living spaces. From custom cabinetry and built-in bookshelves to custom closets and basement remodeling, our skilled craftsmen deliver tailored solutions that reflect your style and meet your needs. Explore our portfolio to see our commitment to quality and attention to detail. Begin your project with a free consultation and let us transform your vision into reality.",
    portfolio: [
      {
        projectName: "Custom Closets",
        projectImage: "/images/gallery/BE4A2254-HDR.webp",
        projectLocationDate: "Baltimore, MD - March 2024"
      }, 

      {
        projectName: "Built-In Bookshelves",
        projectImage: "/images/gallery/BE4A2235-HDR.webp",
        projectLocationDate: "Richmond, VA - June 2023"
      }, 

      {
        projectName: "Basement Remodeling",
        projectImage: "/images/gallery/BE4A2103-HDR.webp",
        projectLocationDate: "Washington, DC - December 2024"
      },
    ],
  },
  {
    id: '4',
    title: "Custom Projects",
    featured: true,
    cover:
      "/images/more_projects.webp",
    slug: "custom-projects",
    description: "Bring your unique vision to life with Ace Design and Construction's custom projects services. Serving Delafield and surrounding areas, we specialize in crafting personalized solutions that cater to your specific needs and desires. From innovative home additions and unique architectural features to specialized cabinetry and creative storage solutions, our team delivers exceptional craftsmanship and attention to detail. Explore our portfolio to see the diverse range of projects we've completed. Start your journey with a free consultation and let us make your dream project a reality.",
    portfolio: [
      {
        projectName: "Home Additions",
        projectImage: "/images/gallery/BE4A2254-HDR.webp",
        projectLocationDate: "Baltimore, MD - March 2024",
      }, 

      {
        projectName: "Architectural Features",
        projectImage: "/images/gallery/BE4A2235-HDR.webp",
        projectLocationDate: "Richmond, VA - June 2023",
      }, 

      {
        projectName: "Specialized Cabinetry",
        projectImage: "/images/gallery/BE4A2103-HDR.webp",
        projectLocationDate: "Washington, DC - December 2024",
      },
    ],
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
