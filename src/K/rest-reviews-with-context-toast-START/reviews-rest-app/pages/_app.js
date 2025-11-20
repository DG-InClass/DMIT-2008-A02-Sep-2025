import '../styles/globals.css'

import AppNotification from '../components/state/AppNotification';

function MyApp({ Component, pageProps }) {
  return <AppNotification>
    <Component {...pageProps} />
  </AppNotification> 

}

export default MyApp
