export interface CountdownData {
  startedText: string;
  upcomingText: string;
  units: {
    days: string;
    hours: string;
    mins: string;
    secs: string;
  };
  registerButton: {
    label: string;
    fallbackHref: string;
  };
  facebookButton: {
    label: string;
  };
}

export const countdownData: CountdownData = {
  startedText: "The Course Has Begun!",
  upcomingText: "Course Starts In",
  units: {
    days: "Days",
    hours: "Hours",
    mins: "Mins",
    secs: "Secs",
  },
  registerButton: {
    label: "Register Now →",
    fallbackHref: "#register",
  },
  facebookButton: {
    label: "Facebook Event",
  },
};
