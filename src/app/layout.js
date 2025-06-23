"use client";

import StyledComponentsRegistry from "./lib/registry";
import GlobalStyles from "../styles/GlobalStyles";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>𝐒𝐀𝐂𝐇𝐇𝐒𝐎𝐅𝐓</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="description" content="Professional landing page" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
