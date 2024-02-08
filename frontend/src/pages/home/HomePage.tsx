import { useState, useEffect } from "react";

import { useScrollToTop } from "../../hooks";

import { BikeSelection, Hero, RecommendationsSlider } from "../../components";
import { Button } from "../../theme";

export const HomePage = () => {
  const { scrollToTop } = useScrollToTop();
  const [visibleScrollBtn, setVisibleScrollBtn] = useState(false);

  useEffect(() => {
    const scrollFunction = () => {
      if (window.scrollY > 120) {
        setVisibleScrollBtn(true);
      } else {
        setVisibleScrollBtn(false);
      }
    }

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    }
  }, []);

  return (
    <>
      <Hero />
      <BikeSelection />
      {visibleScrollBtn && (
        <Button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
            zIndex: 1,
            borderRadius: "50%",
            padding: "13px",
          }}
        >
          <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 11.8896L21.87 14L12 4.22081L2.13 14L0 11.8896L12 0L24 11.8896Z" fill="white"/>
          </svg>
        </Button>
      )}
      <RecommendationsSlider />
    </>
  );
}