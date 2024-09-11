import Image from "next/image";
//import type { AppProps } from 'next/app';
import Navbar from './components/navbar'; // Ensure the path is correct
import LoginBody from './loginBody';
import Footer from './components/footer';
// function MyApp({ Component, pageProps }: AppProps) {
//     return (
//         <>
//             <Navbar />
//             <Component {...pageProps} />
//         </>
//     );
// }

// export default MyApp;
export default function Home() {
  return (
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <LoginBody />
      <Footer />
    </div>
  );
}
