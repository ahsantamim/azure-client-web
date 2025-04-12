import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AboutSection from "./components/AboutSection";
import MenuSection from "./components/MenuSection";
import GallerySection from "./components/GallerySection";
import ChefSection from "./components/ChefSection";
import SpecialsSection from "./components/SpecialsSection";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ReservationSection from "./components/ReservationSection";
import ContactSection from "./components/ContactSection";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/menu" element={<MenuSection />} />
          <Route path="/gallery" element={<GallerySection />} />
          <Route path="/chefs" element={<ChefSection />} />
          <Route path="/specials" element={<SpecialsSection />} />
          <Route path="/testimonials" element={<TestimonialCarousel />} />
          <Route path="/reservations" element={<ReservationSection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
