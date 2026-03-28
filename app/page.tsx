import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import Usecase from "@/components/Usecase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0B0F19] text-white relative">
      {/* top right glow */}
      <div style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "500px",
        height: "500px",
        background: "rgba(139, 92, 246, 0.15)",
        filter: "blur(130px)",
        borderRadius: "50%",
        zIndex: 0,
        pointerEvents: "none"
      }} />
      {/* bottom left glow */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "500px",
        height: "500px",
        background: "rgba(139, 92, 246, 0.25)",
        filter: "blur(130px)",
        borderRadius: "50%",
        zIndex: 0,
        pointerEvents: "none"
      }} />
      {/* wrap content above blobs */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Problems/>
        <Solution/>
        <Usecase/>
        <Footer/>
      </div>
    </main>
  );
}