
import MbbsAbroad from "../components/MbbsAbroad/MbbsAbroad";

import SlickSlider from "../components/LandingSection/SlickSlider";
import AboutSection from "./(home)/AboutSection/AboutSection";
import WhyChoose from "./(home)/WhyChoose/WhyChoose";
import LatestNews from "./(home)/LatestNews/LatestNews";
import Service from "./(home)/Service/Service";
import Section3 from "./(home)/Section3/Section3";
import FlagSection from "../components/FlagSection/FlagSection";
import WhyChooseReticulum from "./(home)/WhyChoose2/WhyChooseReticulum";



export default function Home() {
  return (
    <>
      <SlickSlider />
      <FlagSection />
      {/* <AboutSection /> */}
      <WhyChoose />
      <Section3 />
      <MbbsAbroad />
      <WhyChooseReticulum />
      <LatestNews />
      <Service />

    </>
  );
}
