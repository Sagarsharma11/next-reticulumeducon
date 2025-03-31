
import MbbsAbroad from "../components/MbbsAbroad/MbbsAbroad";
import FlagSection from "../components/FlagSection/FlagSection";
import SlickSlider from "../components/LandingSection/SlickSlider";
import AboutSection from "./(home)/AboutSection/AboutSection";
import WhyChoose from "./(home)/WhyChoose/WhyChoose";
import LatestNews from "./(home)/LatestNews/LatestNews";
import Service from "./(home)/Service/Service";


export default function Home() {
  return (
    <>
      <SlickSlider />
      <FlagSection />
      <AboutSection />
      <WhyChoose />
      <MbbsAbroad />
      <LatestNews />
      <Service />
    </>
  );
}
