import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full pt-20" id="hero">
      <Image
        src="/Short_Course_On_AI_And_Society/banner.png"
        alt="Cornell Tech AI & Society Masterclass — A Short Course featuring Prof. Mor Naaman"
        width={1400}
        height={800}
        className="w-full h-auto block"
        priority
      />
    </section>
  );
}
