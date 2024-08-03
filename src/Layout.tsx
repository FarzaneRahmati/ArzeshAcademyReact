import { useEffect } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./Main";
import Footer from "./components/Footer";

function Layout() {
 

  return (
    <>
      <div className="w-full relative shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] bg-white overflow-hidden flex flex-col items-center justify-center gap-[0rem]">
        <Header/>
        <Navigation/>
        <Main/>
        <Footer />
      </div>
     
    </>
  );
}
export default Layout;