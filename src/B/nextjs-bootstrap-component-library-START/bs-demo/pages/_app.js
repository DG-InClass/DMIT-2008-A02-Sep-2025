import "@/styles/globals.css";
// This is a good place to add the Bootstrap stylesheets accross the entire app.
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
