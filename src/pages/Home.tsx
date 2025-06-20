import AboutSection from "@/components/about-section/AboutSection";
import GlassNavbar from "../components/GlassNavbar";
import HeroSection from "../components/hero-section/HeroSection";
import FAQSection from "@/components/faq-section/FAQSection";
import SponsorForm from "@/components/sponsor-form/SponsorForm";
// import Header from "./components/Header";

function Home() {
  return (
    <>
        <GlassNavbar />
      <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900">
        {/* <Header /> */}
        <main>
          <HeroSection />
          <AboutSection />
          <FAQSection />
          <SponsorForm />
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
