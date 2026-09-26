import Image from "next/image";
import { heroData } from "@/data/hero";

export default function Hero() {
  return (
    <section className="relative w-full pt-20" id="hero">
      <Image
        src={heroData.imageSrc}
        alt={heroData.altText}
        width={heroData.width}
        height={heroData.height}
        className="w-full h-auto block"
        priority
      />
    </section>
  );
}
