import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import RepCounter from "@/components/RepCounter";
import Programs from "@/components/Programs";
import Stats from "@/components/Stats";
import Coaches from "@/components/Coaches";
import FloorStrip from "@/components/FloorStrip";
import Schedule from "@/components/Schedule";
import Plans from "@/components/Plans";
import FounderQuote from "@/components/FounderQuote";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <RepCounter />
      <Hero />
      <Programs />
      <Stats />
      <Coaches />
      <FloorStrip />
      <Schedule />
      <Plans />
      <FounderQuote />
      <Visit />
      <Footer />
    </main>
  );
}
