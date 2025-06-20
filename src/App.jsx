import Navbar from "./Navbar";
import Hero from "./Hero";
import Benefit from "./Benefit";
import WhyWorkWithUs from "./WhyWorkWithUs";
import Solution from "./solution";
import Enquiry from "./enquiry";
import Team from "./Team";
import Insights from "./Insights";
import AwardsShowcase from "./AwardShowcase";
import EthicsShowcase from "./EthicsShowCase";
import JoinUsSection from "./JoinUsSection";
import Footer from "./Footer";

function App() {
  return (
    <div className="min-h-screen font-sans relative">
      <Navbar />

      <div className="mx-2 mt-2 mb-2 md:mx-4 md:mt-2 md:mb-2 lg:mx-4 lg:my-2 rounded-3xl overflow-hidden bg-white">
        <Hero />
        <Benefit />
        <WhyWorkWithUs />
        <Solution />
        <Enquiry />
        <Team />
        <Insights />
        <AwardsShowcase />
        <EthicsShowcase />
        <JoinUsSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
