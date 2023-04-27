import React, { useState } from "react";
import Navbar from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Projects/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [pageState, setPageState] = useState({
    aboutPage: true,
    portfolioPage: false,
    contact: false,
  });

  return (
    <>
      <Navbar pageState={pageState} setPageState={setPageState} />
      {pageState.aboutPage ? <AboutMe /> : ""}
      {pageState.portfolioPage ? <Portfolio /> : ""}
      {pageState.contact ? <Contact /> : ""}

      <Footer />
    </>
  );
}

export default App;
