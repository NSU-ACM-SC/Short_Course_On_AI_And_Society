export interface InstructorData {
  badge: string;
  heading: {
    prefix: string;
    highlight: string;
  };
  name: string;
  title: string;
  institution: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  bioParagraphs: string[];
  tags: string[];
}

export const instructorData: InstructorData = {
  badge: "Meet the Instructor",
  heading: {
    prefix: "Professor ",
    highlight: "Mor Naaman",
  },
  name: "Prof. Mor Naaman",
  title:
    "Don & Mibs Follett Professor of Information Science and Associate Dean for Faculty Affairs",
  institution: "Cornell Tech",
  image: {
    src: "/Short_Course_On_AI_And_Society/Mor-Namaan.jpg",
    alt: "Professor Mor Naaman — Cornell Tech",
    width: 600,
    height: 600,
  },
  bioParagraphs: [
    "Professor Mor Naaman is the Don and Mibs Follett Professor of Information Science and Associate Dean for Faculty Affairs at Cornell Tech (Cornell University). His research focuses on the intersection of technology, media, and society.",
    "With extensive experience in studying how technology mediates human communication and societal interaction, Prof. Naaman brings a unique perspective to the evolving landscape of AI and its societal implications.",
  ],
  tags: [
    "Information Science",
    "Cornell Tech",
    "AI & Society",
    "Media & Technology",
  ],
};
