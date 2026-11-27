// Values that belong to the visual design rather than to the content.
export const THEME = {
  // Browser chrome colour per colour scheme. Keep equal to --bg in src/styles/global.css.
  dark: '#0b0e11',
  light: '#f4f5f3',
  // Font files worth fetching early (the ones used above the fold). Paths under public/.
  preload: ["/fonts/geist-latin-wght-normal.woff2","/fonts/geist-mono-latin-wght-normal.woff2"] as string[],
};
