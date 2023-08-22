import '@/styles/globals.scss'
import { SocketProvider } from '@/context/SocketProvider';
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if(window !== undefined){
      (window as any).bootstrap = require("bootstrap/dist/js/bootstrap.js");
      require("../js/theme.js");
    }
  }, []);
  
  return (
    <SocketProvider>
      <Component {...pageProps} />
    </SocketProvider>
  )
}
