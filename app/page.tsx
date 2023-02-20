import FAQ from "@/components/FAQ";
import Features from "@/components/Featutes";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import SecondaryFeatures from "@/components/SecondaryFeatures";
import Tips from "@/components/Tips";
import "node_modules/react-modal-video/scss/modal-video.scss";
function Homepage() {
  return (
    <>
      <Hero />
      <Features />
      <SecondaryFeatures />
      <Tips />
      <Reviews />
      <Pricing />
      <FAQ />
    </>
  );
}

export default Homepage;
