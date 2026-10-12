import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ProjectIndex from "./components/ProjectIndex.jsx";
import useHashRoute from "./hooks/useHashRoute.js";
// import Blog from "./components/Blog.jsx"; // ready to wire to real blog data

export default function App() {
  const route = useHashRoute();

  // On page-route changes start at the top; when returning home via a plain
  // anchor hash (e.g. #work from the index page), scroll to that section
  // once it has mounted.
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.startsWith("#/")) {
      window.scrollTo(0, 0);
    } else {
      requestAnimationFrame(() =>
        document.getElementById(hash.slice(1))?.scrollIntoView()
      );
    }
  }, [route]);

  return (
    <div className="grain relative overflow-x-clip">
      <Navbar />
      {route === "/projects" ? (
        <ProjectIndex />
      ) : (
        <main>
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          {/* Blog section — fully designed, enable once blog data is connected.
              Also uncomment the Blog link in Navbar's LINKS. */}
          {/* <Blog /> */}
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  );
}
