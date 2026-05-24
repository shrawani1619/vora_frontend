import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectHighlights from "./components/ProjectHighlights";
import ArchitecturalBanner from "./components/ArchitecturalBanner";
import Amenities from "./components/Amenities";
import ProjectOverview from "./components/ProjectOverview";
import Gallery from "./components/Gallery";
import FloorPlan from "./components/FloorPlan";
import Location from "./components/Location";
import Testimonials from "./components/Testimonials";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectHighlights />
        <ArchitecturalBanner />
        <Amenities />
        <ProjectOverview />
        <Gallery />
        <FloorPlan />
        <Location />
        <Testimonials />
        <EnquiryForm />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
