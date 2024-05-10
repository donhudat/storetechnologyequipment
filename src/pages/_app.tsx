import '@/styles/globals.css'
import './asset/icon/fonts/fontawesome-free-6.4.2-web/css/all.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '@/context/authContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      <ToastContainer position='bottom-center' />
    </>
  )
}