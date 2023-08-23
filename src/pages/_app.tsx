import '@/assets/styles/globals.scss'
import { SocketProvider } from '@/context/SocketProvider';
import { ReduxProvider } from '@/redux/Provider';
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if(window !== undefined){
      (window as any).bootstrap = require("bootstrap/dist/js/bootstrap.js");
      require("../assets/js/theme.js");
    }
  }, []);
  
  return (
    <ReduxProvider>
      {/* <SocketProvider> */}
        <Component {...pageProps} />
      {/* </SocketProvider> */}
    </ReduxProvider>
  )
}
