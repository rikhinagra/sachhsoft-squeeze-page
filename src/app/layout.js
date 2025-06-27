// "use client";

// import StyledComponentsRegistry from "./lib/registry";
// import GlobalStyles from "../styles/GlobalStyles";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <title>𝐒𝐀𝐂𝐇𝐇𝐒𝐎𝐅𝐓</title>
//         <link rel="icon" href="/favicon.ico" type="image/x-icon" />
//         <meta name="description" content="Professional landing page" />
//       </head>
//       <body>
//         <StyledComponentsRegistry>
//           <GlobalStyles />
//           {children}
//         </StyledComponentsRegistry>
//       </body>
//     </html>
//   );
// }

"use client";

import Script from "next/script";
import StyledComponentsRegistry from "./lib/registry";
import GlobalStyles from "../styles/GlobalStyles";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>𝐒𝐀𝐂𝐇𝐇𝐒𝐎𝐅𝐓</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="description" content="Professional landing page" />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M7RDMWP4');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M7RDMWP4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
