// head
import Head from "next/head";

const MetaTags = () => {
  return (
    <Head>
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="theme-color" content="#d73e87" />

      <title>
        Moodly - Relax and focus on work through ambient nature sounds
      </title>
      <meta
        name="description"
        content="Get a better sense of peace and relaxation when listening to the nature sounds. Comes with various tracks created to suit your environment."
      />
      <meta
        name="keywords"
        content="moodly, moodly app, moodly producthunt, moodly relaxation, moodly web, nature sounds, nature sound, rain, weather, sound, ambient sounds, nature, savio, devdojo, github, producthunt, producthunt moodly, moods"
      />
      <link rel="icon" href="/favicon.ico" />

      {/* Primary Meta Tags */}
      <meta
        name="title"
        content="Moodly - Relax and focus on work through ambient nature sounds"
      />
      <meta
        name="description"
        content="Get a better sense of peace and relaxation when listening to the nature sounds. Comes with various tracks created to suit your environment."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Moodly - Relax and focus on work through ambient nature sounds"
      />
      <meta
        property="og:description"
        content="Get a better sense of peace and relaxation when listening to the nature sounds. Comes with various tracks created to suit your environment."
      />
      <meta
        property="og:image"
        content="https://moodly.vercel.app/assets/banner.png"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Moodly - Relax and focus on work through ambient nature sounds"
      />
      <meta
        property="twitter:description"
        content="Get a better sense of peace and relaxation when listening to the nature sounds. Comes with various tracks created to suit your environment."
      />
      <meta
        property="twitter:image"
        content="https://moodly.vercel.app/assets/banner.png"
      />

      {/* Buy Me A Coffee */}
      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="saviomartin"
        data-description="Support me on Buy me a coffee!"
        data-message="I hope you enjoy Moodly. Please consider buying me a coffee to support me!"
        data-color="#FFDD00"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
      ></script>
    </Head>
  );
};

export default MetaTags;
