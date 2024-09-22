import Image from "next/image";
//import LoginBody from './loginBody';
// import ChatBody from './chatBody';
import Layout from './layout';
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import LoginBody from "./loginBody";
import pageChat from "./chat/page";


//import dynamic from 'next/dynamic';

//const LoginBody = dynamic(() => import('./loginBody'), { ssr: false });

export default function Home() {
  return (
          <div>
            {/* <Navbar /> */}
            <LoginBody />
            {/* <ChatBody /> */}
            {/* <Footer /> */}
          </div>

  );
}
