import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// Fonts are bundled in public/fonts so renders work offline.
export const headlineFont = "Anton";
export const bodyFont = "Montserrat";

loadFont({
  family: headlineFont,
  url: staticFile("fonts/anton-latin-400-normal.woff2"),
  weight: "400",
});
for (const weight of ["800", "900"]) {
  loadFont({
    family: bodyFont,
    url: staticFile(`fonts/montserrat-latin-${weight}-normal.woff2`),
    weight,
  });
}

export const colors = {
  bg1: "#0b0b1e",
  bg2: "#1d0b3a",
  accent: "#ffd60a",
  accent2: "#ff2e88",
  text: "#ffffff",
};

// Safe area for a 1080px-wide vertical video (keeps clear of TikTok/Reels UI)
export const SAFE_X = 90;
