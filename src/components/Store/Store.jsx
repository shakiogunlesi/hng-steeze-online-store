import HeroSection from "../HeroSection";
import DailyPickSection from "../DailypickSection"; 
import LadiesLoveSection from "../LadiesLove";
import MenWearsSection from "../MensWears";
import Footer from "../footer";


const StorePage = () => {
    return (
      <>
        <div className="mx-6">
            <HeroSection />
            <DailyPickSection />
            <LadiesLoveSection />
            <MenWearsSection />
            <Footer />
        </div>
      </>
    );
  };
  
  export default StorePage;