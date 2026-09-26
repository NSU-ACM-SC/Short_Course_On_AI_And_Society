export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLinks {
  YouTube: string;
  Facebook: string;
  LinkedIn: string;
  GitHub: string;
}

export const chapterSocialLinks: SocialLinks = {
  YouTube: "https://www.youtube.com/@nsuacmstudentchapter4819",
  Facebook: "https://www.facebook.com/nsuacmsc/",
  LinkedIn: "https://www.linkedin.com/company/nsuacmsc/",
  GitHub: "https://github.com/NSU-ACM-SC",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Instructor", href: "#instructor" },
  { label: "Details", href: "#details" },
  { label: "Perks", href: "#perks" },
  { label: "Partners", href: "#partners" },
];

export const quickLinks: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Instructor", href: "#instructor" },
  { label: "Details", href: "#details" },
  { label: "Registration", href: "#register" },
  { label: "Contact", href: "#contact" },
];

export const navbarData = {
  logo: {
    src: "/Short_Course_On_AI_And_Society/acm-logo.webp",
    alt: "NSU ACM Student Chapter Logo",
    text: "NSU ACM SC",
  },
  navItems,
  cta: {
    label: "Register →",
    href: "#register",
  },
};

export const footerData = {
  brand: {
    logoSrc: "/Short_Course_On_AI_And_Society/acm-logo.webp",
    title: "NSU ACM",
    subtitle: "Student Chapter",
    description:
      "Department of Electrical & Computer Engineering, North South University.",
  },
  quickLinks,
  socialLinks: chapterSocialLinks,
  copyright: "© 2026 NSU ACM Student Chapter. All rights reserved.",
  credits: "Developed by Web Group, NSU ACM Student Chapter.",
};
