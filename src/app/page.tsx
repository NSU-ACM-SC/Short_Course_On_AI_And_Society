import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import PromoVideo from "@/components/PromoVideo";
import Instructor from "@/components/Instructor";
import Details from "@/components/Details";
import Perks from "@/components/Perks";
import Registration from "@/components/Registration";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <Ticker />
        <About />
        <PromoVideo />
        <Instructor />
        <Details />
        <Perks />
        <Registration />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
