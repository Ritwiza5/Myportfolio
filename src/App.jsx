 import "./app.scss"
 import Navbar from "./components/navbar/Navbar";
 import Hero from "./components/hero/Hero";
 import Parallax from "./components/parallax/Parallax";

const App = () => {
  return <div>
    <section id="Homepage">
    <Navbar/>
    <Hero/>
    </section>
    <section id="Skills">{/*<Parallax type="skills"/>*/} asdfgh</section>
    <section >Services</section>
    <section id="Projects">{/*<Parallax type="portfolio"/>*/}sdfghj</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
