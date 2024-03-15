// _app.js or your custom app component
import { SessionProvider } from "next-auth/react";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
