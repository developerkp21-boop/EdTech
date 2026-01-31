import "./App.css";
import Nav from "./componenets/Nav";
import Hero from "./componenets/Hero";
import ValueProposition from "./componenets/ValueProposition";
import Skills from "./componenets/Skills";
import Requirement from "./componenets/Requirement";
import Testimonials from "./componenets/Testimonials";
import Footer from "./componenets/Footer";

function App() {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <Nav></Nav>
        <Hero></Hero>
        <ValueProposition></ValueProposition>
        <Skills></Skills>
        <Requirement></Requirement>
        <Testimonials></Testimonials>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
