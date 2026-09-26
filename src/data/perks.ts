export interface PerkItem {
  icon: string;
  title: string;
  description: string;
}

export interface PerksData {
  badge: string;
  heading: {
    prefix: string;
    highlight: string;
  };
  perks: PerkItem[];
}

export const perks: PerkItem[] = [
  {
    icon: "🍽️",
    title: "Lunch & Snacks",
    description:
      "Complimentary lunch and snacks provided throughout all 3 days of the course.",
  },
  {
    icon: "🎁",
    title: "Goodie Bag",
    description:
      "Exclusive workshop goodie bag for all participants with special course materials.",
  },
  {
    icon: "📜",
    title: "Completion Certificate",
    description:
      "Official course completion certificate upon attending all course modules.",
  },
  {
    icon: "🚀",
    title: "Devin AI Credits",
    description:
      "1 month of $20 in free AI credits on Devin AI — courtesy of Cognition.",
  },
];

export const perksData: PerksData = {
  badge: "What You Get",
  heading: {
    prefix: "More Than Just ",
    highlight: "a Course",
  },
  perks,
};
