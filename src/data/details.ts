export interface DetailCardItem {
  icon: string;
  label: string;
  value: string;
  sub?: string;
}

export interface DetailsData {
  badge: string;
  heading: {
    prefix: string;
    highlight: string;
  };
  cards: DetailCardItem[];
}

export const detailCards: DetailCardItem[] = [
  { icon: "📅", label: "Date", value: "30 September – 2 October 2026" },
  { icon: "⏰", label: "Time", value: "9:30 AM – 5:30 PM", sub: "Each day" },
  { icon: "📍", label: "Venue", value: "Print Zone\nNorth South University" },
  {
    icon: "🎓",
    label: "Instructor",
    value: "Professor Mor Naaman\nCornell Tech",
  },
  {
    icon: "💰",
    label: "Registration Fee",
    value: "BDT 1,500",
    sub: "For the full 3-day course",
  },
  {
    icon: "✅",
    label: "Eligibility",
    value: "Undergraduate students from all UGC-approved universities",
  },
];

export const detailsData: DetailsData = {
  badge: "Event Details",
  heading: {
    prefix: "Everything You ",
    highlight: "Need to Know",
  },
  cards: detailCards,
};
