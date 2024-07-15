import React from "react";
import HeroSection from "../HeroSection";
import DailyPickSection from "../DailypickSection"; 
// import LadiesLoveSection from "../LadiesLove";
// import MenWearsSection from "../MensWears";
import Footer from "../footer";



const StorePage = () => {
  
  return (
    <div className="mx-6">
      <HeroSection />
        <React.Fragment>
          <DailyPickSection />
        </React.Fragment>
      <Footer />
    </div>
  );
};

export default StorePage;
