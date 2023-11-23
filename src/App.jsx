// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Homepage";
import About from "./Pages/AboutPage";
import Blogs from "./Pages/BlogsPage";
import Team from "./Pages/TeamPage";
import "./App.css";
import EventsPage from "./Pages/EventsPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams/*" element={<Team />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
