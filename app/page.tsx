import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Biografia from "@/components/Biografia";
import GaleriaPrensa from "@/components/GaleriaPrensa";
import LoMasReciente from "@/components/LoMasReciente";
import SpotifyEmbed from "@/components/SpotifyEmbed";
import ProximosLanzamientos from "@/components/ProximosLanzamientos";
import BookingCTA from "@/components/BookingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative w-full min-h-screen bg-black text-silver overflow-x-hidden">
        <Hero />

        <div
          className="section-divider relative"
          data-label="// BIOGRAFÍA //"
        />
        <Biografia />

        <div
          className="section-divider relative"
          data-label="// GALERÍA DE PRENSA //"
        />
        <GaleriaPrensa />

        <div
          className="section-divider relative"
          data-label="// LO MÁS RECIENTE //"
        />
        <LoMasReciente />

        <div
          className="section-divider relative"
          data-label="// SPOTIFY //"
        />
        <SpotifyEmbed />

        <div
          className="section-divider relative"
          data-label="// PRÓXIMOS LANZAMIENTOS //"
        />
        <ProximosLanzamientos />

        <div
          className="section-divider relative"
          data-label="// BOOKING //"
        />
        <BookingCTA />
      </main>
    </>
  );
}
