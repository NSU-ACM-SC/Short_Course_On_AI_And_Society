export interface RegistrationStatItem {
  label: string;
  value: string;
}

export interface RegistrationData {
  badge: string;
  heading: {
    prefix: string;
    highlight: string;
  };
  stats: RegistrationStatItem[];
  preRegistrationLink: string;
  registrationLink: string;
  buttonLabel: string;
  alertMessage: string;
  pendingNotice: string;
  disclaimer: string;
}

// Pre-registration & registration links
export const preRegistrationLink = "https://forms.gle/ZxV6yKN3DZvfrAMs7";
export const registrationLink = "https://forms.gle/PTLPWoqfMjNxjK7m9";

export const registrationData: RegistrationData = {
  badge: "Register Now",
  heading: {
    prefix: "Secure Your ",
    highlight: "Spot",
  },
  stats: [
    { label: "Fee", value: "BDT 1,500" },
    { label: "Duration", value: "3 Days" },
    { label: "Seats", value: "Limited" },
  ],
  preRegistrationLink,
  registrationLink,
  buttonLabel: "Pre-Register Now →",
  alertMessage: "Registration link will be available soon. Stay tuned!",
  pendingNotice: "⚠ Registration link will be pasted here soon",
  disclaimer:
    "Pre-registration does not automatically confirm participation. Selected participants will receive the final registration instructions separately via their institutional email.",
};
