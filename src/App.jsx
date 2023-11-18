 import "./app.scss"
 import Navbar from "./components/navbar/Navbar";
 import Hero from "./components/hero/Hero";
 import Parallax from "./components/parallax/Parallax";
 import Services from "./components/services/Services";
 import Portfolio from "./components/portfolio/Portfolio";
 import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
    <section id="Homepage">
    <Navbar/>
    <Hero/>
    </section>
    <section id="Skills"><Parallax type="skills"/></section>
    <section ><Services/></section>
    <section id="Projects"><Parallax type="portfolio"/></section>
   <Portfolio/>
    <section id="Contact"><Contact/></section>
  </div>;
};

export default App;
