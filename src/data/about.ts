export interface TopicItem {
  icon: string;
  text: string;
}

export interface AboutData {
  badge: string;
  heading: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  paragraphs: string[];
  topicsHeading: string;
  topics: TopicItem[];
}

export const topics: TopicItem[] = [
  { icon: "🤖", text: "Generative AI & Large Language Models" },
  { icon: "🧠", text: "Human Behavior & Communication" },
  { icon: "🔒", text: "Trust, Safety & Privacy" },
  { icon: "🎓", text: "AI in Education" },
  { icon: "💼", text: "Employment & Future of Work" },
  { icon: "🌍", text: "Broader Societal Impact of AI" },
  { icon: "⚖️", text: "Ethics & Governance of AI Systems" },
];

export const aboutData: AboutData = {
  badge: "About the Course",
  heading: {
    prefix: "Explore the ",
    highlight: "Evolving Relationship",
    suffix: " Between AI & Society",
  },
  paragraphs: [
    "The NSU ACM Student Chapter, in collaboration with the Department of Electrical & Computer Engineering at North South University, presents a special 3-day short course on AI & Society.",
    "This interactive, in-person course explores the evolving relationship between Artificial Intelligence and Society. Through engaging sessions, thought-provoking discussions, and meaningful exchanges, participants will examine how AI is shaping human behavior, communication, education, work, privacy, trust, and society at large.",
    "Led by Professor Mor Naaman, Don and Mibs Follett Professor of Information Science and Associate Dean for Faculty Affairs at Cornell Tech, the course brings together students passionate about AI, technology, and its impact on our world.",
  ],
  topicsHeading: "Topics Covered",
  topics,
};
