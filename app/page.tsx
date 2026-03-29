import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import Usecase from "@/components/Usecase";
import Pilot from "@/components/Pilot";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="text-[#0F0A1E]">
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
      <Usecase />
      <Pilot />
      <Footer />
    </main>
  );
}