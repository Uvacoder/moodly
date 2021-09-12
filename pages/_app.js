// css
import "tailwindcss/tailwind.css";
import "@fontsource/plus-jakarta-sans";
import "../styles/App.css";

// react hot toast
import { Toaster } from "react-hot-toast";

// meta tags
import { MetaTags } from "../components";

// plausible analytics
import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="moodly.site">
      <Toaster position="bottom-left" reverseOrder={false} />
      <Component {...pageProps} />
      <MetaTags />
    </PlausibleProvider>
  );
}

export default MyApp;
