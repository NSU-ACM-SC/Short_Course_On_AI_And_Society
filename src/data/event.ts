import { registrationLink } from "./registration";

export interface EventDetails {
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  venueFull: string;
  instructor: string;
  instructorTitle: string;
  institution: string;
  fee: string;
  feeNote: string;
  eligibility: string;
  facebookEvent: string;
  registrationLink: string;
  startDate: string;
}

export const eventDetails: EventDetails = {
  title: "Cornell Tech AI & Society Masterclass",
  subtitle: "A 3-Day Short Course at North South University",
  date: "30 September – 2 October 2026",
  time: "9:30 AM – 5:30 PM",
  venue: "Print Zone, North South University",
  venueFull: "Print Zone\nNorth South University",
  instructor: "Professor Mor Naaman",
  instructorTitle:
    "Don & Mibs Follett Professor of Information Science and Associate Dean for Faculty Affairs",
  institution: "Cornell Tech",
  fee: "BDT 1,500",
  feeNote: "For the full 3-day course",
  eligibility:
    "Undergraduate students from all UGC-approved universities in Bangladesh",
  facebookEvent: "https://www.facebook.com/share/1GeR3whngx/",
  registrationLink,
  startDate: "2026-09-30T09:30:00+06:00",
};

export const eventMetadata = {
  title: "Cornell Tech AI & Society Masterclass | NSU ACM Student Chapter",
  description:
    "A 3-Day Short Course on AI & Society at North South University, led by Professor Mor Naaman of Cornell Tech. September 30 – October 2, 2026. Powered by Cognition.",
  keywords: [
    "AI and Society",
    "Cornell Tech",
    "NSU ACM",
    "North South University",
    "Mor Naaman",
    "Generative AI",
    "Masterclass",
    "Short Course",
  ],
};
