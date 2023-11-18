// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Homepage";
import About from "./Pages/AboutPage";
import Contact from "./Pages/ContactPage";
import Team from "./Pages/TeamPage";
import "./App.css";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teams" element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
