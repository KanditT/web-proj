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
    
    <div>
      <Navbar />
      <LoginBody />
      <Footer />
    </div>
  );
}
