import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectHighlights from "./components/ProjectHighlights";
import ProjectOverview from "./components/ProjectOverview";
import Amenities from "./components/Amenities";
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
      <main className="pb-24 sm:pb-0">
        <Hero />
        <About />
        <ProjectHighlights />
        <ProjectOverview />
        <Amenities />
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
