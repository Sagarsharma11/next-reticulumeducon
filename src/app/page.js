
import FlagSection from "../components/FlagSection/FlagSection";
import SlickSlider from "../components/LandingSection/SlickSlider";
import AboutSection from "./(home)/AboutSection/AboutSection";
import WhyChoose from "./(home)/WhyChoose/WhyChoose";


export default function Home() {
  return (
    <>
      <SlickSlider />
      <FlagSection />
      <AboutSection />
      <WhyChoose />
    </>
  );
}
