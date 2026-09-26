export interface PartnerItem {
  name: string;
  logo: string;
}

export interface PartnersData {
  badge: string;
  heading: {
    prefix: string;
    highlight: string;
  };
  partners: {
    sponsors: PartnerItem[];
    broadcast: PartnerItem[];
    media: PartnerItem[];
    digitalMedia: PartnerItem[];
  };
  allPartners: PartnerItem[];
}

export const partners = {
  sponsors: [
    {
      name: "Cognition",
      logo: "/Short_Course_On_AI_And_Society/Congnition.webp",
    },
  ],
  broadcast: [
    {
      name: "Somoy TV",
      logo: "/Short_Course_On_AI_And_Society/SomoyTv.webp",
    },
  ],
  media: [
    {
      name: "Drishti 24",
      logo: "/Short_Course_On_AI_And_Society/Dristi.webp",
    },
  ],
  digitalMedia: [
    {
      name: "Agamir Somoy",
      logo: "/Short_Course_On_AI_And_Society/AgamirSomoy.webp",
    },
    {
      name: "Dainik Anandabazar",
      logo: "/Short_Course_On_AI_And_Society/DainikAnandaBazarLogo.webp",
    },
  ],
};

export const allPartners: PartnerItem[] = [
  ...partners.sponsors,
  ...partners.broadcast,
  ...partners.media,
  ...partners.digitalMedia,
];

export const partnersData: PartnersData = {
  badge: "Our Partners",
  heading: {
    prefix: "Supported ",
    highlight: "By",
  },
  partners,
  allPartners,
};
