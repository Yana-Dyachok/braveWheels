import Benefits from "components/benefits/benefits";
import BikeBuilder from "components/bike-builder/bike-builder";
import HeroSection from "components/hero/hero";
import Recommendations from "components/recommendations/recommendations";
import Reviews from "components/reviews/reviews";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BikeBuilder />
      <Recommendations />
      <Benefits />
      <Reviews />
    </>
  )
}

export default HomePage;