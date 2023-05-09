import Nav from "./components/Nav";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Nav></Nav>
        <Main></Main>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
