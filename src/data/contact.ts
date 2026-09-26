export interface ChapterAddress {
  line1: string;
  line2: string;
  line3: string;
  mapUrl: string;
}

export interface ContactData {
  badge: string;
  heading: {
    prefix: string;
    highlight: string;
  };
  email: string;
  phones: string[];
  address: ChapterAddress;
}

export const chapterEmail = "acm.sc@northsouth.edu";

export const chapterPhones = [
  "01770-589276",
  "01799-667071",
  "01916-739474",
];

export const chapterAddress: ChapterAddress = {
  line1: "South Academic Building (10th Floor)",
  line2: "North South University",
  line3: "Bashundhara R/A, Dhaka-1229",
  mapUrl:
    "https://maps.google.com/?q=North+South+University,+Bashundhara,+Dhaka",
};

export const contactData: ContactData = {
  badge: "Workshop Inquiries",
  heading: {
    prefix: "Get In ",
    highlight: "Touch",
  },
  email: chapterEmail,
  phones: chapterPhones,
  address: chapterAddress,
};
