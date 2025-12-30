import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HubungiKami from "@/components/HubungiKami";
import KualitasKami from "@/components/KualitasKami";
import LayananKami from "@/components/LayananKami";
import TentangKami from "@/components/TentangKami";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <KualitasKami />
      <TentangKami />
      <LayananKami />
      <HubungiKami />
      <Footer />
    </div>
  );
}
