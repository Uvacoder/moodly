import "tailwindcss/tailwind.css";
import "@fontsource/plus-jakarta-sans";
import "../styles/App.css";
import { Toaster } from "react-hot-toast";
import { MetaTags } from "../components";
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
