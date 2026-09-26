export interface PromoVideoData {
  badge: string;
  heading: {
    prefix: string;
    highlight: string;
  };
  poster: string;
  src: string;
  type: string;
  fallbackText: string;
}

export const promoVideoData: PromoVideoData = {
  badge: "Promo Video",
  heading: {
    prefix: "Watch the ",
    highlight: "Trailer",
  },
  poster: "/Short_Course_On_AI_And_Society/banner.webp",
  src: "/Short_Course_On_AI_And_Society/promo.mp4",
  type: "video/mp4",
  fallbackText: "Your browser does not support the video tag.",
};
