import "../styles.css";
import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="subtract.fi">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
