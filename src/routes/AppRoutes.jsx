import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portifolio from "../components/Portifolio";   // se já adicionou
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Portifolio />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
