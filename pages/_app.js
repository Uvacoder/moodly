import "tailwindcss/tailwind.css";
import "@fontsource/plus-jakarta-sans";
import "../styles/App.css";
import { Toaster } from "react-hot-toast";
import { MetaTags } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <Component {...pageProps} />
      <MetaTags />
    </>
  );
}

export default MyApp;
