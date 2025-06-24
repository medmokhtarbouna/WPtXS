import AboutSection from "@/components/about-section/AboutSection";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/hero-section/HeroSection";
import FAQSection from "@/components/faq-section/FAQSection";
import SponsorForm from "@/components/sponsor-form/SponsorForm";
import Speakers from "@/components/speakers/Speakers";
import TicketsSection from "@/components/tickets-section/TicketsSection";
// import Header from "./components/Header";

function Home() {
  return (
    <>
        <Navbar />
      <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900">
        {/* <Header /> */}
        <main>
          <HeroSection />
          <AboutSection />
  
          <Speakers />

          <TicketsSection/>
          <FAQSection />
          {/* <SponsorForm /> */}
        </main>
        {/* <Navbar /> */}
        <main>
          {/* <Hero /> */}
          {/* … بقية الأقسام … */}
        </main>
      </div>
    </>
  );
}

export default Home;
