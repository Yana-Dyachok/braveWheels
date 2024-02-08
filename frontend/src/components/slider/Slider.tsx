import React from "react";

import Carousel from "react-material-ui-carousel";

import { theme } from "../../theme";

import * as Elements from "./Elements";

type SliderProps = {
  children: React.ReactNode;
  cycleNavigation: boolean;
  navButtonsAlwaysVisible: boolean;
  autoPlay: boolean;
  indicators: boolean;
  navButtonsWrapperProps?: { style: React.CSSProperties };
  sliderHeight?: number;
}

const NavButton = ({ next, prev } : { next?: boolean; prev?: boolean; }) => {
  return (
    <Elements.NavButton>
      {prev && <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.9851 0L20 2.84L6.02972 16L20 29.16L16.9851 32L0 16L16.9851 0Z" fill="white"/>
      </svg>}
      {next && <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.01486 32L0 29.16L13.9703 16L0 2.84L3.01486 0L20 16L3.01486 32Z" fill="white"/>
      </svg>}
    </Elements.NavButton>
  );
}

export const Slider: React.FC<SliderProps> = ({
  children,
  cycleNavigation,
  navButtonsAlwaysVisible,
  autoPlay,
  indicators,
  navButtonsWrapperProps,
  sliderHeight,
}) => {
  return (
    <Carousel
      NextIcon={<NavButton next />}
      PrevIcon={<NavButton prev />}
      autoPlay={autoPlay}
      navButtonsAlwaysVisible={navButtonsAlwaysVisible}
      animation="slide"
      cycleNavigation={cycleNavigation}
      navButtonsWrapperProps={navButtonsWrapperProps}
      navButtonsProps={{
        style: {
          borderRadius: "10px",
          padding: 0,
          opacity: 1,
          width: "40px",
          backgroundColor: theme.light.palette.grey,
        },
      }}
      indicatorContainerProps={{
        style: {
          display: "flex",
          justifyContent: "center",
          gap: "6px",
        }
      }}
      indicatorIconButtonProps={{
        style: {
          color: "transparent",
          width: "20px",
          height: "7px",
          backgroundColor: theme.light.palette.grey,
          borderRadius: "10px",
        }
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: "transparent",
          width: "20px",
          height: "7px",
          backgroundColor: theme.light.palette.orange,
          borderRadius: "10px",
        }
      }}
      indicators={indicators}
      height={sliderHeight}
      sx={{
        "& .MuiButtonBase-root": {
          opacity: "1 !important",
          "&:hover": {
            opacity: "1 !important",
            backgroundColor: theme.light.palette.orange,
          },
          borderRadius: "10px",
          "& span": {
            display: "none",
          }
        },
      }}
    >
      {children}
    </Carousel>
  )
}