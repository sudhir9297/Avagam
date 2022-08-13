const size = {
  mobile: "599px",
  tabletMin: "600px",
  tabletMax: "899px",
  tabletLandscapeMin: "900px",
  tabletLandscapeMax: "1199px",
  desktopMin: "1200px",
  desktopMax: "1799px",
  desktopUp: "1800",
};

export const device = {
  forMobileOnly: `(max-width: ${size.mobile})`,
  forTabletPortraitOnly: `(min-width: ${size.tabletMin}) and (max-width: ${size.tabletMax})`,
  forTabletLandscapeOnly: `(min-width: ${size.tabletLandscapeMin}) and (max-width: ${size.tabletLandscapeMax})`,
  forDesktopBelow: `(max-width: ${size.tabletLandscapeMin})`,
  forDesktopOnly: `(min-width: ${size.desktopMin}) and (max-width: ${size.desktopMax})`,
  forDesktopLarge: `(min-width: ${size.desktopUp})`,
};
