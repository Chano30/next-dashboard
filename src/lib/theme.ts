import { createTheme } from "@nextui-org/react";

// Custom Light and Dark Themes
export const lightTheme = createTheme({
  type: "light", // Define light mode
  theme: {
    colors: {
      background: "#ffffff", // Light background
      text: "#000000", // Light text color
      primary: "#0070f3", // Primary color for buttons and other elements
      secondary: "#FF0080", // Example secondary color
    },
  },
});

export const darkTheme = createTheme({
  type: "dark", // Define dark mode
  theme: {
    colors: {
      background: "#151632", // Dark background
      text: "#f0f0f0", // Light text for dark mode
      primary: "#ff007f", // Primary color for dark mode
      secondary: "#1e1e2f", // Example secondary color for dark mode
    },
  },
});
