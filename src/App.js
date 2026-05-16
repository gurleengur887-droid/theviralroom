import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { AnimatePresence } from "framer-motion";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Intro from "./Components/Intro";
import Services from "./Components/Services";
import WhyChooseUs from "./Components/WhyChoose";
import CursorGlow from "./Components/CursorGlow";

import Projects from "./Pages/Projects";
import CategoryDetail from "./Pages/CategoryDetail";
import VideoPage from "./Pages/VideoPage";
import Contact from "./Components/Contact";
import StartProject from "./Components/StartProject";
import About from "./Components/About";
import Footer from "./Components/Footer";
import TeamProfile from "./Components/TeamProfile";


// 🔥 SCROLL HANDLER (top + anchor support)
function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}


// 🎬 ROUTES
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <ScrollHandler /> {/* ✅ ADDED */}

      <Routes location={location} key={location.pathname}>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Intro />
              <Services />
              <WhyChooseUs />
              <Projects />
              <Footer />
            </>
          }
        />

        {/* PROJECTS */}
        <Route path="/projects" element={<><Navbar /><Projects /><Footer /></>} />
        <Route path="/projects/:categoryId" element={<CategoryDetail />} />

        {/* VIDEO */}
        <Route path="/video/:videoId" element={<VideoPage />} />

        {/* OTHER PAGES */}
        <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
        <Route path="/startproject" element={<><Navbar /><StartProject /><Footer /></>} />
        <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
        <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
        <Route path="/team/:id" element={<TeamProfile />} />
      </Routes>
    </AnimatePresence>
  );
}


function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08, // 🔥 smoother feel
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Router>
       <CursorGlow /> 
      <AnimatedRoutes />
    </Router>
  );
}

export default App;