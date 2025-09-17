import Aboutpage from "./components/Aboutpage";
import ContactPage from "./components/ContactPage";
import FooterPage from "./components/FooterPage";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import ProjectsPage from "./components/ProjectsPage";
import ServicesPage from "./components/ServicesPage";
import toast, { Toaster } from 'react-hot-toast';
// import { Store } from "./GlobalStore/Store";
// import {Provider } from 'react-redux'
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App(){
  const color = useSelector((state) => state.theme.color);

  useEffect(() => {
    document.body.style.backgroundColor = color === "light" ? "#fff" : "#0a0a0a";
    // document.body.style.color = color === "light" ? "#000" : "#fff"; // optional for text
  }, [color]);
  return(
    <>
      <div>
        <Header/>
      <Homepage/>
      <Aboutpage/>
      <ServicesPage/>
      <ProjectsPage/>
      <ContactPage/>
      <FooterPage/>
      </div>
      <Toaster/>
    </>
  )
}


export default App;